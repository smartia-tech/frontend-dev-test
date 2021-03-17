import PropTypes from 'prop-types';

const Launch = ({ launch }) => {
  const getStatus = status => (typeof status === 'undefined' ? 'Unspecified' : status);
  return (
    <article className="Launch">
      <div className="Launch__image">
        <img src={launch.links.patch.small} alt="launch-img" />
      </div>
      <div className="Launch_details">
        <h4 className="title">{`Name: ${launch.name}`}</h4>
        <p>
          {`Launch Date: ${new Date(launch.date_local).toLocaleDateString()}`}
        </p>
        <p>
          {`Cores landing status: ${getStatus(launch.cores.landing_success)}`}
        </p>
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
