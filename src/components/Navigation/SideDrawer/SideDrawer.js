import React from "react";

import Logo from "../../Logo/Logo";
import NavItems from "../NavItems/NavItems";
import BackDrop from "../../Ui/Backdrop/Backdrop";
import Aux from "../../../hoc/Auxilary/Auxilary";

const sideDrawer = (props) => {
  let attachedClasses = ["SideDrawer", props.open ? "Open" : "Closed"];

  return (
    <Aux>
      <BackDrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")} onClick={props.closed}>
        <Logo height="11%" />
        <nav>
          <NavItems isAuth={props.isAuth} />
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;
