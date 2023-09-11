import React from 'react';
import styles from './Input.module.css';

const Input = React.forwardRef((props, ref) => {
  return (
    <div
      className={styles.input}
    >
      <label htmlFor={props.input.id}>{props.title}</label>
      <input
        {...props.input}
        ref={ref}
      />
    </div>
  )
});

export default Input;