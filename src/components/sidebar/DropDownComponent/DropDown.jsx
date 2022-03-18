import React, { useState } from "react";
import "./dropdown.css";
import upArrow from "../../../assets/up_arrow.svg";
import List from "./List";
const DropDown = (props) => {
  const [active, setActive] = useState(false);
  const switchToggle = () => {
    active ? setActive(false) : setActive(true);
  };
  return (
    <div className="sidebar_menu">
      <div className={active ? "active" : ""}>
        <div className="cont">
          <div className="title" onClick={switchToggle}>
            <img className="Arrow" src={upArrow} alt="Up Arrow" />
            <h4>{props.title}</h4>
          </div>
          <ul>
            <List />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DropDown;
