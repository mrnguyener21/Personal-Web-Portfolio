import React from 'react';
import yugioh from  '../../image/yugioh.JPG'
import ticTacToe from  '../../image/ticTacToe.JPG'
import financialWebApp from '../../image/financialWebApp.JPG'

import styles from './Projects.module.scss';

import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();

const projects = [
    {
        image: yugioh,
        name: 'YUGIOH CARD GALLERY',
        description: 'A Yu-Gi-Oh Trading Card Game gallery that uses an API containining over 10,000 cards and is up to date with the current state of the game. I came up with the idea to create this project as a way to go from learning about React to being able to use React while at the same time being able to give back to a community from my childhood with a more up to date resource.',
        technologies: 'Created With:JAVASCRIPT(ES6) | HTML5 | CSS 3| REACT|',
        sourceCode:'https://github.com/mrnguyener21/yugioh-API',
        liveDemo:'https://yugioh-api.netlify.app/',
    },
    {
        image: ticTacToe,
        name: 'TIC-TAC-TOE',
        description:' This is the classic game of Tic Tac Toe which I made with Vanilla Javascript(no frameworks or libraries). I decided to create this project as a way to measure my current programming abilities with Javascript during that time. This take on the game comes with a Start Page, the main page where players can play the game, a pop up modal announing the winner with the option to start a new game and real-time score keeping.',
        technologies: 'Created With: HTML5 | CSS3 | JAVASCRIPT(ES6)',
        sourceCode:'https://github.com/mrnguyener21/tic-tac-toe-game',
        liveDemo:'https://classictictactoegame.netlify.app/',
    },
    {
        image: financialWebApp,
        name: 'FINANCIAL WEB APP',
        description: 'A website containing different tools to help people with their financial needs. I created this web app as a solution to what I seen from my own usage of online financial tools. Even though the resources out there do work, I never saw a website containing multiple tools for the users to choose from and would have to go different websites for each of their financial needs.',
        technologies: 'Created With: HTML5 | CSS3 | JAVASCRIPT | REACT',
        sourceCode: 'https://github.com/mrnguyener21/FInancial_Tool_Web_App',
        liveDemo: 'https://vnfinancial.netlify.app/'
    }
]


const Projects = () => {
    return(
        <div name='project' className={styles.container}>
            <h1 className={styles.title} data-aos='fade-down' >PROJECTS</h1>
                <h3 className={styles.intro} data-aos='fade-down' >Below are some of the projects that I have worked on and created. You can hover over them for a description of wha t the project and if you're interested you can check out the source code or even see a live project itself out. <span role='img' aria-label='pointing down'>👇</span></h3>
            <div className={styles.projectContainer}>
                {projects.map(({ image, name, description, technologies, sourceCode, liveDemo }) => (
                    <div  key={name} className={styles.content} data-aos='slide-right' data-aos-duration="1000" >
                        {/* <div className={styles.project} data-aos='slide-right' data-aos-duration="1000" > */}
                            <img className={styles.projectImage} src={image}  />
                        {/* </div> */}
                        <div className={styles.buttonAndDescriptionContainer}>
                            <h3 className={styles.description}>{name}</h3>
                            <h3 className={styles.description}>{description}</h3>
                            <h3 className={styles.description}>{technologies}</h3>
                            <div className={styles.buttonContainer} >
                                <button className={styles.button} onClick={()=> window.open(sourceCode)} >Source Code</button>
                                <button className={styles.button} onClick={()=>window.open(liveDemo)} >Live Demo</button>
                            </div>
                        </div>
                    </div>
                    ))}
            </div>
        </div>
    )
}


export default Projects;