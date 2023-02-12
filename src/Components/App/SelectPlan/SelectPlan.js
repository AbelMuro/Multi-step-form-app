import React, {useRef, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import styles from "./styles.module.css";
import images from './images';


function SelectPlan() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const previousPlan = useSelector(state => state.plan)       //in case the user clicks on 'go back' button, then we can display the previously selected options
    const switchRef = useRef();
    const monthly = useRef();
    const yearly = useRef();
    const [billing, setBilling] = useState(previousPlan.billing);   
    const [price, setPrice] = useState(previousPlan.price)
    const [plan, setPlan] = useState(previousPlan.plan);


    const handlePlanChange = (e) => { 
        const currentOption = e.target;
        const planChoosen = currentOption.getAttribute("data-plan");
        const price_of_plan = currentOption.getAttribute("data-price");

        setPlan(planChoosen);
        setPrice(price_of_plan);
    }

    const handleSwitch = () => {
        if(billing == "Monthly"){
            setBilling("Yearly");
            setPrice(`${price}0`);
        }          
        else {
            setBilling("Monthly");
            setPrice(price.replace("0", ""))     
        }     
   }

   const handleGoBack = () => {
        dispatch({type: "set step", step: 1});
        navigate("/");
   }

   const handleNextButton = () => {
        dispatch({type: "set step", step: 3});
        dispatch({type: "set plan", plan: plan, billing: billing, price: price})
        navigate("/PickAddOns");
   }

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

    //styling the previously selected options, just in case the user clicks on 'go back' button
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
                <div className={styles.options} onClick={handlePlanChange} id={styles.optionChoosen} data-plan="Arcade" data-price={"9"}>
                    <img src={images["arcade"]} className={styles.optionsImage} />
                    <div>
                        <h2 className={styles.optionsTitle}>
                            Arcade
                        </h2>
                        <p className={styles.optionsPrice}>
                            {billing == "Monthly" ? "$9/mo" : "$90/yr"}  
                        </p>   
                        {billing == "yearly" ? <p className={styles.freeMonths}>
                            2 months free
                        </p> : <></>}                   
                    </div>
                </div>
                <div className={styles.options} onClick={handlePlanChange} data-plan="Advanced" data-price={"12"}> 
                    <img src={images["advanced"]} className={styles.optionsImage}/>
                    <div>
                        <h2 className={styles.optionsTitle}>
                            Advanced
                        </h2>
                        <p className={styles.optionsPrice}>
                            {billing == "Monthly" ? "$12/mo" : "$120/yr"}  
                        </p> 
                        {billing == "yearly" ? <p className={styles.freeMonths}>
                            2 months free
                        </p> : <></>}                       
                    </div>
                </div>
                <div className={styles.options} onClick={handlePlanChange} data-plan="Pro" data-price={"15"}>
                    <img src={images["pro"]} className={styles.optionsImage}/>
                    <div>
                        <h2 className={styles.optionsTitle}>
                            Pro
                        </h2>
                        <p className={styles.optionsPrice}>
                            {billing == "Monthly" ? "$15/mo" : "$150/yr"}  
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