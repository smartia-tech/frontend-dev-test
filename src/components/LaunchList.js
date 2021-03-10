import React from 'react';
import Launch from "./Launch";


const LaunchList = ({launchList=[]}) => {
    return (
        <div className="launch-cards-wrapper">
          {launchList.map((item,index) => (
          <Launch launch={item} key={index} />
          ))}
        </div>
      );
}

export default LaunchList