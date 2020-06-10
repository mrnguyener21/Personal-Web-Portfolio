import React, { useState } from 'react';
import Skills from './Skills/Skills';
import Why_Me from './Why_Me/Why_Me';
import styles from './About.module.scss';


const About = () => {
    return (
        <div className={styles.container}>
            <Why_Me className/>
            <Skills className/>
        </div>
    )
}

export default About;

