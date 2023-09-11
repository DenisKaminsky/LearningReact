import {useState} from "react";

function useInputValidation(defaultValue, validateValue) {
    const [value, setValue] = useState(defaultValue);
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = validateValue(value);
    const hasError = isTouched && !valueIsValid;

    const onChange = (event) => {
        setValue(event.target.value);
    }
    
    const onBlur = () => {
        setIsTouched(true);
    }

    const resetValue = () => {
        setValue('');
        setIsTouched(false);
    }

    return [value, hasError, onChange, onBlur, resetValue];
}

export default useInputValidation; 