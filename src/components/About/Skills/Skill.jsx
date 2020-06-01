
import React from 'react'; 
import styles from './Skill.module.scss'; 

// import skillsData from './skillsData';
// import styles from'./Skill.module.css'; 

const Skill = ({SkillData}) => {
    return (
            <div className={styles.container}>
                <img alt="Skill" src={SkillData.image} className={styles.image} />
                <h1 className={styles.description}>{SkillData.description}</h1>  
            </div>
    );
};

export default Skill;