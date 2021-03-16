import React, { useState, useEffect } from 'react';

import './App.css';

function App() {
  const [allLaunches, setAllLaunches] = useState([]);
  const [displayedLaunches, setDisplayedLaunches] = useState([]);

  useEffect(() => {
    fetch('https://api.spacexdata.com/v4/launches/past')
      .then(response => {
        if (!response.ok) { throw response }
        return response.json();
      })
      .then(data => {
        setAllLaunches(data);
        setDisplayedLaunches(data);
      }).catch(error => {
        console.log(error);
      });
  }, []);

  function filterResults(filter) {
    const filteredData = allLaunches.filter(launch => (
      launch.name.toLowerCase().includes(filter)
    ));
    setDisplayedLaunches(filteredData);
  };

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="page-wrapper">
      <form className="filter__form" action="" onSubmit={handleSubmit}>
        <label className="filter__label" htmlFor="filter">Filter</label>
        <input
          className="filter__input"
          id="filter"
          type="text"
          onChange={(e) => filterResults(e.target.value)}
        />
      </form>

      <ul className="results__list">
        {displayedLaunches.map(launch => (
          <li key={launch.id} className="result__item">
            <a className="result__link" href={launch.links.wikipedia}>
              <img
                className="result__patch"
                src={launch.links.patch.small}
                alt={`${launch.name} patch`}
              />
              <div className="result__name">{launch.name}</div>
              <div className="result__date">
                {new Date(launch.date_local).toDateString()}
              </div>
              <ul className="result__cores">
                {launch.cores.map(core => (
                  <li
                    className={`result__core-status
                      result__core-status--${core.landing_success ? 'success' : 'failure'}`}
                    key={core.core}
                  >
                    {core.landing_success ? 'Success' : 'Failure'}
                  </li>
                ))}
              </ul>
            </a>
          </li>
        )).reverse()}
      </ul>
    </div>
  );
}

export default App;
