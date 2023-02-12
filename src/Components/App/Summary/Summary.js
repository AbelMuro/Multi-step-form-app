import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import styles from './styles.module.css';

function Summary() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [total, setTotal] = useState("");
    const plan = useSelector(state => state.plan);
    const price = plan.price;
    const planChoice = plan.plan;
    const billing = plan.billing;
    const AddOns = useSelector(state => state.AddOn);
    const AddOnPrices = [
        billing == "Monthly" ? "+$1/mo" : "+$10/yr",
        billing == "Monthly" ? "+$2/mo" : "+$20/yr",
        billing == "Monthly" ? "+$2/mo" : "+$20/yr"
    ]

    const handleGoBack = () => {
        dispatch({type: "set step", step: 3});
        navigate("/PickAddOns");
    }

    const handleConfirm = () => {

    }

    useEffect(() => {
        
    },[])


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
                            {`${planChoice} (${billing})`}
                        </h2>
                        <a className={styles.change}>Change</a>
                        <p className={styles.price}> 
                                {`$${price}/`}
                                {billing == "Monthly" ? "mo" : "yr"}
                        </p>
                    </div>
                    <div className={styles.divisor}></div>
                    
                    {Object.entries(AddOns).map((addOn, i) => {
                        const key = addOn[0];
                        const value = addOn[1];

                        if(value)
                            return( 
                                <div className={styles.addOns} key={key}>
                                    <p className={styles.addOnTitle}>
                                        {key}
                                    </p>
                                    <p className={styles.addOnPrice}>
                                        {AddOnPrices[i]}
                                    </p>                                                                                
                                </div>
                            ) 
                        })}





                   
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
            <div className={styles.buttons}>
                <button className={styles.goBackButton} onClick={handleGoBack}>
                    Go Back
                </button>
                <button className={styles.confirmButton} onClick={handleConfirm}>
                    Confirm
                </button>
            </div>
        </section>
    )
}

export default Summary;