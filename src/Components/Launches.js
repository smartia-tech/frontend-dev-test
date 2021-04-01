import React, { useEffect, useState } from 'react';
import PastLaunches from './Display';
import Pagination from "react-js-pagination";
import Navbar from 'react-bootstrap/Navbar';
import axios from 'axios';


const LaunchGet = () => {

    const [launches, setLaunches] = useState([]);
    const [search, setSearch] = useState("");
    const [filteredLaunches, setFilteredLaunches] = useState([]);
    const [perPage] = useState(8);
    const [currentPage, setCurrentPage] = useState(1);


    const getLaunches = async() => {
        const res = await axios.get('https://api.spacexdata.com/v4/launches/past')
        const data = res.data.reverse();

        setLaunches(data)
    };
    
    useEffect(() => {
        getLaunches()
    });

    const filterLaunches = () => {
        const results = launches.filter((launch) => 
             launch.name.toLowerCase().includes(search.toLowerCase())
        )

        const indexOfLastLaunch  = currentPage * perPage;
        const indexOfFirstLaunch = indexOfLastLaunch - perPage;
        const currentLaunches = results.slice( indexOfFirstLaunch, indexOfLastLaunch );

        setFilteredLaunches(currentLaunches)
    }
    useEffect(() => {
        filterLaunches();
    }, [search, launches]);


    const handlePageClick = (e) => {
        setCurrentPage(e)
    };

    return(
        <div className="container">
            <h1 className="display-4 text-center">SpaceX Past Launches</h1>
            <Navbar className="justify-content-between" style={{ padding: '0px' }}>
                <input type="text" 
                    placeholder="Search for launches"
                    className="form-control"
                    onChange = {(e) => setSearch(e.target.value)}
                />
            </Navbar>
            <PastLaunches filteredLaunches={filteredLaunches}/>
            <Pagination
               activePage={ currentPage }
               itemsCountPerPage={ 8 }
               totalItemsCount={ launches.length }
               pageRangeDisplayed={ 5 }
               onChange={ handlePageClick }
            />
        </div>
    );
}

export default LaunchGet