import { useState } from "react";
import { ReactComponent as ThinXIcon } from "../../assets/Images/thin-x.svg";
import "./Accordion.scss";

const Accordion = (props) => {
  const [currentIndex, setCurrentIndex] = useState(null);
  const listItems = props.listData; // list data via props
  
  // Class style
  const listContent = listItems.map((item, index) => {
    const { title, content } = item;

    const btnToggleClass =
      currentIndex === index
        ? "accordion__btn accordion__btn--open"
        : "accordion__btn accordion__btn--close";
    const listToggleClass =
      currentIndex === index
        ? "accordion__content accordion__content--open"
        : "accordion__content accordion__content--close";

    return (
      <li className="accordion__item" key={index}>
        <button
          className={btnToggleClass}
          onClick={() => toggleListHandler(index)}
        >
          {title} <ThinXIcon />
        </button>
        <div className={listToggleClass}>
          <span>{content}</span>
        </div>
      </li>
    );
  });

  // Handler
  const toggleListHandler = (selectedIndex) => {
    if (selectedIndex !== currentIndex) {
      setCurrentIndex(selectedIndex);
      return;
    }
    setCurrentIndex(null);
  };

  return <ul className="accordion">{listContent}</ul>;
};

export default Accordion;