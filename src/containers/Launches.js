import { useState, useEffect } from 'react';

import Search from '../components/Search';
import Launch from '../components/Launch';

import fetchLaunches from '../logic/fetch';
import filterLaunches from '../logic/filter';

const Launches = () => {
  const [query, setQuery] = useState('');
  const [DefaultLaunchList, setDefaultLaunchList] = useState();
  const [launchList, setLaunchList] = useState([]);
  const [error, setError] = useState('');
  const [info, setInfo] = useState('Loading...');

  const setData = async data => {
    const launches = await data;
    if (typeof launches === 'string') {
      setError(launches);
      setInfo('');
    } else {
      setError('');
      setLaunchList(launches);
      setDefaultLaunchList(launches);
    }
  };

  const allLaunches = typeof launchList === 'undefined' || launchList.length === 0 ? (
    <p>{`${info}${error}`}</p>
  ) : (
    launchList.map(launch => <Launch key={launch.id} launch={launch} />)
  );

  const updateQuery = query => {
    setQuery(query);
    const filtered = filterLaunches(DefaultLaunchList, query);
    setLaunchList(filtered);
  };

  useEffect(() => {
    const data = fetchLaunches();
    setData(data);
  }, []);

  return (
    <main>
      <Search query={query} setQuery={updateQuery} />
      <section>{allLaunches}</section>
    </main>
  );
};

export default Launches;