import React from 'react';
import { Launch } from '../common/types';
import LaunchItem from './launchItem'

const LaunchList = ({ launches=[] }: LaunchListParam) => {
    const launchItems = launches.map(launch => {
        return <LaunchItem key={launch.id} launch={launch} />
    })

    return (
        <div className="List" data-testid="list">
            {launches.length ? launchItems : <h3>No Result</h3>}
        </div>
    )

}


type LaunchListParam = {
    launches: Launch[]
}

export default LaunchList