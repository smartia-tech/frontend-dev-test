import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import LaunchInfo from "./LaunchInfo";
import Pagination from "./Pagination";

const SpaceXData = () => {
  const [pastLaunches, setPastLaunches] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredLaunches, setFilteredLaunches] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [launchPerPage] = useState(16);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try{
      const res = await axios.get(
        "https://api.spacexdata.com/v4/launches/past"
      );
      
      setPastLaunches(res.data);
      setLoading(false);
      }
      catch (error){
        console.log(`Sorry, an error occurred ${error}`);
      }
    };

    fetchData();
  }, []);


  const indexOfLastLaunch = currentPage * launchPerPage;
  const indexOfFirstLaunch = indexOfLastLaunch - launchPerPage;
  const currentLaunch = filteredLaunches.slice(
    indexOfFirstLaunch,
    indexOfLastLaunch
  );

  useEffect(() => {
    setFilteredLaunches(
      pastLaunches.filter((pastLaunch) =>
        pastLaunch.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, pastLaunches]);

  

  if (loading) {
    return <h2>Loading...</h2>;
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div className="main">
      <div className="search">
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <ul className="cards-container">
        {currentLaunch.map((pastLaunch) => (
          <li key={pastLaunch.links.youtube_id}>
            <LaunchInfo
              name={pastLaunch.name}
              image={pastLaunch.links.patch.small}
              date={new Date(
                pastLaunch.static_fire_date_unix
              ).toLocaleDateString("en-US")}
              success={pastLaunch.cores[0].landing_success ? "true" : "false"}
            />
          </li>
        ))}
      </ul>
      <Pagination
        launchPerPage={launchPerPage}
        totalPastLaunch={pastLaunches.length}
        paginate={paginate}
      />
    </div>
  );
};

export default SpaceXData;
