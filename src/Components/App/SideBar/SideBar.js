import React from 'react';
import styles from './styles.module.css'

function SideBar(){

    return(<>
            <div className={styles.steps}>
                <div className={styles.step}>
                    <div className={styles.currentCircle}>
                        1
                    </div>
                    <div className={styles.name_title}>
                        <p className={styles.stepTitle}>
                            STEP 1
                        </p>
                        <p className={styles.stepName}>
                            YOUR INFO
                        </p>
                    </div>
                </div>
                <div className={styles.step}>
                    <div className={styles.otherCircle}>
                        2
                    </div>
                    <div className={styles.name_title}>
                        <p className={styles.stepTitle}>
                            STEP 2
                        </p>
                        <p className={styles.stepName}>
                            SELECT PLAN
                        </p>
                    </div>
                </div>
                <div className={styles.step}>
                    <div className={styles.otherCircle}>
                        3
                    </div>
                    <div className={styles.name_title}>
                        <p className={styles.stepTitle}>
                            STEP 3
                        </p>
                        <p className={styles.stepName}>
                            ADD-ONS
                        </p>
                    </div>
                </div>
                <div className={styles.step}>
                    <div className={styles.otherCircle}>
                        4
                    </div>
                    <div className={styles.name_title}>
                        <p className={styles.stepTitle}>
                            STEP 4
                        </p>
                        <p className={styles.stepName}>
                            SUMMARY
                        </p>
                    </div>
                </div>
            </div>
    </>)
}

export default SideBar;