import React from "react";
import './Landing.scss';
import logo from './assets/spacex.svg';
import routes from './constants/routes.json';

export interface Props {
    history: any
}

class LandingComponent extends React.Component<Props, {}> {

    render() {
        return(
            <div className="sx-landing">
                <div className="container d-flex">
                    <img src={logo} alt="logo" />
                    <p className="m-0 text-uppercase pt-5 white-text">Launch and Land and Relaunch</p>
                    <button className="sx-button" onClick={() => this.props.history.push(routes.LAUNCHES)}>
                        View Past Launches
                    </button>
                </div>
            </div>
        )
    }
}

export default LandingComponent;