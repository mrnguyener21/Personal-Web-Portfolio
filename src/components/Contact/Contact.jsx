import React from 'react'
import styles from './Contact.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedinIn, faGithub} from '@fortawesome/free-brands-svg-icons'

import emailjs from 'emailjs-com';





// template ID: template_sDD63FtQ

const Contact = () => {
    const btnClick = (value) => value === 0 ? window.open("https://www.linkedin.com/in/victortnguyen/"):window.open("https://github.com/mrnguyener21")
    
    let message = null;

    const sendEmail = (e) => {
      e.preventDefault();
    
      emailjs.sendForm('gmail', 'template_sDD63FtQ', e.target, 'user_9jqYkcKAcV37jJC2JYCy7')
        .then((result) => {
            message = <h1>email sent</h1>
            console.log(result.text);
        }, (error) => {
            message=<h1>email not sent</h1>
            console.log(error.text);
        });
      }
    
    return (
        <div id='contact' className={styles.container}>
            <div className={styles.topContainer}>
            <h1 className={styles.title}>CONTACT ME</h1>
            </div>
                <div className={styles.contactContainer}>
                    <form className="contact-form" onSubmit={sendEmail}>
                    <div className={styles.infoContainer}>
                        <input className={styles.info} name="user_name" placeholder='Name'></input>
                        {/* <input className={styles.info} placeholder='Phone Number'></input> */}
                        <input className={styles.info} name="user_email" placeholder='Email Address'></input>
                    </div>
                    
                <input className={styles.message} name="user_message" placeholder='Message'></input>
                {message}
                <input className={styles.button} type="submit" value="Send" onClick={()=>alert('Email has been sent. Thank you')}/>
                </form>

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
