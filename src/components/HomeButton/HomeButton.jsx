import React from 'react'
import styles from './HomeButton.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'


import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const HomeButton = () => {
    return (
        <Link to="welcome" activeClass="active" spy={true} smooth={true} duration={500} >
            <button className={styles.button}>
                <FontAwesomeIcon size="2x" icon={faArrowUp} />
            </button>
      </Link> 
    )
}

export default HomeButton;
