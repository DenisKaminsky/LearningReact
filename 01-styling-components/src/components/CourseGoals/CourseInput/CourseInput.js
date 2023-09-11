import React, { useState } from 'react';
//import styled from 'styled-components';

import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.css';

/*const FromControl = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${props => props.invalid ? 'red' : 'black'}
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid ${props => props.invalid ? 'red' : '#ccc'};
    background-color: ${props => props.invalid ? 'pink' : 'white'};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }
`
*/

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const clearForm = () => {
    setIsValid(true);
    setEnteredValue('');
  }

  const goalInputChangeHandler = event => {
    setIsValid(true);
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length > 0) {
      clearForm();
      props.onAddGoal(enteredValue);
    }
    else {
      setIsValid(false);
    }
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles['form-control']} ${isValid ? "" : styles.invalid}`}>
        <label>
          Course Goal
        </label>

        <input 
          value={enteredValue} 
          type="text"
          onChange={goalInputChangeHandler} 
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
