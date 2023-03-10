import React, {useEffect, useRef} from 'react';
import styles from './styles.module.css';
import mobileBackground from './images/bg-sidebar-mobile.svg'
import {useSelector} from 'react-redux';
import {useMediaQuery} from '@mui/material';

function SideBar(){
    const mobile = useMediaQuery('(max-width: 720px)')
    const step = useSelector(state => state.step)
    const stepOne = useRef();
    const stepTwo = useRef();
    const stepThree = useRef();
    const stepFour = useRef();

    useEffect(() => {
        const prevStep = document.querySelector("#"+ styles.choosenCircle);
        prevStep.id = "";
        
        if(step == 1)
            stepOne.current.id = styles.choosenCircle;
        else if(step == 2)
            stepTwo.current.id = styles.choosenCircle;
        else if(step == 3)
            stepThree.current.id = styles.choosenCircle;
        else if(step == 4)
            stepFour.current.id = styles.choosenCircle;
    }, [step])

    useEffect(() => {
        const backgroundImage = document.querySelector("." + styles.steps);
        if(mobile)
            backgroundImage.style.backgroundImage = `url('${mobileBackground}')`            
        
        else
            backgroundImage.style.backgroundImage = ""

    }, [mobile])


    return(<>
            <div className={styles.steps}>

                <div className={styles.step}>
                    <div className={styles.circle} ref={stepOne} id={styles.choosenCircle}>
                        1
                    </div>
                    {mobile ? <></> : <div className={styles.name_title}>
                        <p className={styles.stepTitle}>
                            STEP 1
                        </p>
                        <p className={styles.stepName}>
                            YOUR INFO
                        </p>
                    </div>}
                </div>

                <div className={styles.step} >
                    <div className={styles.circle} ref={stepTwo}>
                        2
                    </div>
                    {mobile ? <></> : <div className={styles.name_title}>
                        <p className={styles.stepTitle}>
                            STEP 2
                        </p>
                        <p className={styles.stepName}>
                            SELECT PLAN
                        </p>
                    </div>}
                </div>

                <div className={styles.step}>
                    <div className={styles.circle} ref={stepThree}>
                        3
                    </div>
                    {mobile ? <></> : <div className={styles.name_title}>
                        <p className={styles.stepTitle}>
                            STEP 3
                        </p>
                        <p className={styles.stepName}>
                            ADD-ONS
                        </p>
                    </div>}
                </div>
                
                <div className={styles.step} >
                    <div className={styles.circle} ref={stepFour}>
                        4
                    </div>
                    {mobile ? <></> : <div className={styles.name_title}>
                        <p className={styles.stepTitle}>
                            STEP 4
                        </p>
                        <p className={styles.stepName}>
                            SUMMARY
                        </p>
                    </div>}
                </div>
            </div>
    </>)
}

export default SideBar;