import useInputValidation from "../hooks/useInputValidation";

const validateName = (name) => {
  if (name && name.trim() !== ''){
    return true;
  }

  return false;
}

const validateEmail = (email) => {
  return email && email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
}

const BasicForm = (props) => {
  const [firstName, firstNameHasError, firstNameOnChange, firstNameOnBlur, resetFirstName] = useInputValidation('', validateName);
  const [lastName, lastNameHasError, lastNameOnChange, lastNameOnBlur, resetLastName] = useInputValidation('', validateName);
  const [email, emailHasError, emailOnChange, emailOnBlur, resetEmail] = useInputValidation('', validateEmail);

  const getFormInputClasses = (isValid) => {
    return isValid ? "form-control" : "form-control invalid";
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    resetFirstName();
    resetLastName();
    resetEmail();
  }
  const isFormValid = !firstNameHasError && !lastNameHasError && !emailHasError;
  console.log(isFormValid);
  
  return (
    <form onSubmit={handleFormSubmit}>
      <div className={getFormInputClasses(!firstNameHasError)}>
        <div className='form-control'>
          <label htmlFor='name'>First Name</label>
          <input value={firstName} type='text' id='name' onChange={firstNameOnChange} onBlur={firstNameOnBlur}/>
          {firstNameHasError && <p className="error-text">First Name is invalid</p>}
        </div>
        <div className={getFormInputClasses(!lastNameHasError)}>
          <label htmlFor='name'>Last Name</label>
          <input value={lastName} type='text' id='name' onChange={lastNameOnChange} onBlur={lastNameOnBlur}/>
          {lastNameHasError && <p className="error-text">Last Name is invalid</p>}
        </div>
      </div>
      <div className={getFormInputClasses(!emailHasError)}>
        <label htmlFor='name'>E-Mail Address</label>
        <input value={email} type='text' id='name' onChange={emailOnChange} onBlur={emailOnBlur}/>
        {emailHasError && <p className="error-text">Email is invalid</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
