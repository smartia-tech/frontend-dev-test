import React from 'react';
import PropTypes from 'prop-types';

const LaunchesList = ({ launches }) => {
  if (Array.isArray(launches)) {
    return (
      <>
        {launches?.map((launch) => (
          <div className="launch" key={launch.id}>
            {launch.imageUrl ? (
              <img className="launch__image" src={launch.imageUrl} alt="rocket" />
            ) : (
              <h3 className="launch__content">No image available</h3>
            )}
            <div className="launch__content">
              <p className="launch__name">Launch Name: {launch.name}</p>
              <p className="launch__date">Launch Date: {launch.date}</p>
              <p className="launch__landing">
                Landing Status: {launch.landingStatus ? 'Success' : 'Failed'}
              </p>
            </div>
          </div>
        ))}
      </>
    );
  }
  return (
    <div className="launch">
      {launches?.imageUrl ? (
        <img className="launch__image" src={launches?.imageUrl} alt="rocket" />
      ) : (
        <h3 className="launch__content">No image available</h3>
      )}
      <div className="launch__content">
        <p className="launch__name">Launch Name: {launches?.name}</p>
        <p className="launch__date">Launch Date: {launches?.date}</p>
        <p className="launch__landing">
          Landing Status: {launches?.landingStatus ? 'Success' : 'Failed'}
        </p>
      </div>
    </div>
  );
};

LaunchesList.propTypes = {
  launches: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.object), PropTypes.object]).isRequired,
};

export default LaunchesList;
