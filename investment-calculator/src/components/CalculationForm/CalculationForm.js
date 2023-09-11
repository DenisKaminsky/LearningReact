import React, { useState } from 'react';
import styles from './CalculationForm.module.css';


function CalculationForm(props) {
    const DEFAULT_USER_INPUT = {
        currentSavings: '',
        yearlyContribution: '',
        expectedReturn: '',
        duration: ''
    }

    const [userInput, setUserInput] = useState(DEFAULT_USER_INPUT);

    const handleInputChange = (event) => {
        setUserInput((prevState) => ({
            ...prevState,
            [event.target.id]: +event.target.value
        }))
    }

    const handleResetButtonClick = () => {
        setUserInput(DEFAULT_USER_INPUT);
        if (props.onCalculate) {
            props.onCalculate([]);
        }
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (props.onCalculate) {
            const investmentData = []; // per-year results

            let currentSavings = +userInput.currentSavings;
            let totalInterset = 0;
            const yearlyContribution = +userInput.yearlyContribution;
            const expectedReturn = +userInput.expectedReturn / 100;
            const duration = +userInput.duration;

            for (let i = 0; i < duration; i++) {
                const yearlyInterest = currentSavings * expectedReturn;
                currentSavings += yearlyInterest + yearlyContribution;
                totalInterset += yearlyInterest;
                const totalInvestedCapital = currentSavings - totalInterset;
                investmentData.push({
                    yearNumber: i + 1,
                    totalSavingsEndOfYear: currentSavings,
                    yearlyInterest: yearlyInterest,                    
                    totalInterest: totalInterset,
                    totalInvestedCapital: totalInvestedCapital,
                });
            }

            props.onCalculate(investmentData);
        }
    }

    return (
        <form className={styles.form} onSubmit={handleFormSubmit}>
            <div className={styles['input-group']}>
                <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    <input type="number" step="0.1" min="0" id="currentSavings" value={userInput.currentSavings} onChange={handleInputChange} />
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                    <input type="number" step="0.1" min="0" id="yearlyContribution" value={userInput.yearlyContribution} onChange={handleInputChange} />
                </p>
            </div>
            <div className={styles['input-group']}>
                <p>
                    <label htmlFor="expected-return">Expected Interest (%, per year)</label>
                    <input type="number" step="0.1" min="0" id="expectedReturn" value={userInput.expectedReturn} onChange={handleInputChange} />
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input type="number" min="0" id="duration" value={userInput.duration} onChange={handleInputChange} />
                </p>
            </div>
            <p className={styles.actions}>
                <button type="reset" className={styles.buttonAlt} onClick={handleResetButtonClick}>
                    Reset
                </button>
                <button type="submit" className={styles.button}>
                    Calculate
                </button>
            </p>
        </form>
    );
}

export default CalculationForm;