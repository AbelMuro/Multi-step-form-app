import React from 'react';
import styles from './styles.module.css';

function Container({children}) {
    return(        
        <section className={styles.container}>
            {children}
        </section>
    )    
}

export default Container;