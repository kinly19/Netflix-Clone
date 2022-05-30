import storybg from "../../assets/Images/storybg.jpg";
import Lookup from "../Lookup/Lookup";
import "./StoryHero.scss";

const StoryHero = () => {
  return (
    <div className="hero" style={{ backgroundImage: `url(${storybg})` }}>
      <div className="hero__overlay">
        <div className="hero__text">
          <h1>Unlimited films, TV programmes and more.</h1>
          <h2>Watch anywhere. Cancel at any time.</h2>
          <Lookup />
        </div>
      </div>
    </div>
  );
};

export default StoryHero;
