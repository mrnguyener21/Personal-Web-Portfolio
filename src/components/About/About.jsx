import React, { useState } from 'react';
import Skills from './Skills/Skills'

import profilePic from '../../image/profilePic.png'

import styles from './About.module.scss';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';


const About = () => {
    const [isSkillModalOpen, setIsSkillModalOpen] = useState(false);
    
    return (
        <div id='about' className={styles.container}>
            <div className={styles.contentContainer}>
                <div className={styles.cardContainer}>
                    <Card className={styles.card}>
                        <CardMedia
                            className={styles.picture}
                            src={profilePic}
                            component="img"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" align='center'>
                            Victor Nguyen
                        </Typography>
                        <Typography variant="body1" align='left'>
                              📱:562-277-4337 |✉️: victortnguyen.workemail@gmail.com
                        </Typography>
                        </CardContent>
                    </Card>
                </div>
                <div className={styles.infoContainer}>
                    <h1 className={styles.title}>ABOUT ME</h1>
                    <h3 className={styles.info}>
                        Even though I am a Front-End Developer who inspires to be the best of the very best, it wasn't always that way. I actually started off in the accounting and finance field when I first entered the real world. There I went about the day to day tasks of bringing value to others by making sure that not only were their statements correct, but being able to efficiently and effectively create reports along with visual representations of their data so that we can strategically plan and execute for the future. Funny enough, what started as learning VBA for Microsoft Excel to further increase the value I can provide soon turned into an indirect discovery for my love of coding which led me down the path of waking up at 4AM to code every day to make this dream a reality while providing high quality service to my current job and other priorities in life. 
                    </h3>
                    <h3 className={styles.info}>
                        Now I want to give value to others with not only my logical knowledge and mindset from the accounting and financial field, but to also provide value by giving others one of the best tools someone can have in the modern day. I want to provide others with amazing websites that fits their needs and criteria. In doing so, the value that person can now give will have a greater reach and in turn give an even better experience as well. Below is a button you can click to see the tools I will be using to make what I say happen. 😄
                    </h3>
                    <div className={styles.buttonContainer}>
                    <button type="button" onClick={() => setIsSkillModalOpen(true)} className={styles.button}>TECHNICAL SKILLS</button>
                    <Modal className={styles.modal} open={isSkillModalOpen} onClose={() => setIsSkillModalOpen(false)}>
                        <Skills handleClose={() => setIsSkillModalOpen(false)} />
                    </Modal>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;

