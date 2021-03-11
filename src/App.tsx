import './App.css';
import React from 'react';
import Search from './components/spacex/Search';
import Launches from './components/spacex/Launches';

import { ContextProvider } from './context';

const App: React.FC = () => {
  return (
    <ContextProvider>
      <div className="container">
        <h1 className="head-lg">SpaceX Launches</h1>
        <Search />
        <Launches />
      </div>
    </ContextProvider>
  );
};

export default App;
