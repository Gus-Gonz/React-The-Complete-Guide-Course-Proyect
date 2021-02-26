import React from "react";

import NavItem from "./NavItem/NavItem";

const navItems = ({ isAuth }) => (
  <ul className="NavItems">
    <NavItem link="/" exact>
      Burger Builder
    </NavItem>
    {isAuth ? <NavItem link="/orders">Orders</NavItem> : null}
    {!isAuth ? (
      <NavItem link="/auth">Authenticate</NavItem>
    ) : (
      <NavItem link="/logout">Logout</NavItem>
    )}
  </ul>
);

export default navItems;
