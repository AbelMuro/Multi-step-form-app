import React, {useRef, useEffect, useState} from 'react';
import styles from "./styles.module.css";
import images from './images';


function SelectPlan() {
    const switchRef = useRef();
    const monthly = useRef();
    const yearly = useRef();
    const [billing, setBilling] = useState("monthly");
    const [plan, setPlan] = useState("arcade")


    const handleOptions = (e) => {
        const previousOption = document.querySelector("#" + styles.optionChoosen);
        const currentOption = e.target;
        const planChoosen = e.target.getAttribute("data-plan");
        previousOption.id = "";
        currentOption.id = styles.optionChoosen;
        setPlan(planChoosen);
    }

    const handleSwitch = () => {
        const head = switchRef.current.querySelector("." + styles.head);
        const currentHeadPosition = head.style.left;  
        if(currentHeadPosition == ""){
            head.style.left = "20px";
            setBilling("yearly");
        }          
        else {
            head.style.left = "";
            setBilling("monthly");
        }     
   }

   useEffect(() => {
        if(billing == "yearly"){
            monthly.current.id = "";
            yearly.current.id = styles.currentPlan;
        }
    
        else if(billing == "monthly"){
            monthly.current.id = styles.currentPlan;
            yearly.current.id = "";
        }
        
   }, [billing])

   useEffect(() => {
        console.log(plan);
   }, [plan])


    return(
        <section className={styles.yourInfo}>
            <div className={styles.grid}>
                <h1 className={styles.title}>
                    Select your plan
                </h1>
                <p className={styles.desc}>
                    You have the option of monthly or yearly billing.
                </p>
                <div className={styles.options} onClick={handleOptions} id={styles.optionChoosen} data-plan="arcade">
                    <img src={images["arcade"]} className={styles.optionsImage} />
                    <div>
                        <h2 className={styles.optionsTitle}>
                            Arcade
                        </h2>
                        <p className={styles.optionsPrice}>
                            {billing == "monthly"? "$9/mo" : "$90/yr"}  
                        </p>   
                        {billing == "yearly" ? <p className={styles.freeMonths}>
                            2 months free
                        </p> : <></>}                   
                    </div>
                </div>
                <div className={styles.options} onClick={handleOptions} data-plan="advanced"> 
                    <img src={images["advanced"]} className={styles.optionsImage}/>
                    <div>
                        <h2 className={styles.optionsTitle}>
                            Advanced
                        </h2>
                        <p className={styles.optionsPrice}>
                            {billing == "monthly" ? "$12/mo" : "$120/yr"}  
                        </p> 
                        {billing == "yearly" ? <p className={styles.freeMonths}>
                            2 months free
                        </p> : <></>}                       
                    </div>
                </div>
                <div className={styles.options} onClick={handleOptions} data-plan="pro">
                    <img src={images["pro"]} className={styles.optionsImage}/>
                    <div>
                        <h2 className={styles.optionsTitle}>
                            Pro
                        </h2>
                        <p className={styles.optionsPrice}>
                            {billing == "monthly" ? "$15/mo" : "$150/yr"}  
                        </p>  
                        {billing == "yearly" ? <p className={styles.freeMonths}>
                            2 months free
                        </p> : <></>}                         
                    </div>

                </div>
                <div className={styles.switchContainer}>
                    <p className={styles.monthly} id={styles.currentPlan} ref={monthly}>
                        Monthly
                    </p>
                    <div className={styles.switch} onClick={handleSwitch} ref={switchRef}>
                        <div className={styles.head}></div>
                    </div>
                    <p className={styles.yearly} ref={yearly}>
                        Yearly
                    </p>
                </div>

            </div>

            <div className={styles.buttons}>
                <button className={styles.goBack}>Go Back</button>
                <button className={styles.nextStep}>Next Step</button>
            </div>
        </section>
    )
}

export default SelectPlan;