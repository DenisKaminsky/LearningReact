import React, { useRef } from 'react';

import Input from '../../UI/Input';

import styles from './MealItemForm.module.css';

function MealItemForm(props) {
    const inputRef = useRef();

    const handleFormSubmit = (event) => {
        event.preventDefault();

        if (props.onSubmit) {
            props.onSubmit(inputRef.current.value);
        }
    }

    return (
        <form className={styles.form} onSubmit={handleFormSubmit}>
            <Input 
                title="Amount"
                ref={inputRef}
                input={{
                    id: "amount" + props.id,
                    type: "number",
                    min: '1',
                    max: '99',
                    step: '1',
                    defaultValue: '1'
                }} />
            <button type="submit">+ Add</button>
        </form>
    );
}

export default MealItemForm;