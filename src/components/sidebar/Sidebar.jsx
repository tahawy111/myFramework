import React from "react";
import "./sidebar.css";
import DropDown from "./DropDownComponent/DropDown";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <DropDown title="Components" />
    </div>
  );
};

export default Sidebar;
