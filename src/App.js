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
      {props.launch.name}<br/>
      <img className="launch-patch" src={props.launch.links.patch.small} alt="Launch icon"/><br/>
      Date: {props.launch.date_utc}<br/>
      Success: {props.launch.cores.landing_success}
    </div>
  )
}

function Launches(props) {
  return (
    <div className="launches">
      launches: {props.launches.length}
      {props.launches.map(launch => <Launch launch={launch} key={launch.id}/>)}
    </div>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      launches: [],
      error: null
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
    return <Launches launches={this.state.launches}/>;
  }
}

export default App;
