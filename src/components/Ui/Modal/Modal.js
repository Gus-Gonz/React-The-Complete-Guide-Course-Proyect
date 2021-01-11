import React from "react";

import Aux from "../../../hoc/Auxilary";
import Backdrop from "../Backdrop/Backdrop";

const modal = (props) => (
  <Aux>
    <Backdrop show={props.show} clicked={props.modalClosed} />
    <div
      className="Modal"
      style={{
        opacity: props.show ? "1" : "0",
        transform: props.show ? "translateY(0)" : "translateY(-100vh)",
      }}>
      {props.children}
    </div>
  </Aux>
);

export default modal;
