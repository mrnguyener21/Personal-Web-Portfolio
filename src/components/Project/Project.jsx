import React from 'react'
import Projects from './Projects/Projects'

import styles from './Project.module.scss'


const Project = () => {

    return (
        <div name="project" className={styles.container}>
            <h1 className={styles.title}>PROJECTS</h1>
            <h3 className={styles.intro}>Below are some of the projects that I have worked on and created. You can hover over them for a description of wha t the project and if you're interested you can check out the source code or even see a live project itself out. 👇
            </h3>
            <Projects className={styles.projects}/>
        </div>
    )
}

export default Project;
