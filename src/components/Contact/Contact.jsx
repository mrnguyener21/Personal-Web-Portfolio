import React from 'react'
import styles from './Contact.module.scss'
const Contact = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>CONTACT ME</h1>
            <h3 className={styles.intro}>Did you see anything you like? Did you want to find a way to reach me? Below are some ways you can 🤩</h3>
            <div className={styles.contactContainer}>
            <h3 className={styles.contact}>📱:562-277-4337</h3>
            <h3 className={styles.contact}>✉️: victortnguyen.workemail@gmail.com</h3>
            </div>
        </div>
    )
}

export default Contact;
