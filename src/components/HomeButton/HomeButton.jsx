import React from 'react'
import styles from './HomeButton.module.scss'

import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


const HomeButton = () => {
    return (
        <Link activeClass="active" to="top" spy={true} smooth={true} duration={500} >
            <div className={styles.container}>
                <button className={styles.button}>
                    <div className={styles.arrow}></div>
                </button>
            </div>
        </Link>  
    )
}

export default HomeButton;
