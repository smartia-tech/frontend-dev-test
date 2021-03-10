import React from "react";

const Launch = props => {
    return (
      <div className="launch-card">
        <img src={props.launch.links.patch.small} alt={props.launch.name}/>
        <h2>{props.launch.name}</h2>
        <h3>Launch date: {props.launch.date_utc.split('T')[0]}</h3>
        <h3>Successful landing: {props.launch.cores[0].landing_success ? 'Yes' : 'No'}</h3>
      </div>
    );
};

export default Launch;