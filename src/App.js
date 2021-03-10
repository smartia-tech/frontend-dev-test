import React from "react";
import SearchPage from './components/SearchPage'

import "./App.css";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to the SpaceX launches data</h1>
          <SearchPage />
      </div>
    );
  }
}