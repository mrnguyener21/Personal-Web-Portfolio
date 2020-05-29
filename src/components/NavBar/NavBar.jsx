import React, {useRef} from 'react';
// import About from '../About/About';
// import { render } from 'react-dom';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import styles from './NavBar.module.scss';


const NavBar = () => {

    return (
        <div className={styles.container}>
            <div className={styles.name}>
                <h3>Victor Nguyen</h3>
            </div>
            <div className={styles.categoryContainer}>
                <Link activeClass="active" className={styles.category} to="about" spy={true} smooth={true} duration={500} >About Me</Link>  
                <Link activeClass="active" className={styles.category} to="project" spy={true} smooth={true} duration={500} >Projects</Link>  
                <Link activeClass="active" className={styles.category} to="contact" spy={true} smooth={true} duration={500} >Contact Me</Link>  




                {/* <h3 className={styles.category} >About Me</h3> */}
                {/* <h3 className={styles.category}>Projects</h3>
                <h3 className={styles.category}>Contact Me</h3> */}
            </div>
        </div>
    );
}

export default NavBar;

// primary color: #02203c; will also use this color for white backgrounds
// secondary color: rgb(104, 104, 209)
//third-ary color:#15314b;
