import "./NavSecondary.scss";
import { Link } from 'react-router-dom';
import { ReactComponent as NetflixLogo } from '../../assets/Images/Netflix.svg';

const NavSecondary = (props) => {
      
  let navClass = "navSec"
  let logoClass = "navSec__logo"
  let linkClass = "navSec__link"    

  if (props.navType === "light") {
    navClass = "navSec navSec--borderBtm"
    logoClass = "navSec__logo navSec__logo--small"
    linkClass = "navSec__link navSec__link--light"
  }
  
  return (
    <nav className={navClass}>
      <div className={logoClass}>
        <NetflixLogo />
      </div>
      <Link className={linkClass} to={"login"}>
        Sign in
      </Link>
    </nav>
  )
}

export default NavSecondary;