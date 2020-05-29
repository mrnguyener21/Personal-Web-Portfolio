import React from 'react';

import { Link } from 'react-scroll'

import styles from './NavBar.module.scss';


const NavBar = () => {

    return (
        <div id='container' className={styles.container}>
            <div className={styles.name}>
                <h3>Victor Nguyen</h3>
            </div>
            <div className={styles.categoryContainer}>
                <Link activeClass="active" className={styles.category} to="about" spy={true} smooth={true} duration={500} >About Me</Link>  
                <Link activeClass="active" className={styles.category} to="project" spy={true} smooth={true} duration={500} >Projects</Link>  
                <Link activeClass="active" className={styles.category} to="contact" spy={true} smooth={true} duration={500} >Contact Me</Link>  
            </div>
        </div>
    );
}

export default NavBar;

// primary color: #02203c; will also use this color for white backgrounds
// secondary color: rgb(104, 104, 209)
//third-ary color:#15314b;
