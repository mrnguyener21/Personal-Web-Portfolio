import React from 'react'
import { Link } from 'react-router-dom';

import styles from './NavBar.module.scss'

const NavBar = () => {
    return (
        <div className={styles.container}>
            {/* <Link className={styles.component} to="/resume">Resume</Link>
            <Link className={styles.component} to="/about">About</Link>
            <Link className={styles.component} to="/work">Work</Link> */}
            <div className={styles.name}>
                <h3>Victor Nguyen</h3>
            </div>
            <div className={styles.categoryContainer}>
                {/* //currently these are place holders */}
                <div className={styles.sections}>
                    <h3 className={styles.category}>About Me</h3>
                    <h3 className={styles.category}>Projects</h3>
                    <h3 className={styles.category}>Skills</h3>
                    <h3 className={styles.category}>Contact Me</h3>
                </div>
                <div className={styles.links}>
                <h3 className={styles.category}>Resume</h3>
                <h3 className={styles.category}>LinkedIn Logo</h3>
                <h3 className={styles.category}>Github Logo</h3>
                </div>
            </div>
        </div>
    )
}

export default NavBar;
