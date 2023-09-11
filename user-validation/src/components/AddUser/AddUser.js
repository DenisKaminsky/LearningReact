import React, { useState, useRef } from 'react';
import styles from './AddUser.module.css';

import Card from '../UI/Card';
import ErrorModal from '../ErrorModal/ErrorModal';
import Button from '../UI/Button';

function AddUser(props) {

    const validateUserName = (userName) => {
        let isValid = true;
        let errorMessage = '';

        if (!userName) {
            isValid = false;
            errorMessage = "UserName cannot be empty";
        }
        else if (userName.length < 5 || userName.length > 20) {
            isValid = false;
            errorMessage = "UserName length should be from 5 to 20 characters";
        }

        return { isValid, errorMessage };
    }

    const validateAge = (age) => {
        let isValid = true;
        let errorMessage = '';

        if (!age) {
            isValid = false;
            errorMessage = "Age cannot be empty";
        }
        else if (age <= 0 || age > 100) {
            isValid = false;
            errorMessage = "Age should be from 1 to 100";
        }

        return { isValid, errorMessage };
    }    

    const userNameInputRef = useRef();
    const ageInputRef = useRef();
    const [error, setError] = useState();

    const clearForm = () => {
        userNameInputRef.current.value='';
        ageInputRef.current.value='';
    }

    const handleClearButtonClick = () => {
        clearForm();
        setError(null);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();

        let userName = userNameInputRef.current.value;
        let age = +ageInputRef.current.value;
        let userNameValidationResult = validateUserName(userName);
        if (!userNameValidationResult.isValid) {
            setError(userNameValidationResult);
            return;
        }

        let ageValidationResult = validateAge(age);
        if (!ageValidationResult.isValid) {
            setError(ageValidationResult);
            return;
        }

        if (props.onUserAdded) {
            props.onUserAdded(userName, age);
        }
        clearForm();
    }

    const handleErrorModalClose = () => {
        setError(null);
    }

    return (
        <React.Fragment>
            <Card>
                <form onSubmit={handleFormSubmit}>
                    <div className={styles["form-controls"]}>
                        <div className={styles["form-control"]}>
                            <label>Username</label>
                            <input
                                id="userName"
                                type="text"
                                ref={userNameInputRef}
                            />
                        </div>
                        <div className={styles["form-control"]}>
                            <label>Age (Years)</label>
                            <input
                                id="age"
                                type="number"
                                min="0"
                                ref={ageInputRef}
                            />
                        </div>
                    </div>
                    <div className={styles["form-actions"]}>
                        <Button type="reset" label="Clear" onClick={handleClearButtonClick} />
                        <Button type="submit" label="Add User" />
                    </div>
                </form>
            </Card>
            { error && <ErrorModal header="Invalid Input" message={error.errorMessage} onConfirm={handleErrorModalClose}/> }
        </React.Fragment>
    )
}

export default AddUser;