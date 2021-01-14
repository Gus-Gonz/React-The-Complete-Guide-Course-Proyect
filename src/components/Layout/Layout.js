import React from "react";

import Aux from "../../hoc/Auxilary";
import Toolbar from "../Navigation/Toolbar/Toolbar";

const Layout = (props) => (
  <Aux>
    <Toolbar />
    <main className="content">{props.children}</main>
  </Aux>
);

export default Layout;
