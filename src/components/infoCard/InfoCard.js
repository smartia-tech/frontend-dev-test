import React from 'react'
import { Card } from 'react-bootstrap';

import { formatDate } from '../../utils/formatDate';

import './infoCardStyles.css';

const InfoCard = ({launch}) => {
  const {links, name, date_local, cores} = launch

  const checkCores = (_cores) => {
    let allLandedSuccessfully = true;

    _cores.forEach((core) => {
      if (!core.landing_success) {
        allLandedSuccessfully = false;
      }
    })

    return allLandedSuccessfully
  }

  return (
    <Card className="infoCard shadow-sm">
      <div className="d-flex">
        <img className="infoCard__img" src={links.patch.small} alt="patch"/>
        <Card.Body style={checkCores(cores) ? {backgroundColor: '#3fbc3620'} : {backgroundColor: '#f7310020'} }>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            Launch Date: {formatDate(date_local)}
          </Card.Text>
          <Card.Text>
            {checkCores(cores) ? 'Cores landed Successfully ✅' : "All cores didn't land successfullt ❌"}
          </Card.Text>
        </Card.Body>
      </div>
    </Card>
  )
}

export default InfoCard
