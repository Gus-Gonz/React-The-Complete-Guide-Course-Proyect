import React from "react";

import Burger from "../../Burger/Burger";
import Button from "../../Ui/Button/Button";

import "./CheckOutSummary.css";

const CheckoutSummary = (props) => {
  return (
    <div className={"CheckoutSummary"}>
      <h1>We hope it taste well!!</h1>
      <div style={{ width: "100%", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button clicked={props.checkOutCancelled} btnType="Danger">
        CANCEL
      </Button>
      <Button clicked={props.checkOutContinued} btnType="Success">
        CONTINUE
      </Button>
    </div>
  );
};

export default CheckoutSummary;
