import { useState, useEffect, useCallback } from 'react';
import Launch from 'components/Launch';
import Filter from 'components/Filter';
import url from 'utils/constants';
import styles from './Home.module.css';

const Home = () => {
  const [launches, setLaunches] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [entry, setEntry] = useState('');

  const getLaunches = useCallback(() => {
    try {
      fetch(url).then(res => res.json()).then(res => {
        setLaunches(res);
        setIsLoading(false);
      });
    } catch (e) {
      setError(e);
    }
  }, []);

  useEffect(() => {
    getLaunches();
  }, [getLaunches]);

  const filtered = () => {
    if (entry !== '' && entry.split('')[entry.length - 1] !== '\\') {
      const pattern = new RegExp(`${entry}`, 'ig');
      const filtered = launches.filter(data => pattern.test(data.name));
      return filtered.map(e => (
        <Launch
          key={e.id}
          name={e?.name}
          image={e.links?.patch?.small}
          launchDate={e.date_local}
          cores={e.cores}
        />
      ));
    }

    return launches.map(e => (
      <Launch
        key={e.id}
        name={e?.name}
        image={e.links?.patch?.small}
        launchDate={e.date_local}
        cores={e.cores}
      />
    ));
  };

  const handleInputChange = event => {
    event.persist();
    let timeout;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      setEntry(event.target.value);
    }, 250);
  };

  if (error) {
    return <h2>Unfortunately there has been an error!</h2>;
  }

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <nav>
        <Filter handleInputChange={handleInputChange} />
      </nav>
      <ul className={styles.wrapper}>
        {filtered()}
      </ul>
    </>
  );
};

export default Home;
