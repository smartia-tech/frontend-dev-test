import styles from '../styles/Launch.module.css';

const Launch = ({ name, image, launchDate, cores }) => {
  return (<li className={styles.launchInfo}>
    <div>
      <img src={image} alt="launch image" />
      <h3>{name}</h3>
    </div>
    <div className={styles.cores}>
      {cores.map(e => <div>
        <h4>{e.core}</h4>
        <p>{e.landing_success?.toString() ?? 'landing success is unknown'}</p>
      </div>)}
    </div>
    <time datetime={launchDate}>{launchDate}</time>
  </li>)
}

export default Launch;