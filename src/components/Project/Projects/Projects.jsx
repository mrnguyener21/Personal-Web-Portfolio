import React from 'react';
import yugioh from  '../../../image/yugioh.JPG'
import ticTacToe from  '../../../image/ticTacToe.JPG'

import styles from './Projects.module.scss';

const projects = [
    {
        image: yugioh,
        name: 'YUGIOH CARD GALLERY',
        description: 'A YuGiOh library for the kids that uses an API containining over 10,000 cards.',
        technologies: 'Created With:Javascript(ES6) | HTML5 | CSS 3| React|',
        sourceCode:'https://github.com/mrnguyener21/yugioh-API',
        liveDemo:'https://yugioh-api.netlify.app/',
    },
    {
        image: ticTacToe,
        name: 'Tic-Tac-Toe',
        description:'The classic game of Tic Tac Toe Made will Vanilla Javascript. Comes with a Start Page, A game Page, A winner Screen and score keeping.',
        technologies: 'HTML5 | CSS3 | JAVASCRIPT(ES6)',
        sourceCode:'https://github.com/mrnguyener21/tic-tac-toe-game',
        liveDemo:'https://classictictactoegame.netlify.app/',
    },
    {
        image: yugioh,
        name: 'test2',
        description: 'A YuGiOh library for the kids that uses an API containining over 10,000 cards.',
        technologies: 'final web apps',
    }
]

const Projects = () => {
    return(
        <div className={styles.container}>
            {projects.map(({ image, name, description, technologies, sourceCode, liveDemo }) => (
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
                            <button className={styles.button} onClick={()=> window.open(sourceCode)} >● Source Code ●</button>
                            <button className={styles.button} onClick={()=>window.open(liveDemo)} >● Live Demo ●</button>
                        </div>
                </div>
                </>
                ))}
        </div>
    )
}


export default Projects;