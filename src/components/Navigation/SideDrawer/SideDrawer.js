import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import "./SideDrawer.css";
import Backdrop from "../../UI/Model/Backdrop/Backdrop";
import Aux from "../../../hoc/Auxillary";
const sideDrawer = props => {
  let attachedClasses = ["SideDrawer", "Close"];
  if (props.open) {
    //makes the sidedrawer dimanic
    attachedClasses = ["SideDrawer", "Open"];
  }

  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")} onClick={props.closed}>
        <div className="LogoSd">
          <Logo />
        </div>
        <nav>
          <NavigationItems isLoggedIn={props.isAuth} />
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;
