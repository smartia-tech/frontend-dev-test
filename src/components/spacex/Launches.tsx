import React from 'react';
import Launch from './Launch';

import { Context, ContextValues } from '../../context';

const Launches: React.FC = () => {
  const { fetchLaunches, launches } = React.useContext(
    Context
  ) as ContextValues;

  React.useEffect(() => {
    fetchLaunches();
  }, []);
  return (
    <div>
      <h2>Past Launches</h2>
      {launches.map((launch) => {
        return <Launch key={launch.id} launch={launch} />;
      })}
    </div>
  );
};

export default Launches;
