import PropTypes from 'prop-types';
import styles from './Launch.module.css';

const Launch = ({
  name, image, launchDate, cores,
}) => (
  <li className={styles.launchInfo}>
    <div>
      <img src={image} alt="spacelaunch" />
      <h3>{name}</h3>
    </div>
    <ul className={styles.cores}>
      <h4>Cores Landing Success</h4>
      {cores.map(e => (
        <li key={e.core}>
          <span>
            {e.core}
            :
            {' '}
          </span>
          <span>{e.landing_success?.toString() ?? 'landing success is unknown'}</span>
        </li>
      ))}
    </ul>
    <time dateTime={launchDate}>{launchDate}</time>
  </li>
);

Launch.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  launchDate: PropTypes.string.isRequired,
  cores: PropTypes.arrayOf(PropTypes.shape({
    core: PropTypes.string.isRequired,
    landing_success: PropTypes.bool,
  })).isRequired,
};

export default Launch;
