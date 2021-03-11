import { useState, useEffect } from 'react'
import LaunchList from './components/LaunchList';
import Search from './components/Search';

const App = () => {

  const [launches, setLaunches] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch('https://api.spacexdata.com/v4/launches/past')
    .then(response => response.json())    
    .then(launches => setLaunches(launches))
}, [])

  const searchLaunch = (event) => {
    setSearchQuery(event.target.value)
  }

  let filteredLaunches = launches.filter(
    (launch) => {
      //return launch.name.indexOf(searchQuery) !== -1
      return launch.name.toLowerCase().includes(searchQuery.toLowerCase());
    } 
  )

    return (
      <div className="container">
        <h1 className="display-4 text-center">SpaceX Launches</h1>
        <Search searchLaunchesProp={searchLaunch}/>
        <LaunchList launches= {filteredLaunches} />
      </div>
    )

}

export default App;


/*   fetch('https://api.spacexdata.com/v4/launches/past')
  .then(response => response.json())
    //.then(launches => console.log(launches))
  .then(launches => setLaunches({launches : launches})) */