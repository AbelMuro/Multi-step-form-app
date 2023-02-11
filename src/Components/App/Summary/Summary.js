import React from 'react';
import styles from './styles.module.css';

function Summary() {


    return(
        <section className={styles.container}>
            <div className={styles.content}>
                <div className={styles.header}>
                    <h1 className={styles.title}>
                        Finishing up
                    </h1>
                    <p className={styles.desc}>
                        Double-check everything looks OK before confirming.
                    </p>
                </div>

                <div className={styles.allOptionsChoosen}>
                    <div className={styles.currentPlan}>
                        <h2 className={styles.planTitle}>
                            {`Arcade (Monthly)`}
                        </h2>
                        <a className={styles.change}> Change</a>
                        <p className={styles.price}> 
                            $9/mo
                        </p>
                    </div>
                    <hr/>
                    <div className={styles.addOns}>
                        <p className={styles.addOnTitle}>
                            Online Service
                        </p>
                        <p className={styles.addOnPrice}>
                            +$1/mo
                        </p>
                    </div>
                </div>

                <div className={styles.total}>
                    <p className={styles.totalTitle}>
                        {"Total (per month)"}
                    </p>
                    <p className={styles.totalPrice}>
                        {"+$12/mo"}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Summary;