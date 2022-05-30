import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as ChevronRight } from '../../assets/Images/chevron-right.svg';
import "./Lookup.scss";

const Lookup = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [onBlur, setOnBlur] = useState(false);
  const emailRef = useRef();
  let navigate = useNavigate()

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
    }

    if (emailIsValid) {
      navigate("/signup");
    }
  }

  // Style classes
  let formInputClass = "lookup__form-control"
  if (EmailHasError) {
    formInputClass = "lookup__form-control lookup__form-control--error";
  } else if (emailIsValid) {
    formInputClass = "lookup__form-control lookup__form-control--valid";
  }

  const inputErrorMsg =
    enteredEmail.length <= 4
      ? `Email is required`
      : `Please enter a valid email address`;

  const showErrorContent = EmailHasError && (
    <div className="lookup__form-error">
      <p>{inputErrorMsg}</p>
    </div>
  );

  return (
    <form className="lookup" onSubmit={onSubmitHandler}>
      <h3>
        Ready to watch? Enter your email to create or restart your membership
      </h3>
      <div className="lookup__form-container">
        <div className="lookup__form-group">
          <div className="lookup__input-wrap">
            <input
              ref={emailRef}
              type="text"
              className={formInputClass}
              placeholder="user@provider.com"
              onBlur={onBlurHandler}
              onChange={emailChangeHandler}
            />
            <label className="lookup__form-label">Email address</label>
          </div>
          {showErrorContent}
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

export default Lookup;