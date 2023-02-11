import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import{useNavigate} from 'react-router-dom';
import styles from './styles.module.css';

function PickAddOns() {
    const [onlineService, setOnlineService] = useState(false);
    const [largerStorage, setLargerStorage] = useState(false);
    const [customizableProfile, setCustomizableProfile] = useState(false);
    const billing = useSelector(state => state.plan.billing);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleGoBack = () => {
        dispatch({type: "set step", step: 2});
        navigate("/SelectPlan");
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

    const handleCheck = (e) => {
        const addOn = e.target.parentElement;
        const isChecked = e.target.checked;

        if(isChecked){
            addOn.style.borderColor = "#483EFF"
            addOn.style.backgroundColor = "#F8F9FF";
        }
        else{
            addOn.style.borderColor = "";
            addOn.style.backgroundColor = "";
        }
    }

    const handleSubmit = () => {
        dispatch({type: "set step", step: 4});
        dispatch({
            type: "set add ons", 
            onlineService: onlineService, 
            largerStorage: largerStorage, 
            customizableProfile: customizableProfile
        });
        navigate("/Summary");
    }

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
                        <input type="checkbox" id="onlineService" className={styles.checkboxes} onClick={handleCheck} value={onlineService} onChange={handleOnlineService}/>
                        <label className={styles.labelContainer} htmlFor="onlineService">
                            <h2 className={styles.labelTitle}>
                                Online service
                            </h2>
                            <p className={styles.labelDesc}>
                                Access to multiplayer games
                            </p>
                        </label>
                        <div className={styles.additionalCost}>
                            {billing == "monthly" ? "+$1/mo" : "+$10/yr"}
                        </div>
                    </div>
                    <div className={styles.addOn}>
                        <input type="checkbox" id="largerStorage" className={styles.checkboxes} onClick={handleCheck} value={largerStorage} onChange={handleLargerStorage}/>
                        <label className={styles.labelContainer} htmlFor="largerStorage">
                            <h2 className={styles.labelTitle}>
                                Larger storage
                            </h2>
                            <p className={styles.labelDesc}>
                                Extra 1TB of cloud save
                            </p>
                        </label>
                        <div className={styles.additionalCost}>
                            {billing == "monthly" ? "+$2/mo" : "+$20/yr"}
                        </div>
                    </div>
                    <div className={styles.addOn}>
                        <input type="checkbox" id="customizableProfile" className={styles.checkboxes} onClick={handleCheck} value={customizableProfile} onChange={handleCustomizableProfile}/>
                        <label className={styles.labelContainer} htmlFor="customizableProfile">
                            <h2 className={styles.labelTitle}>
                                Customizable profile
                            </h2>
                            <p className={styles.labelDesc}>
                                Custom theme on your profile
                            </p>
                        </label>
                        <div className={styles.additionalCost}>
                            {billing == "monthly" ? "+$2/mo" : "+$20/yr"}
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