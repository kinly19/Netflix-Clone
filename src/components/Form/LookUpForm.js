import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
// Custom components
import InputField from "../Input/InputField";
// Assets
import { ReactComponent as ChevronRight } from '../../assets/Svg/chevron-right.svg';
import "./LookUpForm.scss";

const LookUpForm = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [onBlur, setOnBlur] = useState(false);

  let navigate = useNavigate();
  const emailRef = useRef();

  // Input Validation
  const emailIsValid = enteredEmail.length >= 4 && enteredEmail.trim().includes("@");
  const EmailHasError = !emailIsValid && onBlur;

  // Error message
  const inputErrorMsg =
  enteredEmail.length <= 4
    ? `Email is required`
    : `Please enter a valid email address`;

  // Handlers
  const emailChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
  };

  const onBlurHandler = () => {
    if (enteredEmail !== "") setOnBlur(true);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!emailIsValid) {
      setOnBlur(true);
      emailRef.current.focus();
      return;
    }
    navigate("/signup/intro");
  }

  return (
    <form className="lookup" onSubmit={onSubmitHandler}>
      <h3>Ready to watch? Enter your email to create or restart your membership</h3>
      <div className="lookup__form-container">
        <div className="lookup__form-content">
          <InputField
            ref={emailRef}
            groupsClass={"inputField__groups inputField__groups--lookup"}
            controlClass={"inputField__control inputField__control--error-main"}
            type={"text"}
            label={"Email Address"}
            inputIsValid={emailIsValid}
            inputHasError={EmailHasError}
            errorClass={"inputField__error"}
            errMsg={inputErrorMsg}
            onBlurHandler={onBlurHandler}
            onChangeHandler={emailChangeHandler}
          />
        </div>
        <div className="lookup__cta">
          <button>
            Get Started
            <span className="lookup__cta-svg">
              <ChevronRight />
            </span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default LookUpForm;