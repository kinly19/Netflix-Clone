import { ReactComponent as CheckSvg } from '../../assets/Svg/check.svg'
import "./CheckList.scss";

const CheckList = (props) => {
  return (
    <li className="checkList__items">
      <span><CheckSvg /></span>
      <p>{props.text}</p>
    </li>
  )
};

export default CheckList;