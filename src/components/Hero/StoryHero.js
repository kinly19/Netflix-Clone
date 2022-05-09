import storybg from "../../assets/Images/storybg.jpg";
import Signup from "../Signup/Signup";
import "./StoryHero.scss";

const StoryHero = () => {
  return (
    <div className="hero" style={{ backgroundImage: `url(${storybg})` }}>
      <div className="hero__overlay">
        <div className="hero__text">
          <h1>Unlimited films, TV programmes and more.</h1>
          <h2>Watch anywhere. Cancel at any time.</h2>
          <Signup />
        </div>
      </div>
    </div>
  );
};

export default StoryHero;
