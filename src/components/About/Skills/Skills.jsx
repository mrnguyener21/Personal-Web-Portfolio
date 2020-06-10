
import React from 'react'; 
import styles from './Skills.module.scss'
import {rowOne, rowTwo} from './data'

import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();

const Skills = () =>  (
    <div className={styles.container}> 
        <h2 className={styles.title} data-aos='fade-up' data-aos-duration='1000'>TECHNICAL SKILLS</h2>
        <div className={styles.contentContainer}>
        {rowOne.map((skillData) => (
            <div className={styles.content} data-aos='zoom-in' data-aos-duration='1000'>
                <img alt="Skill" src={skillData.image} className={styles.image} />
                <h5 className={styles.description}>{skillData.description}</h5>
            </div>
        ))}
        </div>
    </div>
);


export default Skills;