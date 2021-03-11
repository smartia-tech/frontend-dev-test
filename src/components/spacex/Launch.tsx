import React from 'react';
import moment from 'moment';
import { Launch as ILaunch } from '../../types/Launch';

interface Props {
  launch: ILaunch;
}

const Launch: React.FC<Props> = ({ launch }) => {
  return (
    <div className="launch">
      <img
        className="flight-patch-image"
        src={launch.flight_patch_image}
        alt={launch.name}
      />
      <h3 className="head-sm">{launch.name}</h3>
      <p className="date">
        Launched -
        <span> {moment(launch.launch_date).format('MMMM Do YYYY')}</span>
      </p>
      {launch.landing_success !== null ? (
        <p className="landing-success">
          Landing success - {launch.landing_success ? 'Yes' : 'No'}
        </p>
      ) : null}
    </div>
  );
};

export default Launch;
