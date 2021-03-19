import './App.css';
import axios from 'axios';
import SpaceXData from './components/SpaceXData';

const api = axios.create({
  baseURL: 'https://api.spacexdata.com/v4'
})

function App() {
  return (
    <div className="App">
     <SpaceXData/>
    </div>
  );
}

export default App;
