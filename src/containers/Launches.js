import { useState, useEffect } from 'react';

import Search from '../components/Search';
import Launch from '../components/Launch';

import fetchLaunches from '../logic/fetch';
import filterLaunches from '../logic/filter';

const Launches = () => {
  const [query, setQuery] = useState();
  const [DefaultLaunchList, setDefaultLaunchList] = useState();
  const [launchList, setLaunchList] = useState([]);

  const setData = async data => {
    const launches = await data;
    setLaunchList(launches);
    setDefaultLaunchList(launches);
  };

  useEffect(() => {
    const data = fetchLaunches();
    setData(data);
  }, []);

  const allLaunches = typeof launchList === 'undefined' || launchList.length === 0
    ? <p>loading...</p>
    : launchList.map(launch => <Launch key={launch.id} launch={launch} />);

  const updateQuery = query => {
    setQuery(query);
    setLaunchList(filterLaunches(DefaultLaunchList, query));
  };

  return (
    <main>
      <Search query={query} onChange={updateQuery} />
      <section>{allLaunches}</section>
    </main>
  );
};

export default Launches;
