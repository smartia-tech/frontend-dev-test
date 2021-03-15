import React, { useEffect, useState } from 'react';
import styles from '../styles/LaunchesContent.module.css';
import { useHistory, useLocation } from 'react-router-dom';
import axios from 'axios';
import Launch from '../components/Launch';


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
        console.log(launches);

        setIsLoading(false)

    }


    // handle input value to filter data
    const handleInputChange = (e) => {
        console.log('inout value:', e.target.value);
        setInputValue(e.target.value)
    }

    // calculate all pages
    const calcPages = () => {
        const pages = launches.length / resultsSize;
        setPages(pages)
        console.log('pages:', pages);
    }
    
    // set a slected lounch bases on the hash url
    const initLaunchHash = () => {
        setSelectedLaunch(launches.find((launch) => launch.id === hash.slice(1)))
    }
    
    // get data after first loads
    useEffect(() => {
        fetchLaunches();
    }, [])
    
    // calc total pages and load launc if hash exists once launches is initialized
    useEffect(() => {
        calcPages();
        initLaunchHash();
    }, [launches])

    // listen to input change to filter the data
    useEffect(() => {
        const filtered = launchesDefault.filter(launch => {
            return launch.name.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase())
        })
        setLaunches(filtered)
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
                            launches && launches.slice(curPage * resultsSize, curPage * resultsSize + resultsSize).map(launch => (
                            <li 
                                className={hash.slice(1) === launch.id ? styles.active : ''}
                                id={launch.id} 
                                onClick={() => history.push(`#${launch.id}`)}
                            >
                                <div class={styles.imgListcontainer}>
                                    <img src={launch.links.patch.small} alt="launch-img" />
                                </div>
                                <div class={styles.description}>
                                    <p>{launch.name}</p>
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
                        <li onClick={() => setCurPage(0)}>1</li>
                        <li onClick={() => setCurPage(1)}>2</li>
                        <li onClick={() => setCurPage(2)}>3</li>
                        <li onClick={() => setCurPage(3)}>4</li>
                        <li onClick={() => setCurPage(23)}>...{pages}</li>
                    </div>
                    }
                </div>
                <Launch
                    launches={launches}
                    selectedLaunch={selectedLaunch}
                />
            </div>
        </>
    )
}

