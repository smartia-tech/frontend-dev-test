import React, { useEffect, useState } from 'react';
import styles from '../styles/LaunchesContent.module.css';
import { useHistory, useLocation } from 'react-router-dom';
import axios from 'axios';
import Launch from '../components/Launch';
import Truncate from 'react-truncate'


export default function LaunchesContent() {
    const [isLoading, setIsLoading] = useState(false);
    const [launches, setLaunches] = useState([]);
    const [launchesDefault, setLaunchesDefault] = useState([]);
    const [pages, setPages] = useState([]);
    const [curPage, setCurPage] = useState(0)
    const [selectedLaunch, setSelectedLaunch] = useState('')
    const [inputValue, setInputValue] = useState('')

    const history = useHistory()
    const { hash } = useLocation()

    const resultsSize = 5;
    
    const fetchLaunches = async () => {
        setIsLoading(true)

        const { data } = await axios('https://api.spacexdata.com/v4/launches/past');
        setLaunches(data)
        setLaunchesDefault(data)

        console.log(launches)

        setIsLoading(false)

    }


    // handle input value to filter data
    const handleInputChange = (e) => {
        console.log('inout value:', e.target.value);
        setInputValue(e.target.value)
    }

    // calculate all pages
    const calcPages = () => {
        let pages = (launches.length / resultsSize);
        // total pages with 5 el
        pages = Math.ceil(pages)
        setPages(pages)
        console.log('pages:', pages);
    }
    
    // set a slected lounch bases on the hash url
    const initLaunchHash = () => {
        setSelectedLaunch(launchesDefault.find((launch) => launch.id === hash.slice(1)))
    }
    
    // get data after first loads
    useEffect(() => {
        fetchLaunches();
    }, [])
    
    // calc total pages and load launc if hash exists once launches are initialized
    useEffect(() => {
        calcPages();
        initLaunchHash();
    }, [launches])

    // updates selected launch in the UI when first loading
    useEffect(() => {
        initLaunchHash();
    }, [launchesDefault])

    // listen to input change to filter the data
    useEffect(() => {
        const filtered = launchesDefault.filter(launch => {
            return launch.name.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase())
        })
        setLaunches(filtered)
        setCurPage(0)
    }, [inputValue])
    
    // listen to hash change in tab to update launch
    useEffect(() => {
        initLaunchHash();
    }, [hash])
    
    return (
        <>
            <div className={styles.searchWrapper}>
                <input 
                    type="text" 
                    placeholder="Search Launches..."
                    onChange={handleInputChange}
                />
                <svg class="Icon Icon--search-desktop" role="presentation" viewBox="0 0 21 21">
                    <g transform="translate(1 1)" stroke="currentColor" stroke-width="2" fill="none" fill-rule="evenodd" stroke-linecap="square">
                        <path d="M18 18l-5.7096-5.7096"></path>
                        <circle cx="7.2" cy="7.2" r="7.2"></circle>
                    </g>
                </svg>
            </div>
            <div className={styles.ContentWrapper}>
                <div class={styles.dataList}>
                    <h1>Records</h1>
                    <div class={styles.listContainer}>
                        {isLoading ? 
                            ( <li> Loading...</li> ) 
                        :
                            // in case there are 0 pages(no data found when filtering) do not loop
                            pages === 0 ? <p className={styles.noContentText} >No launches found</p> : launches && launches.slice(curPage * resultsSize, curPage * resultsSize + resultsSize).map(launch => (
                            <li
                                className={hash.slice(1) === launch.id ? styles.active : ''}
                                id={launch.id} 
                                onClick={() => history.push(`#${launch.id}`)}
                            >
                                <div class={styles.imgListcontainer}>
                                    <img src={launch.links.patch.small} alt="launch-img" />
                                </div>
                                <div class={styles.description}>
                                    <Truncate lines={1} >
                                        {launch.name}
                                    </Truncate>
                                    <p>
                                        {
                                            new Date(launch.date_local).toLocaleString('en-US', {
                                                dateStyle: 'medium',
                                                timeStyle: 'short'
                                            })
                                        }
                                    </p>
                                </div>
                            </li>
                        ))}
                    </div>
                    {isLoading ? '' : 
                    <div class={styles.pagination}>  
                        <li className={curPage === 0 && 'disabled'} onClick={() => setCurPage(curPage > 0 ? curPage - 1 : curPage)}>Previous</li>
                        <li>{curPage + 1} / {pages}</li>
                        <li className={curPage + 1 === pages && 'disabled'} onClick={() => setCurPage(curPage + 1 < pages ? curPage + 1 : curPage)}>Next</li>
                    </div>
                    }
                </div>
                <Launch
                    launches={launchesDefault}
                    selectedLaunch={selectedLaunch}
                />
            </div>
        </>
    )
}

