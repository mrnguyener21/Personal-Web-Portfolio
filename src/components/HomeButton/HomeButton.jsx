import React from 'react'
import styles from './HomeButton.module.scss'

const HomeButton = () => {
    return (
        <div className={styles.container}>
            <button className={styles.button}>
                <div className={styles.arrow}></div>
            </button>
        </div>
    )
}

export default HomeButton;
