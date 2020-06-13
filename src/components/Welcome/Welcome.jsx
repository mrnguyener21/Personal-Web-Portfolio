import React from 'react'
import codeSnippet from '../../image/codeSnippet.JPG'
import styles from './Welcome.module.scss'
const Welcome = () => {
    const btnClick = (value) => {
        if(value === 0) {
            window.open("https://drive.google.com/file/d/1_XwNJiymfpgMx2NlHbet-6x4r5wO2oEz/view?usp=sharing")
        } else if(value === 1){
            window.open("https://www.linkedin.com/in/victortnguyen/")
        } else if (value === 2){
            window.open("https://github.com/mrnguyener21")
        }
    }
    return (
        <div id="welcome" className={styles.container}>
            <div className={styles.introContainer}>
                <h1 className={styles.intro} id={styles.myName}>HI, I'M VICTOR <span role='img' aria-label='wave'>👋</span> </h1>
                <h2 className={styles.intro}> I'm a Self-Taught Front-End Developer and the newest member of your team! Welcome to my portfolio and let me know if you see anything you like.</h2>
                <div className={styles.buttonAndImageContainer}>
                    <div className={styles.buttonContainer}>
                        {/* <a href='https://docs.google.com/document/d/1V2JcbedVLD-YL_ZJ2PzJ-20eDbRH_cBln5nrlhOixQo/view?usp=sharing'> */}
                            <button className={styles.button} id={styles.button1} onClick={()=>btnClick(0)}>RESUME</button>
                        <button className={styles.button} id={styles.button2} onClick={()=> btnClick(1)}>LINKEDIN</button>
                        <button className={styles.button} id={styles.button3} onClick={()=> btnClick(2)}>GITHUB</button>
                    </div>
                    <img className={styles.image} src={codeSnippet} alt="code snippet" />   
                </div>
            </div>
        </div>
    )
}

export default Welcome;
