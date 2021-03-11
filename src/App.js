import React from 'react';
import './css/App.css';

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
      search: '',
      searchRegex: null,
      searchRegexError: null,
      searchType: 'exact',
      searchTypes: ['exact', 'fuzzy', 'regex'],
      page: 0,
      perPage: 10
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

  recompileSearchRegex(text) {
    try {
      this.setState({
        searchRegex: new RegExp(text, 'i'),
        searchRegexError: null
      });
    } catch(ex) {
      this.setState({
        searchRegex: null,
        searchRegexError: ex
      });
    }
  }

  setSearchText(evt) {
    this.setState({ search: evt.target.value, page: 0 });
    this.recompileSearchRegex(evt.target.value);
  }

  setSearchType(evtOrType) {
    this.setState({
      searchType: typeof evtOrType == 'object'
        ? evtOrType.target.value
        : evtOrType,
      page: 0
    });
  }

  render() {
    if (this.state.error) return <AppError error={this.state.error}/>;
    if (!this.state.loaded) return <AppLoading/>;

    let filteredLaunches = this.state.launches.filter(launch => {
      let text = launch.name.toLowerCase();
      let search = this.state.search.toLowerCase();

      switch (this.state.searchType) {
        case 'exact':
          return text.indexOf(search) !== -1;

        case 'fuzzy':
          let currentIndex = 0;
          let charsLeft = [...search].reverse();
          while (charsLeft.length > 0) {
            let nextIndex = text.indexOf(
              charsLeft[charsLeft.length-1],
              currentIndex
            );
            if (nextIndex == -1) return false;
            currentIndex = nextIndex+1;
            charsLeft.pop();
          }
          return true; // todo

        case 'regex':
          if (!this.state.searchRegex) return false;
          return this.state.searchRegex.test(text);

        default:
          throw new Error('Unsupported search type: ' + this.state.searchType);
      }
    }).map(launch => {
      return <Launch launch={launch} key={launch.id}/>;
    });

    console.log(this.state.searchRegexError, this.state.searchRegex, this.state.searchType);
    return <div id="app">
      <h1>SearchX</h1>

      <div className="search">
        <div className="input-group">
          <label htmlFor="search">Search text</label>
          <input
            name="search"
            type="text"
            value={this.state.search}
            onChange={evt => this.setSearchText(evt)}
          />
          {
            this.state.searchRegexError && (this.state.searchType === 'regex')
              ? <div className="error">
                { this.state.searchRegexError.toString() }
              </div>
              : null
          }
        </div>

        {this.state.searchTypes.map(type => {
          return <div className="input-group checkbox" key={type}>
            <input
              type="radio"
              name={type}
              value={type}
              checked={this.state.searchType === type}
              onChange={evt => this.setSearchType(evt)}
            />
            <label htmlFor={type} onClick={() => this.setSearchType(type)}>
              {type}
            </label>
          </div>
        })}

        <div className="input-group">
          <label htmlFor="">Results per page</label>
          <input
            type="number"
            min="1"
            max={this.state.launches.length}
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
