import React, { useEffect, useState } from 'react';
import styles from '../styles/LaunchesContent.module.css';
import { useHistory, useLocation } from 'react-router-dom';
import axios from 'axios';
import Launch from '../components/Launch';


export default function LaunchesContent() {
    const [isLoading, setIsLoading] = useState(false);
    const [launches, setLaunches] = useState([]);
    const [pages, setPages] = useState([]);
    const [curPage, setCurPage] = useState(0)
    const [selectedLaunch, setSelectedLaunch] = useState('')

    const history = useHistory()
    const { hash } = useLocation()

    const resultsSize = 5;
    
    const fetchLaunches = async () => {
        setIsLoading(true)
        const { data } = await axios('https://api.spacexdata.com/v4/launches/past');
        setLaunches(data)
        console.log(launches);

        setIsLoading(false)

    }
    
    const calcPages = () => {
        const pages = launches.length / resultsSize;
        setPages(pages)
        console.log('pages:', pages);
    }
    
    const initLaunchHash = () => {
        setSelectedLaunch(launches.find((launch) => launch.id === hash.slice(1)))
    }
    
    // get data after first loads
    useEffect(() => {
        fetchLaunches();
    }, [])
    
    useEffect(() => {
        calcPages();
        initLaunchHash();
    }, [launches])
    
    // Load launch after first loads
    useEffect(() => {
        initLaunchHash();
    }, [hash])
    
    return (
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
                    <li>3</li>
                    <li>4</li>
                    <li onClick={() => setCurPage(23)}>...{pages}</li>
                </div>
                }
            </div>
            <Launch
                launches={launches}
                selectedLaunch={selectedLaunch}
            />
        </div>
    )
}

