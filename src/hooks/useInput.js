import { useState } from "react";

const useInput = (validateInput) => {
  const [inputValue, setInputValue] = useState("");
  const [inputTouched, setInputTouched] = useState(false);

  const inputIsValid = validateInput(inputValue);
  const inputError = !inputIsValid && inputTouched;

  const inputChangeHandler = (e) => {
    setInputValue(e.target.value);
  };

  const blurHandler = () => {
    if(inputValue !== "") {
      setInputTouched(true);
    }
  };

  return {
    inputValue,
    inputIsValid,
    inputError,
    setInputTouched,
    inputChangeHandler,
    blurHandler,
  };
};

export default useInput;
