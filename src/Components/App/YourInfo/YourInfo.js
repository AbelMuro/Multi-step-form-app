import React from 'react';
import styles from "./styles.module.css";
import images from './images';


function YourInfo() {
    return(
        <section className={styles.yourInfo}>
            <h1 className={styles.title}>
                Select your plan
            </h1>
            <p className={styles.desc}>
                You have the option of monthly or yearly billing.
            </p>
            <div className={styles.options}>
                <img src={images["arcade"]} className={styles.optionsImage}/>
                <div>
                    <h2 className={styles.optionsTitle}>
                        Arcade
                    </h2>
                    <p className={styles.optionsPrice}>
                    $9/mo  
                    </p>                    
                </div>
            </div>
            <div className={styles.options}>
                <img src={images["advanced"]} className={styles.optionsImage}/>
                <div>
                    <h2 className={styles.optionsTitle}>
                        Advanced
                    </h2>
                    <p className={styles.optionsPrice}>
                    $12/mo  
                    </p>                    
                </div>
            </div>
            <div className={styles.options} >
                <img src={images["pro"]} className={styles.optionsImage}/>
                <div>
                    <h2 className={styles.optionsTitle}>
                        Pro
                    </h2>
                    <p className={styles.optionsPrice}>
                    $15/mo  
                    </p>                    
                </div>

            </div>
            <div className={styles.switchContainer}>

            </div>
        </section>
    )
}

export default YourInfo;