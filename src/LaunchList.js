import React from 'react';
import axios from 'axios';

export default class LaunchList extends React.Component {
    state = {
        launches: [],
        searchText: '',
    }
    componentDidMount() {
        axios.get('https://api.spacexdata.com/v4/launches/').then(result => {
            const launches = result.data;
            this.setState({ launches: launches });
        }).catch(error => {
            if (error) {
                console.error(error);
            }
        });
    }
    searchLaunch(value) {
        this.setState({ searchText: value });
    }
    render() {
        const filteredDetails = this.state.searchText ? this.state.launches.filter(launch => launch.name.toUpperCase().includes(this.state.searchText.toUpperCase())) : this.state.launches;
        let img;
        const launchDetails = filteredDetails.map(launch => {
            if (launch.links.patch.small) {
                img = <img alt={launch.name} src={launch.links.patch.small} />
            } else {
                img = '';
            }
            return <tr key={launch.name}>
                <td>
                    {img}
                    <div>{launch.name}</div>
                </td>
                <td>
                    {new Date(launch.date_utc).toLocaleDateString('en-US')}
                </td>
                <td>
                    {launch.cores.find(core => core.landing_success) ? 'true' : 'false'}
                </td>
            </tr>
        });
        return <div className="container">
            <div className="header">
                <h1>Smartia Frontend Developer Challenge</h1>
                <input className="search" type="text" placeholder="search" onChange={event => this.searchLaunch(event.target.value)} />
            </div>
            <table className="data-table">
                <thead>
                    <tr>
                        <th>launchName</th>
                        <th>launchDate</th>
                        <th>landing_success</th>
                    </tr>
                </thead>
                <tbody>
                    {launchDetails}
                </tbody>
            </table>
        </div>;
    }

}