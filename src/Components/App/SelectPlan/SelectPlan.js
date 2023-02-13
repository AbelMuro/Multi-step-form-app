import React, {useRef, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import styles from "./styles.module.css";
import images from './images';
import prices from './../Prices';


function SelectPlan() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const previousPlan = useSelector(state => state.plan)       //in case the user clicks on 'go back' button, then we can display the previously selected options
    const switchRef = useRef();
    const monthly = useRef();
    const yearly = useRef();
    const [billing, setBilling] = useState(previousPlan.billing);   
    const [plan, setPlan] = useState(previousPlan.plan);
    const [arcade, setArcade] = useState(prices["Arcade Monthly"]);
    const [advanced, setAdvanced] = useState(prices["Advanced Monthly"]);
    const [pro, setPro] = useState(prices["Pro Monthly"]);
    console.log(typeof(prices));

    const handlePlanChange = (e) => { 
        const currentOption = e.target;
        const planChoosen = currentOption.getAttribute("data-plan");
        setPlan(planChoosen);
    }

    const handleSwitch = () => {
        if(billing == "Monthly"){
            setArcade(prices["Arcade Yearly"]);
            setAdvanced(prices["Advanced Yearly"]);
            setPro(prices["Pro Yearly"]);
            setBilling("Yearly");
        }          
        else {
            setArcade(prices["Arcade Monthly"]);
            setAdvanced(prices["Advanced Monthly"]);
            setPro(prices["Pro Monthly"]);
            setBilling("Monthly"); 
        }     
   }

   const handleGoBack = () => {
        navigate("/");
   }

   const handleNextButton = () => {
        dispatch({type: "set plan", plan: plan, billing: billing})
        navigate("/PickAddOns");
   }

   useEffect(() => {
        dispatch({type: "set step", step: 2});
   }, [])

   //this useEffect will re-style the switch element 
   useEffect(() => {
        const head = switchRef.current.querySelector("." + styles.head);
        if(billing == "Yearly"){
            monthly.current.id = "";
            yearly.current.id = styles.currentPlan;   
            head.style.left = "20px";
        }
        else if(billing == "Monthly"){
            monthly.current.id = styles.currentPlan;
            yearly.current.id = "";
            head.style.left = "";
        }
   }, [billing])

    //this useEffect will re-style the currently selected subscription option (arcade, advanced, pro)
   useEffect(() => {                        
        const currentOption = document.querySelectorAll("." + styles.options);
        const previousOption = document.querySelector("#" + styles.optionChoosen);
        previousOption.id = "";

        if(plan == "Arcade")
            currentOption[0].id = styles.optionChoosen;
        
        else if(plan == "Advanced")
            currentOption[1].id = styles.optionChoosen;
        
        else if(plan == "Pro")
            currentOption[2].id = styles.optionChoosen;
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
                <div className={styles.options} onClick={handlePlanChange} id={styles.optionChoosen} data-plan="Arcade">
                    <img src={images["arcade"]} className={styles.optionsImage} />
                    <div>
                        <h2 className={styles.optionsTitle}>
                            Arcade
                        </h2>
                        <p className={styles.optionsPrice}>
                            {billing == "Monthly" ? `$${arcade}/mo` : `$${arcade}/yr`}  
                        </p>   
                        {billing == "yearly" ? <p className={styles.freeMonths}>
                            2 months free
                        </p> : <></>}                   
                    </div>
                </div>
                <div className={styles.options} onClick={handlePlanChange} data-plan="Advanced"> 
                    <img src={images["advanced"]} className={styles.optionsImage}/>
                    <div>
                        <h2 className={styles.optionsTitle}>
                            Advanced
                        </h2>
                        <p className={styles.optionsPrice}>
                            {billing == "Monthly" ? `$${advanced}/mo` : `$${advanced}/yr`}  
                        </p> 
                        {billing == "yearly" ? <p className={styles.freeMonths}>
                            2 months free
                        </p> : <></>}                       
                    </div>
                </div>
                <div className={styles.options} onClick={handlePlanChange} data-plan="Pro">
                    <img src={images["pro"]} className={styles.optionsImage}/>
                    <div>
                        <h2 className={styles.optionsTitle}>
                            Pro
                        </h2>
                        <p className={styles.optionsPrice}>
                            {billing == "Monthly" ? `$${pro}/mo` : `$${pro}/yr`}  
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
                <button className={styles.goBack} onClick={handleGoBack}>Go Back</button>
                <button className={styles.nextStep} onClick={handleNextButton}>Next Step</button>
            </div>
        </section>
    )
}

export default SelectPlan;