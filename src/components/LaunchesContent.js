import React from 'react'
import styles from '../styles/LaunchesContent.module.css'

export default function LaunchesContent() {
    return (
        <div className={styles.ContentWrapper}>
            <div class={styles.dataList}>
                <h1>Records</h1>
                <div class={styles.listContainer}>
                    <li>
                        <div class={styles.imgListcontainer}>
                        </div>
                        <div class={styles.description}>
                            <p>Launch name</p>
                            <p>date</p>
                        </div>
                    </li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </div>
                <div class={styles.pagination}>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>...9</li>
                </div>
            </div>
            <div class={styles.launchContainer}>
                <h1>Launch</h1>
                <div class={styles.mainContent}>
                    <div class={styles.mainImgContainer}></div>
                    <h2>Titulo</h2>
                    <p>fecha</p>
                    <p>succens icon</p>
                </div>
            </div>
        </div>
    )
}

