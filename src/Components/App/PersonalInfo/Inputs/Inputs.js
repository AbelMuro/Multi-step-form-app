import React from 'react';
import styles from './styles.module.css';

function Inputs({label, id, type, placeholder, value, setValue , ...attrs}) {

    const handleInvalid = (e) => {
        const invalidInput = e.target;
        const errorMessage = e.target.nextElementSibling;
        invalidInput.setCustomValidity(" ");                    //i passed a space because i wanted to remove the default popup window that appears for invalid text fields
        invalidInput.style.borderColor = "#EE374A";
        errorMessage.style.display = "block";
    }

    const handleChange = (e) => {
        const input = e.target;
        const errorMessage = e.target.nextElementSibling;
        input.setCustomValidity("");
        input.style.borderColor = "";
        errorMessage.style.display = "";
        setValue(e.target.value);
    }

    return(                    
        <fieldset>
            <label className={styles.labels} htmlFor={id}>
                {label}
            </label>
            <input 
                id={id} 
                type={type} 
                placeholder={placeholder} 
                className={styles.inputs} 
                onInvalid={handleInvalid} 
                value={value}
                onChange={handleChange} 
                {...attrs}
                required 
            />
            <p className={styles.errorMessage}>
                This field is required
            </p>
        </fieldset>
    )
}

export default Inputs;