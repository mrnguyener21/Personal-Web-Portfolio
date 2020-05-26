import React from 'react'
import codeSnippet from '../../image/codeSnippet.JPG'
import styles from './Welcome.module.scss'
const Welcome = () => {
    return (
        <div className={styles.container}>
            <div className={styles.introContainer}>
                <h1 className={styles.intro}>Hi, I'm Victor, a Self-Taught Front-End Developer and the newest member of your team! Welcome to my portfolio and let me know if you see anything you like 👍</h1>
                <div className={styles.buttonContainer}>
                    <button className={styles.button}>● RESUME ●</button>
                    <button className={styles.button}>● LINKEDIN ●</button>
                    <button className={styles.button}>● GITHUB ●</button>
                </div>
            </div>
            <img className={styles.image} src={codeSnippet}/>

        </div>
    )
}

export default Welcome;
