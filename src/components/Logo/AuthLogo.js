import React from "react";
import burgerLogo from "../../assests/Images/burger-logo2.jpg";
import "./Logo.css";
const logo = props => (
  <div className="Logo" style={{ height: props.height }}>
    <img src={burgerLogo} alt="MyBurger" />
  </div>
);

export default logo;
