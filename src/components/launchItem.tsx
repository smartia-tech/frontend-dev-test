import React from 'react'
import { Launch } from '../common/types'

const LaunchCard = ({ launch }: LaunchCardProps) => {
    return (
        <div>
            {launch.name}
        </div>
    )
}

type LaunchCardProps = {
    launch: Launch
}

export default LaunchCard