import './App.css';
import React from 'react'
import Search from './components/spacex/Search'
import Launches from './components/spacex/Launches'

import {ContextProvider} from './context'

const App: React.FC = () => {
  return (
    <ContextProvider>
      <h1>SpaceX Lanches</h1>
      <Search />
      <Launches />
    </ContextProvider>
  )
}

export default App;
