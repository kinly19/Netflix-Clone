import { useState, useRef } from "react";
import { ReactComponent as ChevronRight } from '../../assets/Images/chevron-right.svg';
import "./Lookup.scss";

const Signup = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [onBlur, setOnBlur] = useState(false);
  const emailRef = useRef();

  const emailIsValid = enteredEmail.length >= 4 && enteredEmail.trim().includes("@");
  const EmailHasError = !emailIsValid && onBlur;

  // Handlers
  const emailChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
  };

  const onBlurHandler = () => {
    if (enteredEmail !== "") {
      setOnBlur(true);
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (!emailIsValid) {
      setOnBlur(true);
      emailRef.current.focus();
      console.log("Form error cannot sumbit")
    }

    if (emailIsValid) {
      console.log("Form submit!")
    }
  }

  // Style classes
  let formInputClass = "signup__form-control"
  if (EmailHasError) {
    formInputClass = "signup__form-control signup__form-control--error";
  } else if (emailIsValid) {
    formInputClass = "signup__form-control signup__form-control--valid";
  }

  const inputErrorMsg =
    enteredEmail.length <= 4
      ? `Email is required`
      : `Please enter a valid email address`;

  const showErrorContent = EmailHasError && (
    <div className="signup__form-error">
      <p>{inputErrorMsg}</p>
    </div>
  );

  return (
    <form className="signup" onSubmit={onSubmitHandler}>
      <h3>
        Ready to watch? Enter your email to create or restart your membership
      </h3>
      <div className="signup__form-container">
        <div className="signup__form-group">
          <div className="signup__input-wrap">
            <input
              ref={emailRef}
              type="text"
              className={formInputClass}
              placeholder="user@provider.com"
              onBlur={onBlurHandler}
              onChange={emailChangeHandler}
            />
            <label className="signup__form-label">Email address</label>
          </div>
          {showErrorContent}
        </div>
        <div className="signup__cta">
          <button>
            Get Started
            <span className="signup__cta-svg">
              <ChevronRight />
            </span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default Signup;