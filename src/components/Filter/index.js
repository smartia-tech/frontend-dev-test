import PropTypes from 'prop-types';
import styles from './Filter.module.css';

const Filter = ({ handleInputChange }) => (
  <input
    className={styles.search}
    type="text"
    onChange={handleInputChange}
    placeholder="Search..."
  />
);

Filter.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
};

export default Filter;
