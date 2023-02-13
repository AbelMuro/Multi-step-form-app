import React, {useRef, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import Inputs from './Inputs';
import styles from './styles.module.css';

//making this component into a controlled component might complicate things more,
//so i used useRef to get the values of the text fields
function PersonalInfo() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const previousInfo = useSelector(state => state.personalInfo);
    const previousName = previousInfo.name;
    const previousEmail = previousInfo.email;
    const previousPhone = previousInfo.phone;
    const name = useRef();
    const email = useRef();
    const phone = useRef();

    const handleSubmit = (e) => {
        e.preventDefault;
        const users_name = name.current.value;
        const users_email = email.current.value;
        const users_phone = phone.current.value;
        dispatch({type: "set personal info" , name: users_name, email: users_email, phone: users_phone})
        navigate("/SelectPlan");
    }

    useEffect(() => {
        dispatch({type: "set step", step: 1});
    }, [])

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
                    <Inputs label="Name" id="name" type="text" placeholder="Vanessa" ref={name} defaultText={previousName}/>
                    <Inputs label="Email Address" id="email" type="email" placeholder="vanessamint@someemail.com" ref={email} defaultText={previousEmail}/>
                    <Inputs label="Phone Number" id="phone" type="tel" 
                        pattern="(\+[0-9]{1} [0-9]{3} [0-9]{3} [0-9]{4})|(\+[0-9]{1}[0-9]{3}[0-9]{3}[0-9]{4})|([0-9]{1} [0-9]{3} [0-9]{3} [0-9]{4})|([0-9]{1}[0-9]{3}[0-9]{3}[0-9]{4})|([0-9]{3}[0-9]{3}[0-9]{4})|([0-9]{3} [0-9]{3} [0-9]{4})"
                        placeholder="e.g +1 234 567 890"
                        ref={phone}     
                        defaultText={previousPhone}                   
                    />
                </div>                
            </div>

            <div className={styles.buttons}>
                <input type="submit" className={styles.nextButton} value="Next Step"/>
            </div>
        </form>

    )
}

export default PersonalInfo;