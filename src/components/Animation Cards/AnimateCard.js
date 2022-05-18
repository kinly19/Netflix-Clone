import "./AnimateCard.scss";

const AnimateCard = (props) => {
  const contentClass = props.reverseRow
    ? "animate-card__content animate-card__content--reverse"
    : "animate-card__content";
  const textClass = props.reverseRow
    ? "animate-card__text animate-card__text--padRight"
    : "animate-card__text";
  const wrapperClass = props.wrapperModClass
    ? `animate-card__animation-container animate-card__animation-container--${props.wrapperModClass}`
    : "animate-card__animation-container";
  const animateContentClass = props.animateModClass
    ? `animate-card__animation animate-card__animation--${props.animateModClass}`
    : `animate-card__animation`;
  
  return (
    <div className="animate-card">
      <div className={contentClass}>
        <div className={textClass}>
          <h1>{props.title}</h1>
          <h2>{props.text}</h2>
        </div>
        <div className="animate-card__image-container">
          <div className={wrapperClass}>
            <img className="animate-card__img" src={props.image} />
            <div className={animateContentClass}>{props.children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimateCard;
