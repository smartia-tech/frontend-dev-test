import {useState} from 'react'
import Launch from './Launch';
import Pagination from './Pagination';

const LaunchList = ({launches}) => {

    const [currentPage, setCurrentPage] = useState(1);
    const [launchesPerPage] = useState(6)

    const indexOfLastLaunch = currentPage * launchesPerPage;
    const indexOfFirstEmployee = indexOfLastLaunch - launchesPerPage;
    const currentLaunches = launches.slice(indexOfFirstEmployee, indexOfLastLaunch);
    const totalPagesNum = Math.ceil(launches.length / launchesPerPage);

    return (
        <>

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {currentLaunches.map(launch => (
                <div key={launch.id} className="col mb-5">
                    <Launch launch={launch} />
                </div>
            ))}
            </div>

            <Pagination pages = {totalPagesNum}
            setCurrentPage={setCurrentPage}
            currentLaunches ={currentLaunches}
            launches = {launches} />

</>
  
    );


}

export default LaunchList;

