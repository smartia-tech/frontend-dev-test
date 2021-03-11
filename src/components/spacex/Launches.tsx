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
      <h2 className="head-md">Launches</h2>
      <div className="launches">
        {launches.map((launch) => {
          return <Launch key={launch.id} launch={launch} />;
        })}
      </div>
    </div>
  );
};

export default Launches;
