import React, {useRef} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import styles from './styles.module.css';

//making this component into a controlled component might complicate things more,
//so i used useRef to get the values of the text fields
function PersonalInfo() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const name = useRef();
    const email = useRef();
    const phone = useRef();

    const handleInvalid = (e) => {
        const invalidInput = e.target;
        const errorMessage = e.target.nextElementSibling;
        invalidInput.setCustomValidity(" ");                    //this is used just to remove the default popup window that appears for invalid text fields
        invalidInput.style.borderColor = "#EE374A"
        errorMessage.style.display = "block";
    }

    const handleChange = (e) => {
        const input = e.target;
        const errorMessage = e.target.nextElementSibling;
        input.setCustomValidity("");
        input.style.borderColor = "";
        errorMessage.style.display = "";
    }

    //this is where i left off
    const handleSubmit = (e) => {
        e.preventDefault;
        const users_name = name.current.value;
        const users_email = email.current.value;
        const users_phone = phone.current.value;
        dispatch({type: "set personal info" , name: users_name, email: users_email, phone: users_phone})
        dispatch({type: "set step", step: 2});
        navigate("/SelectPlan");
    }


    return(
        <form className={styles.container} onSubmit={handleSubmit}>
            <div className={styles.content}>
                <div className={styles.header}>
                    <h1 className={styles.title}>
                        Personal Info
                    </h1>
                    <p className={styles.desc}>
                        Please provide your name, email address, and phone number.
                    </p>
                </div>

                <div className={styles.formContainer}>
                    <fieldset>
                        <label className={styles.labels} htmlFor="name">
                            Name
                        </label>
                        <input 
                            id="name" 
                            type="text" 
                            placeholder="Vanessa Mint" 
                            className={styles.inputs} 
                            ref={name} 
                            onInvalid={handleInvalid} 
                            onChange={handleChange} 
                            required 
                        />
                        <p className={styles.errorMessage}>
                            This field is required
                        </p>
                    </fieldset>
                    <fieldset>
                        <label className={styles.labels} htmlFor="email">
                            Email Address
                        </label>
                        <input 
                            id="email" 
                            type="email" 
                            placeholder="vanessamint@someemail.com" 
                            className={styles.inputs} 
                            onInvalid={handleInvalid} 
                            onChange={handleChange} 
                            ref={email} 
                            required
                        />                        
                        <p className={styles.errorMessage}>
                            This field is required
                        </p>
                    </fieldset>
                    <fieldset>
                        <label className={styles.labels} htmlFor="phone">
                            Phone Number
                        </label>
                        {/* need to fix the pattern attribute, the first two patterns in the reg exp are the problem*/}
                        <input 
                            id="phone" 
                            type="tel" 
                            pattern="(/+/ [0-9]{3} [0-9]{3} [0-9]{4})|(/+/[0-9]{3}[0-9]{3}[0-9]{4})|([0-9]{1} [0-9]{3} [0-9]{3} [0-9]{4})|([0-9]{1}[0-9]{3}[0-9]{3}[0-9]{4})|([0-9]{3}[0-9]{3}[0-9]{4})|([0-9]{3} [0-9]{3} [0-9]{4})" 
                            placeholder="e.g +1 234 567 890" 
                            className={styles.inputs} 
                            onInvalid={handleInvalid} 
                            onChange={handleChange} 
                            ref={phone} 
                            required
                        />                        
                        <p className={styles.errorMessage}>
                            This field is required
                        </p>
                    </fieldset>
                </div>                
            </div>

            <div className={styles.buttons}>
                <input type="submit" className={styles.nextButton} value="Next Step"/>
            </div>
        </form>

    )
}

export default PersonalInfo;