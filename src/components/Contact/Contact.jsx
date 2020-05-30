import React from 'react'
import styles from './Contact.module.scss'
const Contact = () => {
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
                    <h1>Phone</h1>
                    <h1>email</h1>
                    <h1>linkedin</h1>
                    <h1>Github</h1>
                </div>
                </div>
        </div>
    )
}

export default Contact;
