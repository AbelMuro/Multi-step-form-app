import React from 'react';
import styles from './styles.module.css';

function PickAddOns() {
    return(
        <section className={styles.container}>
            <div className={styles.content}>
                <div className={styles.header}>
                    <h1 className={styles.title}>
                        Pick add-ons
                    </h1>
                    <p className={styles.desc}>
                        Add-ons help enhance your gaming experience.
                    </p>
                </div>
                <div className={styles.addOns}>
                    <div className={styles.addOn}>
                        <input type="checkbox" id="onlineService" className={styles.checkboxes}/>
                        <label className={styles.labelContainer} htmlFor="onlineService">
                            <h2 className={styles.labelTitle}>
                                Online service
                            </h2>
                            <p className={styles.labelDesc}>
                                Access to multiplayer games
                            </p>
                        </label>
                    </div>
                    <div className={styles.addOn}>
                        <input type="checkbox" id="largerStorage" className={styles.checkboxes}/>
                        <label className={styles.labelContainer} htmlFor="largerStorage">
                            <h2 className={styles.labelTitle}>
                                Larger storage
                            </h2>
                            <p className={styles.labelDesc}>
                                Extra 1TB of cloud save
                            </p>
                        </label>
                    </div>
                    <div className={styles.addOn}>
                        <input type="checkbox" id="customizableProfile" className={styles.checkboxes}/>
                        <label className={styles.labelContainer} htmlFor="customizableProfile">
                            <h2 className={styles.labelTitle}>
                                Customizable profile
                            </h2>
                            <p className={styles.labelDesc}>
                                Custom theme on your profile
                            </p>
                        </label>
                    </div>
                </div>
            </div>
            <div className={styles.buttons}>
                <button className={styles.goBackButton}>
                    Go Back
                </button>
                <button className={styles.nextStepButton}>
                    Next Step
                </button>
            </div>
        </section>
    )
}

export default PickAddOns;