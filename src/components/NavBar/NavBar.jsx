import React from 'react'
import { Link } from 'react-router-dom';

import styles from './NavBar.module.scss'

const NavBar = () => {
    return (
        <div className={styles.container}>
            <Link className={styles.component} to="/resume">Resume</Link>
            <Link className={styles.component} to="/about">About</Link>
            <Link className={styles.component} to="/work">Work</Link>
        </div>
    )
}

export default NavBar;
