import React from "react";
import NavigationItem from "../../Navigation/NavigationItems/NavigationItem/NavigationItem";
import "./NavigationItems.css";

const navigationItems = props => (
  <ul className="NavigationItems">
    <NavigationItem link="/" exact>
      BurgerBuilder
    </NavigationItem>
    {props.isLoggedIn ? (
      <NavigationItem link="/orders"> Orders</NavigationItem>
    ) : null}
    {!props.isLoggedIn ? (
      <NavigationItem link="/auth"> Login</NavigationItem>
    ) : (
      <NavigationItem link="/logout"> Logout</NavigationItem>
    )}
  </ul>
);

export default navigationItems;
