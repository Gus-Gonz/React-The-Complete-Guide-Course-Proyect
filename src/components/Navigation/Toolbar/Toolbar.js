import React from "react";

import Logo from "../../Logo/Logo";
import NavItems from "../NavItems/NavItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/";

const toolbar = (props) => (
  <header className="Toolbar">
    <Logo height="80%" />
    <nav className="DesktopOnly">
      <NavItems></NavItems>
    </nav>
  </header>
);

export default toolbar;
