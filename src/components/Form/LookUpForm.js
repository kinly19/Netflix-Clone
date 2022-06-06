import { useRef } from "react";
import { useNavigate } from "react-router-dom";
// Custom components
import useInput from "../../hooks/useInput";
import InputField from "../Input/InputField";
// Assets
import { ReactComponent as ChevronRight } from "../../assets/Svg/chevron-right.svg";
import "./LookUpForm.scss";

const LookUpForm = () => {
  // Custom Hook
  const {
    inputValue: enteredEmail,
    inputIsValid: emailIsValid,
    inputError: emailHasError,
    setInputTouched,
    inputChangeHandler,
    blurHandler,
  } = useInput((inputValue) => inputValue.length >= 4 && inputValue.includes("@"));

  let navigate = useNavigate();
  const emailRef = useRef();

  // Error message
  const inputErrorMsg =
    enteredEmail.length <= 4
      ? `Email is required`
      : `Please enter a valid email address`;

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!emailIsValid) {
      setInputTouched(true);
      emailRef.current.focus();
      return;
    }
    navigate("/signup/intro");
  };

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
            inputHasError={emailHasError}
            errorClass={"inputField__error"}
            errMsg={inputErrorMsg}
            onBlurHandler={blurHandler}
            onChangeHandler={inputChangeHandler}
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
