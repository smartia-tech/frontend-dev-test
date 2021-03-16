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
                    <img className="pl-5" src={logo} alt="logo" />
                    <button className="sx-button mt-5" onClick={() => this.props.history.push(routes.LAUNCHES)}>
                        View Past Launches
                    </button>
                </div>
            </div>
        )
    }
}

export default LandingComponent;