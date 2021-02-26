import React from "react";

import Logo from "../../Logo/Logo";
import NavItems from "../NavItems/NavItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const toolbar = (props) => (
  <header className="Toolbar">
    <DrawerToggle clicked={props.drawerToggleCliked} />
    <Logo height="80%" />
    <nav className="DesktopOnly">
      <NavItems isAuth={props.isAuth} />
    </nav>
  </header>
);

export default toolbar;
