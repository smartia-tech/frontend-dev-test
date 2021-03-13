import React, { useState, useEffect } from "react";

function Launch({ launch }) {
  const [coresStatus, setCoresStatus] = useState(
    "All cores Landed successfully!"
  );
  const date = new Date(launch.date_local);

  useEffect(() => {
    launch.cores.forEach((core) => {
      if (core.landing_attempt) {
        core.landing_success ||
          setCoresStatus("Not all cores landed successfully");
      } else {
        setCoresStatus("Not all cores have landed");
      }
    });
  }, []);

  return (
    <div className="launch">
      <div className="launch_image_wrapper">
        <img src={launch.links.patch.small} alt="" />
      </div>
      <h1>{launch.name}</h1>
      <h2>{date.toDateString()}</h2>
      <h3>Cores: </h3>
      <div className="cores_container">
        <p>{coresStatus}</p>
      </div>
    </div>
  );
}

export default Launch;
