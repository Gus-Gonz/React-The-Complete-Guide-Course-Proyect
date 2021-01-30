import React from "react";

import NavItem from "./NavItem/NavItem";

const navItems = (props) => (
  <ul className="NavItems">
    <NavItem link="/" exact>
      Burger Builder
    </NavItem>
    <NavItem link="/orders">Orders</NavItem>
  </ul>
);

export default navItems;
