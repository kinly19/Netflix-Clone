import "./AnimateCard.scss";

const AnimateCard = (props) => {
  const isReversed = props.reverse;
  const hasVideo = props.hasVideo;
  
  let containerClass = isReversed
    ? "animate-card__content animate-card__content--reverse"
    : "animate-card__content";
  let textClass = isReversed
    ? "animate-card__text animate-card__text--padRight"
    : "animate-card__text";
  let animateContainerClass = hasVideo
    ? "animate-card__animation animate-card__animation--video"
    : "animate-card__animation animate-card__animation--download";

  return (
    <div className="animate-card">
      <div className={containerClass}>
        <div className={textClass}>
          <h1>{props.title}</h1>
          <h2>{props.text}</h2>
        </div>
        <div className="animate-card__image">
          <img className="animate-card__img" src={props.image} />
          <div className={animateContainerClass}>
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimateCard;