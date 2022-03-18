import React from "react";
import "./list.css";
import { Link } from "react-router-dom";
const list = () => {
  return (
    <>
      <li>
        <Link to="/">Buttons</Link>
      </li>
      <li>
        <Link to="/cards">Card</Link>
      </li>
    </>
  );
};

export default list;
