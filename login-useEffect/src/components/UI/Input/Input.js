import classes from './Input.module.css';

function Input(props) {
    return (
        <div
          className={`${classes.control} ${props.isValid === false ? classes.invalid : '' }`}
        >
          <label htmlFor={props.id}>{props.title}</label>
          <input          
            id={props.id}
            type={props.type}
            value={props.value}
            onChange={props.onChange}
            onBlur={props.onBlur}
          />
        </div>
    )
}

export default Input;