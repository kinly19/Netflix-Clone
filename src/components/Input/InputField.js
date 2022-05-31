import React, { useState } from "react";
import "./InputField.scss";

const InputField = React.forwardRef((props, ref) => {
  const [btnTitle, setBtnTitle] = useState("SHOW");
  const [inputType, setInputType] = useState(props.type);

  const inputIsValid = props.inputIsValid;
  const inputHasError = props.inputHasError;
  const hasErrClass = props.errClass === "main";
  const hasButton = props.enableButton;

// Class styles
  let inputClass = inputHasError
    ? "inputField__control inputField__control--error-sec"
    : "inputField__control";

  if (hasErrClass && inputHasError) {
    inputClass = "inputField__control inputField__control--error-main";
  }

  if (inputIsValid) inputClass = "inputField__control inputField__control--valid";

// Input container class
  let inputCtnClass = props.inputCtnClass
    ? `inputField__groups inputField__groups--${props.inputCtnClass}`
    : "inputField__groups";

// Conditional content
  const showErrorContent = inputHasError && (
    <div className="inputField__error">
      <p>{props.errMsg}</p>
    </div>
  );

  const showBtnContent = hasButton && (
    <button className="inputField__btn" onClick={showPasswordHandler}>
      {btnTitle}
    </button>
  );

  const showPasswordHandler = () => {
    if (btnTitle === "SHOW" && inputType === "password") {
      setBtnTitle("HIDE");
      setInputType("text");
    } else {
      setBtnTitle("SHOW");
      setInputType("password");
    }
  };

  return (
    <div className="inputField">
      <div className={inputCtnClass}>
        <input
          ref={ref}
          className={inputClass}
          placeholder="..."
          type={inputType}
          onBlur={props.onBlurHandler}
          onChange={props.onChangeHandler}
        />
        <label className="inputField__label">{props.label}</label>
        {showBtnContent}
      </div>
      {showErrorContent}
    </div>
  );
});

export default InputField;