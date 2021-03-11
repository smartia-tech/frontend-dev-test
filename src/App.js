import React from 'react';
import './App.css';

import AppError from './components/AppError.js';
import AppLoading from './components/AppLoading.js';
import Launch from './components/Launch.js';
import Paginate from './components/Paginate.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      launches: [],
      error: null,
      search: "",
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
    })().catch(ex => {
      this.setState({
        error: ex
      });
    });
  }

  render() {
    if (this.state.error) return <AppError error={this.state.error}/>;
    if (!this.state.loaded) return <AppLoading/>;

    let filteredLaunches = this.state.launches.filter(launch => {
      let text = launch.name.toLowerCase();
      let search = this.state.search.toLowerCase();
      return text.indexOf(search) !== -1;
    }).map(launch => {
      return <Launch launch={launch} key={launch.id}/>;
    });

    return <div>
      Search: <input
        type="text"
        value={this.state.search}
        onChange={evt => this.setState({ search: evt.target.value, page: 0 })}
      />

      <div className="launches">
        launches: {filteredLaunches.length} (of {this.state.launches.length})
        <Paginate
          page={this.state.page}
          entries={filteredLaunches}
          perPage={10}
          changePage={page => this.setState({ page })}
        />
      </div>
    </div>;
  }
}

export default App;
