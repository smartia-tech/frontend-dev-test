import axios from "axios";
import React from "react";
import { API_URL, BASE_URL } from "./constants/url.constants";
import { PastLaunches } from "./interfaces/state.interface";

class LaunchesComponent extends React.Component<{}, PastLaunches> {

    componentDidMount() {
        axios.get(`${BASE_URL}${API_URL.PAST_LAUNCHES}`)
        .then(
            (res) => {
                this.setState({
                    pastLaunches: res.data
                })
            }
        )
    }

    render() {
        return(
            <div>
                <p>launches</p>
            </div>
        )
    }
}

export default LaunchesComponent;