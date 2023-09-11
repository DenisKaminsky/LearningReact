import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/authStore';

import classes from './Auth.module.css';

const Auth = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();

  const clearForm = () => {
    emailRef.current.value = '';
    passwordRef.current.value = '';
  }

  const onLogin = (event) => {
    event.preventDefault();
    
    dispatch(authActions.login(emailRef.current.value));
    clearForm();
  }

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={onLogin}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' ref={emailRef} required/>
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' ref={passwordRef} required/>
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
