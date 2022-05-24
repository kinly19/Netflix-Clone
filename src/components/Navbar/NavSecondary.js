import "./NavSecondary.scss";
import { Link } from 'react-router-dom';
import { ReactComponent as NetflixLogo } from '../../assets/Images/Netflix.svg';

const NavSecondary = () => {
  return (
    <nav className="navSec">
      <div className="navSec__logo">
        <NetflixLogo />
      </div>
      <Link className="navSec__link" to={"login"}>
        Sign in
      </Link>
    </nav>
  )
}

export default NavSecondary;