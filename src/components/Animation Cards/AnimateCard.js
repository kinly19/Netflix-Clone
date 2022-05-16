import "./AnimateCard.scss";

const AnimateCard = (props) => {
  let containerClass = props.reverseRow
    ? "animate-card__content animate-card__content--reverse"
    : "animate-card__content";
  let textClass = props.reverseRow
    ? "animate-card__text animate-card__text--padRight"
    : "animate-card__text";
  let animateContainerClass = props.modifierClass
    ? `animate-card__animation ${props.modifierClass}`
    : "animate-card__animation";

  return (
    <div className="animate-card">
      <div className={containerClass}>
        <div className={textClass}>
          <h1>{props.title}</h1>
          <h2>{props.text}</h2>
        </div>
        <div className="animate-card__image-container">
          <img className="animate-card__img" src={props.image} />
          <div className={animateContainerClass}>{props.children}</div>
        </div>
      </div>
    </div>
  );
};

export default AnimateCard;
