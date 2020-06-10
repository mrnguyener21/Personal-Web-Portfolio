import React, { useState } from 'react';
import Skills from './Skills/Skills';
import Why_Me from './Why_Me/Why_Me';
import styles from './About.module.scss';


// import Modal from '@material-ui/core/Modal';


const About = () => {
    // const [isSkillModalOpen, setIsSkillModalOpen] = useState(false);
    // const [isAboutMeOpen, setIsAboutMeOpen] = useState(false);
    
    
    return (
        <div name='about' className={styles.container}>
            <Why_Me className/>
            <Skills className/>
        </div>
    )
}

export default About;

{/* <div className={styles.infoContainer}> */}
    {/* <h1 className={styles.title}>ABOUT ME</h1>
    <h3 className={styles.info}>
        Even though I am a Front-End Developer who inspires to be the best of the very best, it wasn't always that way. I actually started off in the accounting and finance field when I first entered the real world. There I went about the day to day tasks of bringing value to others by making sure that not only were their statements correct, but being able to efficiently and effectively create reports along with visual representations of their data so that we can strategically plan and execute for the future. 
    </h3>
    <h3 className={styles.info}>
        Funny enough, what started as learning VBA for Microsoft Excel to further increase the value I can provide soon turned into an indirect discovery for my love of coding which led me down the path of waking up at 4AM to code every day to make this dream a reality while providing high quality service to my current job and other priorities in life. 
    </h3>
    <h3 className={styles.info}>
        Now I want to give value to others with not only my logical knowledge and mindset from the accounting and financial field, but to also provide value by giving others one of the best tools someone can have in the modern day. I want to provide others with amazing websites that fits their needs and criteria. In doing so, the value that person can now give will have a greater reach and in turn give an even better experience as well. 
    </h3> */}
    {/* <div className={styles.buttonContainer}> */}
        {/* <button type="button" onClick={() => setIsAboutMeOpen(true)} className={styles.button}>ABOUT ME</button>
        <Modal className={styles.modal} open={isAboutMeOpen} onClose={() => setIsAboutMeOpen(false)}>
            <AboutMeModal handleClose={() => setIsAboutMeOpen(false)} />
        </Modal> */}

        {/* <button type="button" onClick={() => setIsSkillModalOpen(true)} className={styles.button}>SKILL SET</button> */}
        {/* <Modal className={styles.modal} open={isSkillModalOpen} onClose={() => setIsSkillModalOpen(false)}> */}
        {/* <Skills handleClose={() => setIsSkillModalOpen(false)} /> */}
        {/* </Modal> */}
    {/* </div> */}
{/* </div> */}