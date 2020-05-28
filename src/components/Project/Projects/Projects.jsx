import React from 'react';
import yugioh from  '../../../image/yugioh.JPG'

import styles from './Projects.module.scss';

const projects = [
    {
        image: yugioh,
        name: 'YUGIOH CARD GALLERY',
        description: 'A YuGiOh library for the kids that uses an API containining over 10,000 cards.',
        technologies: 'Created With:Javascript(ES6) | HTML5 | CSS 3| React|',
        sourceCode:'https://github.com/mrnguyener21/yugioh-API',
        liveDemo:'https://yugioh-api.netlify.app/https://yugioh-api.netlify.app/',
    },
    {
        image: yugioh,
        name: 'testit',
        description:'A YuGiOh library for the kids that uses an API containining over 10,000 cards.',
        technologies: 'tictactoe',
    },
    {
        image: yugioh,
        name: 'test2',
        description: 'A YuGiOh library for the kids that uses an API containining over 10,000 cards.',
        technologies: 'final web apps',
    }
]

const btnClick = (value) => value === 0 ? window.open(projects[0].sourceCode) : window.open(projects[0].liveDemo) 

const Projects = () => {
    return(
        <div className={styles.container}>
            {projects.map(({ image, name, description, technologies }) => (
                <>
                <div className={styles.content}>
                    <div className={styles.project}>
                        <img className={styles.projectImage} src={image}/>
                        <div className={styles.content}>
                            <h3 className={styles.description}>{name}</h3>
                            <h3 className={styles.description}>{description}</h3>
                            <h3 className={styles.description}>{technologies}</h3>
                        </div>
                    </div>
                        <div className={styles.buttonContainer}>
                            <button className={styles.button} onClick={()=> btnClick(0)} >● Source Code ●</button>
                            <button className={styles.button} onClick={()=> btnClick(1)} >● Live Demo ●</button>
                        </div>
                </div>
                </>
                ))}
        </div>
    )
}


export default Projects;