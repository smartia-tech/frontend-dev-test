import React from 'react'
import Header from './components/Header'
import Search from './components/Search'
import LaunchesContent from './components/LaunchesContent'
import {
  BrowserRouter as Router,
} from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <Header />
        <Search />
        <LaunchesContent />
      </Router>
    </>
  );
}

export default App;
