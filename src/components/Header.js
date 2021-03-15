import React from 'react'
import styles from '../styles/Header.module.css'

export default function Header() {
    return (
        <div className={styles.headerContainer}>
            <h1>Welcome to SpaceX launches record!</h1>
            <p>feel free to explore and search the records</p>
        </ div>
    )
}
