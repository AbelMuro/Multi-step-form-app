import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import{useNavigate} from 'react-router-dom';
import styles from './styles.module.css';
import prices from './../Prices';

function PickAddOns() {
    const previousAddOns = useSelector(state => state.AddOn);                                       //in case the user clicks on 'go back' button
    const [onlineService, setOnlineService] = useState(previousAddOns["Online Service"]);           //by default, the value will be false on all three object keys
    const [largerStorage, setLargerStorage] = useState(previousAddOns["Larger Storage"]);
    const [customizableProfile, setCustomizableProfile] = useState(previousAddOns["Customizable Profile"]);
    const billing = useSelector(state => state.plan.billing);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate("/SelectPlan");
    }

    const handleSubmit = () => {
        dispatch({
            type: "set add ons", 
            "Online Service": onlineService, 
            "Larger Storage": largerStorage, 
            "Customizable Profile": customizableProfile
        });
        navigate("/Summary");
    }

    const handleOnlineService = () => {
        setOnlineService(!onlineService);
    }
    
    const handleLargerStorage = () => {
        setLargerStorage(!largerStorage);
    }

    const handleCustomizableProfile = () => {
        setCustomizableProfile(!customizableProfile);
    }

    const changeStyling = (element, state) => {
        //this function is used by the useEffects below
        if(state){
            element.style.borderColor = "#483EFF";
            element.style.backgroundColor = "#F8F9FF";
        }
        else {
            element.style.borderColor = "";
            element.style.backgroundColor = "";            
        }
    }

    useEffect(() => {
        dispatch({type: "set step", step: 3});
    }, [])


    useEffect(() => {
        const onlineServiceElement = document.querySelector("#onlineService");
        const AddOn_Container = onlineServiceElement.parentElement;
        changeStyling(AddOn_Container, onlineService);        
            
    }, [onlineService])

    useEffect(() => {
        const largerStorageElement = document.querySelector("#largerStorage");
        const AddOn_Container = largerStorageElement.parentElement;
        changeStyling(AddOn_Container, largerStorage)
        
    }, [largerStorage])

    useEffect(() => {
        const customizableProfileElement = document.querySelector("#customizableProfile");
        const AddOn_Container = customizableProfileElement.parentElement;
        changeStyling(AddOn_Container, customizableProfile)
            
    }, [customizableProfile])

    return(
        <form className={styles.container} onSubmit={handleSubmit}>
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
                        <input 
                            type="checkbox" 
                            id="onlineService" 
                            className={styles.checkboxes}
                            value={onlineService} 
                            onChange={handleOnlineService} 
                            checked={onlineService} 
                            />
                        <label className={styles.labelContainer} htmlFor="onlineService">
                            <h2 className={styles.labelTitle}>
                                Online service
                            </h2>
                            <p className={styles.labelDesc}>
                                Access to multiplayer games
                            </p>
                        </label>
                        <div className={styles.additionalCost}>
                            {billing == "Monthly" ? `+$${prices["Online Service Monthly"]}/mo` : `+$${prices["Online Service Yearly"]}/yr`}
                        </div>
                    </div>
                    <div className={styles.addOn}>
                        <input 
                            type="checkbox" 
                            id="largerStorage" 
                            className={styles.checkboxes} 
                            value={largerStorage}
                            onChange={handleLargerStorage} 
                            checked={largerStorage} 
                            />
                        <label className={styles.labelContainer} htmlFor="largerStorage">
                            <h2 className={styles.labelTitle}>
                                Larger storage
                            </h2>
                            <p className={styles.labelDesc}>
                                Extra 1TB of cloud save
                            </p>
                        </label>
                        <div className={styles.additionalCost}>
                            {billing == "Monthly" ? `+$${prices["Larger Storage Monthly"]}/mo` : `+$${prices["Larger Storage Yearly"]}/yr`}
                        </div>
                    </div>
                    <div className={styles.addOn}>
                        <input 
                            type="checkbox" 
                            id="customizableProfile" 
                            className={styles.checkboxes} 
                            value={customizableProfile}
                            onChange={handleCustomizableProfile} 
                            checked={customizableProfile} 
                            />
                        <label className={styles.labelContainer} htmlFor="customizableProfile">
                            <h2 className={styles.labelTitle}>
                                Customizable profile
                            </h2>
                            <p className={styles.labelDesc}>
                                Custom theme on your profile
                            </p>
                        </label>
                        <div className={styles.additionalCost}>
                            {billing == "Monthly" ? `+$${prices["Customizable Profile Monthly"]}/mo` : `+$${prices["Customizable Profile Yearly"]}/yr`}
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.buttons}>
                <button className={styles.goBackButton} onClick={handleGoBack}>
                    Go Back    
                </button>
                <input type="submit" className={styles.nextStepButton} value="Next Step"/>
            </div>
        </form>
    )
}

export default PickAddOns;