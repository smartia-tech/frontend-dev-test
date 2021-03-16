import styles from '../styles/Filter.module.css';

const Filter = ({ entry, handleInputChange }) => {
  return (<input className={styles.search} type="text"
    value={entry} onChange={handleInputChange} placeholder="Search..." />)
}

export default Filter;