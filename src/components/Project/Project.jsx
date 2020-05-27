import React from 'react'
import Projects from './Projects/Projects'
import yugioh from '../../image/yugioh.JPG'

import styles from './Project.module.scss'

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Portal } from '@material-ui/core';

const Project = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Projects</h1>
            <h3 className={styles.intro}>Below are some of the projects that I have worked on and created. You can hover over them for a description of wha t the project and if you're interested you can check out the source code or even see a live project itself out. 👇
            </h3>
            <Projects/>
        </div>
    )
}

export default Project;
