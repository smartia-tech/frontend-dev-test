import React from 'react'

const LaunchInfo = ({name, image, date, success}) => {
    return (
        <div className="card">
            <div className = "card-container">
            <div className="card-image" style= {{backgroundImage : `url(${image})`}}></div>
            <p>Name : {name}</p>
            <p>Date : {date}</p>
            <p>Successful Launch ? {success}</p>
            </div>
        </div>
    )
}

export default LaunchInfo
