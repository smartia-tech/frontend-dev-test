import logo from './logo.svg';
import React from 'react';
import './App.css';

function AppError(props) {
  return (
    <div className="error">
      Something happened: { props.error }
    </div>
  );
}

function AppLoading(props) {
  return (
    <div className="loading">
      Loading apps
    </div>
  )
}

function Launch(props) {
  return (
    <div className="launch">
      <span className="name">{props.launch.name}</span>
      <img
        className="launch-patch"
        src={props.launch.links.patch.small}
        alt="Launch icon"
        width="20"
      />
      <span className="date">
        { new Date(props.launch.date_utc).toISOString().split('T')[0] }
      </span>
      <span className="result">{props.launch.cores.landing_success}</span>
    </div>
  )
}

function Paginate(props) {
  let pages = Math.ceil(props.entries.length / props.perPage);
  let index = props.page * props.perPage;
  let entries = props.entries.slice(index, index+10);
  return (
    <div>
      <div className="entries">{entries}</div>
      <div className="pages">
        {new Array(pages).fill(0).map((_, i) => {
          return <button
            key={i}
            className="page-accessor"
            onClick={() => props.changePage(i)}
            disabled={props.page === i}
          >{i+1}</button>
        })}
      </div>
    </div>
  );
}

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
    })
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
