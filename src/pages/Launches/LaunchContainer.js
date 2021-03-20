import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { LaunchView } from './LaunchView';

export const LaunchContainer = (props) => {
    const { launchResponse, getPastLaunches, searchPastLaunches } = props;
    const [pastLaunches, setPastLaunches] = useState([])
    const [searchParameter, setSearchParameter] = useState("");
    
    const getAllPastLaunches = () => {
        getPastLaunches();
    };

    const updateSearchParameter = (e) => {
        setSearchParameter({ ...searchParameter, [e.target.name]: e.target.value });
    };

    const onSearchButtonClick = () => {
        searchPastLaunches(searchParameter);
        setPastLaunches(launchResponse.data ? launchResponse.data.docs : [])
    }

    useEffect(() => {
        let mounted = true;
        getAllPastLaunches();
        if(mounted) {
            setPastLaunches(launchResponse.data)
        }
        return () => mounted = false;
    });
    return (
        <div>
            {pastLaunches && <LaunchView data={pastLaunches} onClick={onSearchButtonClick} onChange={updateSearchParameter} />}
        </div>
    );
}

LaunchContainer.propTypes = {
    getPastLaunches: PropTypes.func.isRequired,
    launchResponse: PropTypes.instanceOf(Object).isRequired,
};
