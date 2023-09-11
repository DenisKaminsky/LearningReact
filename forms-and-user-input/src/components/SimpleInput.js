import useInputValidation from "../hooks/useInputValidation";

const SimpleInput = (props) => {
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
  
  const [name, nameHasError, onNameChange, onNameBlur] = useInputValidation('', validateName);
  const [email, emailHasError, onEmailChange, onEmailBlur] = useInputValidation('', validateEmail);

  const getFormInputClasses = (isValid) => {
    return isValid ? "form-control" : "form-control invalid";
  }

  const onFormSubmit = (event) => {
    event.preventDefault();
  }

  const isNameValid = validateName(name);
  const isEmailValid = validateEmail(email);
  const isFormValid = isNameValid && isEmailValid;

  return (
    <form onSubmit={onFormSubmit}>
      <div className={getFormInputClasses(!nameHasError)}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={onNameChange} onBlur={onNameBlur}/>
        {nameHasError && <p className="error-text">Name is invalid</p>}
      </div>
      <div className={getFormInputClasses(!emailHasError)}>
        <label htmlFor='email'>Email</label>
        <input type='text' id='email' onChange={onEmailChange} onBlur={onEmailBlur}/>
        {emailHasError && <p className="error-text">Email is invalid</p>}
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
