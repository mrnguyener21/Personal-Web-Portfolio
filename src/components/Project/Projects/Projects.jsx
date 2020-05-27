import React from 'react';
import yugioh from  '../../../image/yugioh.JPG'

import styles from './Projects.module.scss';

const projects = [
    {
        image: yugioh,
        description: 'A YuGiOh library for the kids that uses an API containining over 10,000 cards.',
        technologies: 'Created With:Javascript(ES6) | HTML5 | CSS 3| React|',
    },
    {
        image: yugioh,
        description: 'Test',
        technologies: 'Test',
    }
]

const Projects = () => {
    return(
        <div className={styles.container}>
            {projects.map(({ image, description, technologies }) => (
                <>
                    <div className={styles.project}>
                        <img className={styles.projectImage} src={image}/>
                        <div className={styles.content}>
                            <h3 className={styles.description}>{description}</h3>
                            <h3 className={styles.description}>{technologies}</h3>
                        </div>
                    </div>
                    <div>buttons</div>
                </>
            ))}
        </div>
    )
}


export default Projects;