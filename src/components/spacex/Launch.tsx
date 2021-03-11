import React from 'react';
import { Launch as ILaunch } from '../../types/Launch';

interface Props {
  launch: ILaunch;
}

const Launch: React.FC<Props> = ({ launch }) => {
  return (
    <div>
      <img src={launch.flight_patch_image} alt={launch.name} />
      <h3>{launch.name}</h3>
      <p>Date launched: {launch.launch_date}</p>
      {launch.landing_success !== null ? (
        <p>Landing success: {'' + launch.landing_success}</p>
      ) : null}
    </div>
  );
};

export default Launch;
