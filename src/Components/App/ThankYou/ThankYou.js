import React from 'react';
import styles from './styles.module.css';
import icon from './images/icon-thank-you.svg';

function ThankYou() {
    return(
        <section className={styles.container}>
            <img src={icon} className={styles.thankYouIcon} />
            <h1 className={styles.title}>
                Thank You!
            </h1>
            <p className={styles.desc}>
                Thanks for confirming your subscription! 
                We hope you have fun using our platform. 
                If you ever need support, please feel free 
                to email us at support@loremgaming.com.
            </p>
        </section>
    )
}

export default ThankYou;