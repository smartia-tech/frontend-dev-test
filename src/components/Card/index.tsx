import React from 'react'
import moment from 'moment'
import styles from './style.module.scss'

interface ICardProps {
  uri: string;
  name: string;
  date: string;
  coresSuccess?: boolean|null;
}

const Card: React.FC<ICardProps> = ({
  uri,
  name,
  date,
  coresSuccess
}) => {
  const launchDate = moment(date).format('DD MMMM, YYYY')
  return (
    <div className={styles['container']}>
      <div className={styles['imgContainer']}>
        <img src={uri} alt={name} />
      </div>
      <div className={styles['cardContent']}>
        <div className={styles['info']}>
          <h3>{name}</h3>
          <span className={styles['date']}>{launchDate}</span>
        </div>
        <div className={styles['icon']}>
          {coresSuccess
            ? <img src='/images/cores.png' alt='success' />
            : <img src='/images/coresFail.png' alt='failed' />
          }
        </div>
      </div>
    </div>
  )
}

export default Card
