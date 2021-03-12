import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.scss';

function App() {
  const [launches, setLaunches] = useState([]);
  const [launchSearch, setLaunchSearch] = useState('');
  const [launchList, setLaunchList] = useState(launches);
  const [currentLaunch, setCurrentLaunch] = useState(undefined);

  const fetchLaunches = async () => {
    const myLaunches = await axios(
      'https://api.spacexdata.com/v4/launches/past'
    );

    setLaunches(myLaunches.data);
  };

  //get launches on render
  useEffect(() => fetchLaunches(), []);

  //create list of launches
  const allLaunches = launchList.map((launch) => (
    <div
      className="pastLaunch"
      key={launch.id}
      onClick={() => setCurrentLaunch(launch)}
    >
      <span>{launch.name}</span>
    </div>
  ));

  //search for launch
  useEffect(() => {
    const newList = launches.filter((el) =>
      el.name.toLowerCase().startsWith(launchSearch.toLowerCase())
    );
    setLaunchList(newList);
  }, [launchSearch, launches]);

  return (
    <main>
      <div className="search">
        <input
          type="text"
          value={launchSearch}
          onChange={(e) => setLaunchSearch(e.target.value)}
          placeholder="Name"
        />
      </div>
      <div className="content">
        <section className="left">
          {currentLaunch === undefined ? (
            <p>Select Launch</p>
          ) : (
            <>
              <div className="launchImage">
                <img
                  src={currentLaunch.links.patch.small}
                  alt={currentLaunch.name}
                />
              </div>
              <h3>{currentLaunch.name}</h3>
              <h4>
                {new Date(currentLaunch.date_local).toLocaleString('en-US', {
                  dateStyle: 'medium',
                  timeStyle: 'short'
                })}
              </h4>
              <h5
                style={
                  currentLaunch.success
                    ? { color: 'green' }
                    : { color: 'darkred' }
                }
              >
                {currentLaunch.success ? 'SUCCESS' : 'FAILED'}
              </h5>
            </>
          )}
        </section>
        <section className="right">
          {launchList.length < 1 ? <p>No launch found</p> : allLaunches}
        </section>
      </div>
    </main>
  );
}

export default App;
