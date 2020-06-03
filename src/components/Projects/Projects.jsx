import React from 'react';
import yugioh from  '../../image/yugioh.JPG'
import ticTacToe from  '../../image/ticTacToe.JPG'
import financialWebApp from '../../image/financialWebApp.JPG'

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
        image: financialWebApp,
        name: 'Financial Web App',
        description: 'A website containing different tools to help people with their financial needs. A solution to what I seen how each tool would have their own site, but not a central hub for multiple tools.',
        technologies: 'HTML5 | CSS3 | JAVASCRIPT | REACT',
        sourceCode: 'https://github.com/mrnguyener21/FInancial_Tool_Web_App',
        liveDemo: ''
    }
]

const Projects = () => {
    return(
        <>
            <div name="project" className={styles.container}>
                <h1 className={styles.title}>PROJECTS</h1>
                    <h3 className={styles.intro}>Below are some of the projects that I have worked on and created. You can hover over them for a description of wha t the project and if you're interested you can check out the source code or even see a live project itself out. 👇</h3>
                <div className={styles.projectContainer}>
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
                                    <button className={styles.button} onClick={()=> window.open(sourceCode)} >Source Code</button>
                                    <button className={styles.button} onClick={()=>window.open(liveDemo)} >Live Demo</button>
                                </div>
                        </div>
                        </>
                        ))}
                </div>
            </div>
        </>
    )
}


export default Projects;