import PropTypes from 'prop-types';

const Launch = ({ launch }) => {
  const getStatus = status => (typeof status === 'undefined' ? 'Unspecified' : status);
  return (
    <article>
      <div>
        <img src={launch.links.patch.small} alt="launch-img" />
      </div>
      <div>
        <h4>{`Name: ${launch.name}`}</h4>
        <p>{`Launch Date: ${Date(launch.date_local).toLocaleString()}`}</p>
        <p>{`Cores landing status: ${getStatus(launch.cores.landing_success)}`}</p>
      </div>
    </article>
  );
};

Launch.propTypes = {
  launch: PropTypes.shape({
    links: PropTypes.shape({
      patch: PropTypes.shape({
        small: PropTypes.string,
      }),
    }),
    name: PropTypes.string,
    date_local: PropTypes.string,
    cores: PropTypes.arrayOf(String),
  }).isRequired,
};

export default Launch;
