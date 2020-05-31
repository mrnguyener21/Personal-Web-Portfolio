import React from 'react'
import styles from './Contact.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedinIn, faGithub} from '@fortawesome/free-brands-svg-icons'


const Contact = () => {
    const btnClick = (value) => value === 0 ? window.open("https://www.linkedin.com/in/victortnguyen/"):window.open("https://github.com/mrnguyener21")
    return (
        <div id='contact' className={styles.container}>
            <div className={styles.topContainer}>
            <h1 className={styles.title}>CONTACT ME</h1>
            </div>
                <div className={styles.contactContainer}>
                    <div className={styles.infoContainer}>
                        <input className={styles.info} placeholder='Name'></input>
                        <input className={styles.info} placeholder='Phone Number'></input>
                        <input className={styles.info} placeholder='Email Address'></input>
                    </div>
                <input className={styles.message} placeholder='Message'></input>
                <button className={styles.button}>Send Message</button>
                <div className={styles.myInformationContainer}>
                    <h3 className={styles.phone}> 📱:562-277-4337</h3>
                    <button className={styles.link} onClick={()=> btnClick(0)}>
                        <FontAwesomeIcon size='2x' icon={faLinkedinIn} color='white' className={styles.icon} />                    
                    </button>
                    <button className={styles.link} onClick={()=> btnClick(1)}>
                        <FontAwesomeIcon size='2x' icon={faGithub} color='white' className={styles.icon} />                    
                    </button>
                </div>
                </div>
        </div>
    )
}

export default Contact;
