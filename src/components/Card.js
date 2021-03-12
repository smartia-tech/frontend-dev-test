import React from 'react';
import './Card.css';


const Card =({id,name,image,date,totalCores,landedCores}) =>{    
    return (
        <div className='bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'>  
            <h2>{id}</h2>         
            <img src={`${image}`} alt={`${name}`} height='300' width='350'/>
            <div>
                <h3>{name}</h3>
                <p>{date}</p>
                <p>Cores Landed: {landedCores} of {totalCores}</p>
            </div>
        </div>
    );
}

export default Card;