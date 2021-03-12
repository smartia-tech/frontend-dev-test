//The extensive list of cards (flights) as per the reponse.

import React from 'react'
import Card from './Card';

const CardList =({flights}) => {  
    return(
        <div>
          {
            flights.map(flight => {
                return (
                    <Card id= {flight.flight_number}
                          name= {flight.name} 
                          image={flight.links.patch.small} 
                          date={new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(new Date(flight.date_utc))} 
                          totalCores={flight.cores.length}
                          landedCores={flight.cores.filter(core => core.landing_success).length}
                    />
                );
            })
          }
        </div>
    );
}

export default CardList;