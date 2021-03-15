import React from 'react'
import Header from './components/Header'
import LaunchesContent from './components/LaunchesContent'
import {
  BrowserRouter as Router,
} from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <Header />
        <LaunchesContent />
      </Router>
    </>
  );
}

export default App;
