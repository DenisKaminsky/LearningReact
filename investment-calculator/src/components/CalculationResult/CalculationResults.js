import styles from './CalculationResults.module.css';

function CalculationResults(props) {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });

    return (
        <div className={styles['calculation-container']}>
            {
                props.data && props.data.length > 0
                ? (
                    <table className={styles['calculation-results']}>
                        <thead>
                            <tr>
                                <th>Year</th>
                                <th>Total Savings</th>
                                <th>Interest (Year)</th>
                                <th>Total Interest</th>
                                <th>Invested Capital</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.data.map(((item) =>
                                <tr key={item.yearNumber}>
                                    <td>{item.yearNumber}</td>
                                    <td>{formatter.format(item.totalSavingsEndOfYear)}</td>
                                    <td>{formatter.format(item.yearlyInterest)}</td>
                                    <td>{formatter.format(item.totalInterest)}</td>
                                    <td>{formatter.format(item.totalInvestedCapital)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )
                : (
                    <h3>No investment calculated yet.</h3>
                )
            }            
        </div>
    )
}

export default CalculationResults;