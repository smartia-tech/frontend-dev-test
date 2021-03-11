import React from 'react';
import './css/App.css';

import AppError from './components/AppError.js';
import AppLoading from './components/AppLoading.js';
import Launch from './components/Launch.js';
import Paginate from './components/Paginate.js';
import SearchUI from './components/SearchUI.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      launches: [],
      loaded: false,
      error: null,

      filter: () => true,
      perPage: 10,
      page: 0
    };
  }

  componentDidMount() {
    const endpoint = 'https://api.spacexdata.com/v4/launches';
    (async () => {
      this.setState({
        launches: await (await fetch(endpoint)).json(),
        loaded: true
      });
      setTimeout(() => console.log('loaded launches', this.state.launches));
    })().catch(ex => {
      this.setState({
        error: ex
      });
    });
  }

  render() {
    if (this.state.error) return <AppError error={this.state.error}/>;
    if (!this.state.loaded) return <AppLoading/>;

    let filteredLaunches = this.state.launches
      .filter(launch => this.state.filter(launch))
      .map(launch => <Launch launch={launch} key={launch.id}/>);

    return <div id="app">
      <h1>SearchX</h1>

      <div className="search">
        <SearchUI setFilter={filter => this.setState({ filter, page: 0 })}/>
        <div className="input-group">
          <label htmlFor="">Results per page</label>
          <input
            type="number"
            min="1"
            value={this.state.perPage}
            onChange={evt => this.setState({ perPage: evt.target.value, page: 0 })}
          />
        </div>
      </div>

      <div className="launches">
        launches: {filteredLaunches.length} (of {this.state.launches.length})
        <Paginate
          page={this.state.page}
          entries={filteredLaunches}
          perPage={this.state.perPage}
          changePage={page => this.setState({ page })}
        />
      </div>
    </div>;
  }
}

export default App;
