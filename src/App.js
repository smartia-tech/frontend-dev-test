import React, { useState, useEffect } from 'react';
import useSWR from 'swr';

import LaunchesList from './components/LaunchesList';
import LaunchesSearch from './components/LaunchesSearch';

import parser from './helpers/parser';
import fetcher from './helpers/fetcher';
import filterLaunches from './helpers/searchFilter';

function App() {
  const { search } = window.location;
  const query = new URLSearchParams(search).get('launch');

  const [hasError, setHasError] = useState(null);
  const [period, setPeriod] = useState('past');
  const [searchQuery, setSearchQuery] = useState(query || '');
  const [launches, setLaunches] = useState(null);

  const { data, error } = useSWR(`https://api.spacexdata.com/v4/launches/${period}`, fetcher);

  const allLaunches = parser.get(launches);
  const filteredLaunches = filterLaunches(allLaunches, searchQuery);

  useEffect(() => {
    setLaunches(data);
    setHasError(error);
  }, [data]);
  return (
    <div className="content">
      <h1 className="content__title">SpaceX&apos;s Launches</h1>
      {hasError && <h1>Ooops, we cound&apos;t process the request :( </h1>}
      <div className="content__actions">
        <LaunchesSearch
          handlePeriodChange={(e) => setPeriod(e.target.value)}
          handleSearchChange={(e) => setSearchQuery(e.target.value)}
          period={period}
          searchQuery={searchQuery}
        />
      </div>
      {!hasError && !launches && <h1>Loading...</h1>}
      {launches && (
        <div className="grid">
          <LaunchesList launches={filteredLaunches} />
        </div>
      )}
    </div>
  );
}

export default App;
