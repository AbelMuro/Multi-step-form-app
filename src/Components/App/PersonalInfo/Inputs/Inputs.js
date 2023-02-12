import React, {useState, useRef, useEffect, useImperativeHandle, forwardRef} from 'react';
import styles from './styles.module.css';

const Inputs = forwardRef(({label, id, type, placeholder, defaultText, ...rest}, ref)  => {
    const [text, setText] = useState(defaultText);
    const errorMessage = useRef();
    const input = useRef();

    useImperativeHandle(ref, () => ({
        get value() {
            return text;
        }
    }))

    const handleInvalid = () => {
        input.current.setCustomValidity(" ");                   
        input.current.style.borderColor = "#EE374A";
        errorMessage.current.style.display = "block";
    }

    const handleChange = (e) => {
        setText(e.target.value)
    }

    useEffect(() => {
        input.current.setCustomValidity("");
        input.current.style.borderColor = "";
        errorMessage.current.style.display = "";

    }, [text])

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
                value={text}
                onChange={handleChange} 
                {...rest}
                required 
                ref={input}
            />
            <p className={styles.errorMessage} ref={errorMessage}>
                This field is required
            </p>
        </fieldset>
    )
})

export default Inputs;