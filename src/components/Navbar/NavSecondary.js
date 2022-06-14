import "./NavSecondary.scss";
import { Link } from "react-router-dom";
import { ReactComponent as NetflixLogo } from "../../assets/Svg/Netflix.svg";

const NavSecondary = (props) => {
  // Main nav class
  let navClass = "navSec navSec--main";
  let logoClass = "navSec__logo navSec__logo--dynamic";
  let linkClass = "navSec__link";

  // Light nav class
  if (props.navType === "light") {
    navClass = "navSec navSec--light";
    logoClass = "navSec__logo navSec__logo--small";
    linkClass = "navSec__link navSec__link--light";
  }

  // Basic nav class
  if (props.navType === "basic") {
    navClass = "navSec navSec--basic";
    logoClass = "navSec__logo";
  }

  return (
    <nav className={navClass}>
      <div className={logoClass}>
        <NetflixLogo />
      </div>

      {props.navType !== "basic" && (
        <Link className={linkClass} to={"/signup/form/login"}>
          Sign in
        </Link>
      )}
    </nav>
  );
};

export default NavSecondary;