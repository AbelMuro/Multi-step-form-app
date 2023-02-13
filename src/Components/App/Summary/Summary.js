import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import styles from './styles.module.css';
import prices from './../Prices';

function Summary() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [total, setTotal] = useState("");
    const plan = useSelector(state => state.plan);
    const planChoice = plan.plan;
    const billing = plan.billing;
    const AddOns = useSelector(state => state.AddOn);

    const handleGoBack = () => {
        dispatch({type: "set step", step: 3});
        navigate("/PickAddOns");
    }

    const handleChangeLink = () => {
        navigate("/SelectPlan");
    }

    const handleConfirm = () => {
        dispatch({type: "set total", total: total});
        navigate("/ThankYou");
    }

    useEffect(() => {
        dispatch({type: "set step", step: 4});
    }, [])

    useEffect(() => {
        let basePrice = prices[`${planChoice} ${billing}`]
        Object.entries(AddOns).forEach((addOn) => {
            const key = addOn[0];
            const value = addOn[1];
            if(value)
                basePrice += prices[`${key} ${billing}`]
        })  
        setTotal(basePrice)
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
                        <a className={styles.change} onClick={handleChangeLink}>Change</a>
                        <p className={styles.price}> 
                            {billing == "Monthly" ? `$${prices[planChoice + " " + billing]}/mo` : `$${prices[planChoice + " " + billing]}yr`}
                        </p>
                    </div>
                    {JSON.stringify(AddOns).includes("true") ? <div className={styles.divisor}></div> : <></>}
                    
                    {Object.entries(AddOns).map((addOn) => {
                        const key = addOn[0];
                        const value = addOn[1];

                        if(value)
                            return( 
                                <div className={styles.addOns} key={key}>
                                    <p className={styles.addOnTitle}>
                                        {key}
                                    </p>
                                    <p className={styles.addOnPrice}>
                                        {billing == "Monthly" ? `$${prices[key + " " + billing]}/mo` : `$${prices[key + " " + billing]}/yr` }
                                    </p>                                                                                
                                </div>
                            ) 
                        })} 

                    <div className={styles.total}>
                        <p className={styles.totalTitle}>
                            {billing == "Monthly" ? "Total (per month)" : "Total (per year)"}
                        </p>
                        <p className={styles.totalPrice}>
                            {billing == "Monthly" ? `$${total}/mo` : `$${total}/yr`}
                        </p>
                    </div>     
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