import React from 'react';
import logo from '../../image/logo.png'

import { Link } from 'react-scroll'

import styles from './NavBar.module.scss';

const NavBar = () => {

    return (
        <div className={styles.container}>
            <div className={styles.logoContainer}>
                <img className={styles.logo} src={logo}  alt="logo" />
            </div>
            <div className={styles.categoryContainer}>
                <Link activeClass="active" className={styles.category} to="about" offset={-100} spy={true} smooth={true} duration={500}>Why Me</Link>  
                <Link activeClass="active" className={styles.category} to="project" offset={-100} spy={true} smooth={true} duration={500} >Projects</Link>  
                <Link activeClass="active" className={styles.category} to="contact" offset={-100} spy={true} smooth={true} duration={500} >Contact Me</Link>  
            </div>
        </div>
    );
}

export default NavBar;


