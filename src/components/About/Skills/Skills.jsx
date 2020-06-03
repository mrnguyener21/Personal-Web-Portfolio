
import React from 'react'; 
import styles from './Skills.module.scss'
import {rowOne, rowTwo} from './data'


const Skills = () =>  (
    <div className={styles.container}> 
        <div className={styles.contentContainer}>
        {rowOne.map((skillData) => (
            <div className={styles.content}>
                <img alt="Skill" src={skillData.image} className={styles.image} />
                <h1 className={styles.description}>{skillData.description}</h1>
            </div>
        ))}
        </div>
        
        <div className={styles.contentContainer}>
        {rowTwo.map((skillData) => (
            <div className={styles.content}>
                <img alt="Skill" src={skillData.image} className={styles.image} />
                <h1 className={styles.description}>{skillData.description}</h1>
            </div>
        ))}
        </div>
    </div>
);


export default Skills;