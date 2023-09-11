import styles from './Button.module.css';

function Button(props) {
    const handleClick = () => {
        if (props.onClick){
            props.onClick();
        }
    }
    return (
        <button type={props.type || 'button'} className={styles.button} onClick={handleClick}>{props.label}</button>
    );
}

export default Button;