import React from 'react'; 
import styles from './Skills.module.scss'

import Skill from './Skill';
import SkillsData from './SkillsData';

const Skills = () => {
    return (
        <div className={styles.container}> 
            {SkillsData.map((SkillData) => <Skill SkillData={SkillData}/>)}
        </div>    
    );
};

export default Skills;