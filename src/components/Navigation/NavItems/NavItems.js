import React from "react";

import NavItem from "./NavItem/NavItem";

const navItems = ({ isAuth }) => (
  <ul className="NavItems">
    <NavItem link="/" exact>
      Burger Builder
    </NavItem>
    <NavItem link="/orders">Orders</NavItem>
    {!isAuth ? (
      <NavItem link="/auth">Authenticate</NavItem>
    ) : (
      <NavLink link="/logout">Logout</NavLink>
    )}
  </ul>
);

export default navItems;
