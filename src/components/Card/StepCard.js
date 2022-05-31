import { useNavigate } from "react-router-dom";
import "./StepCard.scss";

const StepCard = (props) => {
  let navigate = useNavigate();

  const redirectHandler = () => {
    navigate(props.navigateTo);
  };

  return (
    <div className="step">
      <div
        className="step__logo"
        style={{
          backgroundImage: `url(${props.backgroundImg})`,
          backgroundSize: `${props.backgroundSize}`,
        }}
      ></div>
      <div className="step__header">
        <h3>{props.title}</h3>
        <h1>{props.subTitle}</h1>
      </div>
      <div className="step__content">{props.children}</div>
      <button className="step__submit" onClick={redirectHandler}>
        NEXT
      </button>
    </div>
  );
};

export default StepCard;
