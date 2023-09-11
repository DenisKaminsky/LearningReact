import React, { useState, useEffect, useReducer, useContext } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import AuthContext from '../../store/auth-context';

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes('@') }
  }
  else if (action.type === "INPUT_VALIDATE") {
    return { value: state.value, isValid: state.value.includes('@') }
  }

  return { value: '', isValid: false }
}

const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.trim().length > 6 }
  }
  else if (action.type === "INPUT_VALIDATE") {
    return { value: state.value, isValid: state.value.trim().length > 6 }
  }

  return { value: '', isValid: false }
}

const Login = () => {
  const [formIsValid, setFormIsValid] = useState(false); 
  const [emailState, dispatchEmail] = useReducer(emailReducer, {value: '', isValid: null});
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {value: '', isValid: null});
  const authContext = useContext(AuthContext);

  useEffect(() => {
    console.log("RUN");
    const identifier = setTimeout(() => {
      setFormIsValid(
        emailState.isValid && passwordState.isValid
      );
    }, 1000);

    return () => { 
      console.log("CLEANUP");
      clearTimeout(identifier);
    };
  }, [emailState.isValid, passwordState.isValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({type: 'USER_INPUT', val: event.target.value});
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({type: 'USER_INPUT', val: event.target.value});
  };

  const validateEmailHandler = () => {
    dispatchEmail({type: 'INPUT_VALIDATE'});
  };

  const validatePasswordHandler = () => {
    dispatchPassword({type: 'INPUT_VALIDATE'});
  };

  const submitHandler = (event) => {
    event.preventDefault();
    authContext.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          id="email"
          type="email"          
          title="E-Mail"
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
          isValid={emailState.isValid}
        />
        <Input
          id="password"
          type="password"
          title="Password"
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
          isValid={passwordState.isValid}
        />
        
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
