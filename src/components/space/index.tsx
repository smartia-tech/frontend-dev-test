import React, { useEffect, useState } from "react";
import axios from "axios";
import "./index.scss";
import API_URL from "../../apiurl";
import ShipList from "../ship-list";


const Space = () => {
  
  const [ships, setShips] = useState([]);
  const [loading, setLoader] = useState<boolean>(false);
  const ClassName ="loading-placement";

  useEffect(() => {
    setLoader(true);
    (async function loadData() {
      const res = await axios(API_URL);
      setShips(res.data);
      setLoader(false);
    })();
  }, []);

  return loading ? <div className={ClassName}> Loading .... </div> : <ShipList ships={ships} />;
};

export default Space;
