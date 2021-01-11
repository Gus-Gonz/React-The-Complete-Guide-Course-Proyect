import React from "react";

const modal = (props) => (
  <div
    className="Modal"
    style={{
      opacity: props.show ? "1" : "0",
      transform: props.show ? "translateY(0)" : "translateY(-100vh)",
    }}>
    {props.children}
  </div>
);

export default modal;
