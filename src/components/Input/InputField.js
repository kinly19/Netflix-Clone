import React, { useState } from "react";
import "./InputField.scss";

const InputField = React.forwardRef((props, ref) => {
  const [btnTitle, setBtnTitle] = useState("SHOW");
  const [inputType, setInputType] = useState(props.type);

  const inputIsValid = props.inputIsValid;
  const inputHasError = props.inputHasError;
  const hasButton = props.enableButton;

// Handler
  const showPasswordHandler = (e) => {
    e.preventDefault()
    if (btnTitle === "SHOW" && inputType === "password") {
      setBtnTitle("HIDE");
      setInputType("text");
    } else {
      setBtnTitle("SHOW");
      setInputType("password");
    }
  };

// Class styles
  let controlClass = inputHasError
    ? `${props.controlClass}`
    : `inputField__control`;

  if (inputIsValid) controlClass = "inputField__control inputField__control--valid";

// Conditional content
  const showErrorContent = inputHasError && (
    <div className={props.errorClass}>
      <p>{props.errMsg}</p>
    </div>
  );

  const showBtnContent = hasButton && (
    <button className="inputField__btn" onClick={showPasswordHandler}>
      {btnTitle}
    </button>
  );

  return (
    <div className="inputField">
      <div className={props.groupsClass}>
        <input
          ref={ref}
          className={controlClass}
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