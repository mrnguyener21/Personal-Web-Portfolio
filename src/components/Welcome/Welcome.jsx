import React from 'react'
import codeSnippet from '../../image/codeSnippet.JPG'
import styles from './Welcome.module.scss'
const Welcome = () => {
    const btnClick = (value) => value === 0 ? window.open("https://www.linkedin.com/in/victortnguyen/"):window.open("https://github.com/mrnguyener21")

    return (
        <div id="welcome" className={styles.container}>
            <div className={styles.introContainer}>
                <h1 className={styles.intro} id={styles.myName}>Hi, I'm Victor <span role='img' aria-label='wave'>👋</span> </h1>
                <h2 className={styles.intro}> I'm a Self-Taught Front-End Developer and the newest member of your team! Welcome to my portfolio and let me know if you see anything you like.</h2>
                <div className={styles.buttonAndImageContainer}>
                    <div className={styles.buttonContainer}>
                        <button className={styles.button} id={styles.button1}>RESUME</button>
                        <button className={styles.button} id={styles.button2} onClick={()=> btnClick(0)}>LINKEDIN</button>
                        <button className={styles.button} id={styles.button3} onClick={()=> btnClick(1)}>GITHUB</button>
                    </div>
                    <img className={styles.image} src={codeSnippet} alt="code snippet" />   
                    </div>
            </div>
        </div>
    )
}

export default Welcome;

