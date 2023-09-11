import React, { useRef, useState } from "react";

import classes from './CheckoutForm.module.css';

function isEmpty(value) {
    return value.trim() === '';
}

function hasMaximumLength(value, maxLength) {
    return value.trim().length <= maxLength;
}

function hasMinimumLength(value, minLength) {
    return value.trim().length >= minLength;
}

const DEFAULT_FORM_VALIDATION_INFO = {
    name: true,
    street: true,
    city: true,
    postCode: true
};

function CheckoutForm(props) {
    const [formValidationInfo, setFormValidationInfo] = useState(DEFAULT_FORM_VALIDATION_INFO);
    const nameRef = useRef();
    const streetRef = useRef();
    const postCodeRef = useRef();
    const cityRef = useRef();

    const confirmHandler = (event) => {
        event.preventDefault();

        const enteredName = nameRef.current.value;
        const enteredStreet = streetRef.current.value;
        const enteredPostCode = postCodeRef.current.value;
        const enteredCity = cityRef.current.value;

        const nameIsValid = !isEmpty(enteredName) && hasMaximumLength(enteredName, 20);
        const streetIsValid = !isEmpty(enteredStreet) && hasMinimumLength(enteredStreet, 10) && hasMaximumLength(enteredStreet, 100);
        const postCodeIsValid = !isEmpty(enteredPostCode) && hasMinimumLength(enteredPostCode, 5) && hasMaximumLength(enteredPostCode, 10);
        const cityIsValid = !isEmpty(enteredCity) && hasMinimumLength(enteredCity, 3) && hasMaximumLength(enteredCity, 25);

        const formIsValid = nameIsValid && streetIsValid && postCodeIsValid && cityIsValid;

        if (formIsValid) {
            setFormValidationInfo(DEFAULT_FORM_VALIDATION_INFO);

            if (props.onConfirm) {
                props.onConfirm(enteredName, enteredStreet, enteredPostCode, enteredCity);
            }
        }
        else {
            setFormValidationInfo({
                name: nameIsValid,
                street: streetIsValid,
                city: cityIsValid,
                postCode: postCodeIsValid
            });
        }
    };

    const getFormInputClass = (isValid) => isValid ? classes.control : `${classes.control} ${classes.invalid}`;

    return (
        <form className={classes.form} onSubmit={confirmHandler}>
            <div className={getFormInputClass(formValidationInfo.name)}>
                <label htmlFor='name'>Your Name</label>
                <input type='text' id='name' ref={nameRef} />
                {!formValidationInfo.name && <p>Name is invalid</p>}
            </div>
            <div className={getFormInputClass(formValidationInfo.street)}>
                <label htmlFor='street'>Street</label>
                <input type='text' id='street' ref={streetRef} />
                {!formValidationInfo.street && <p>Street is invalid</p>}
            </div>
            <div className={getFormInputClass(formValidationInfo.postCode)}>
                <label htmlFor='postal'>Postal Code</label>
                <input type='text' id='postal' ref={postCodeRef} />
                {!formValidationInfo.postCode && <p>Postal Code is invalid</p>}
            </div>
            <div className={getFormInputClass(formValidationInfo.city)}>
                <label htmlFor='city'>City</label>
                <input type='text' id='city' ref={cityRef} />
                {!formValidationInfo.city && <p>City is invalid</p>}
            </div>
            <div className={classes.actions}>
                <button type='button' onClick={props.onCancel}>
                    Cancel
                </button>
                <button className={classes.submit}>Confirm</button>
            </div>
        </form>
    );
}

export default CheckoutForm;