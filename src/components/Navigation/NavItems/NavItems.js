import React from "react";

import NavItem from "./NavItem/NavItem";

const navItems = (props) => (
  <ul className="NavItems">
    <NavItem link="/" active>
      Burger Builder
    </NavItem>
    <NavItem link="/">CheckOut</NavItem>
  </ul>
);

export default navItems;
