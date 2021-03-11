import React from "react";
import { getLaunch } from "./GetLaunchList";
import CardView from "./CardView";

const LaunchList = () => {
  const [launch, setLaunch] = React.useState([]);

  const handleGetLaunch = async () => {
    try {
      const lunch = await getLaunch();
      setLaunch(lunch);
    } catch (err) {
      console.error(err);
    }
  };

  React.useEffect(() => {
    handleGetLaunch();
  }, []);

  

  return (
    <div>
      <CardView launch={launch} />
    </div>
  );
};

export default LaunchList;
