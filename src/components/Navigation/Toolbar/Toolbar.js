import React from "react";
import "./Toolbar.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";
const toolbar = props => (
  <header className="Toolbar">
    <DrawerToggle clicked={props.drawerToggleClicked} />
    <div className="LogoTb">
      <Logo />
    </div>
    <nav className="DesktopOnly">
      <NavigationItems isLoggedIn={props.isAuth} />
    </nav>
  </header>
);

export default toolbar;
