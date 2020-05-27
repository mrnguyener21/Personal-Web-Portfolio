import React from 'react';

import styles from './NavBar.module.scss';

const NavBar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.name}>
                <h3>Victor Nguyen</h3>
            </div>
            <div className={styles.categoryContainer}>
                <h3 className={styles.category}>About Me</h3>
                <h3 className={styles.category}>Projects</h3>
                <h3 className={styles.category}>Contact Me</h3>
            </div>
        </div>
    );
}

export default NavBar;

// primary color: #02203c; will also use this color for white backgrounds
// secondary color: rgb(104, 104, 209)
//third-ary color:#15314b;
