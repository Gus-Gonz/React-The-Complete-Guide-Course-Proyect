import React, { Component } from "react";

import CheckoutSummary from "../../components/Order/CheckOutSummary/CheckOutSummary";

class Checkout extends Component {
  state = {
    ingredients: {
      salad: 1,
      meat: 1,
      cheese: 1,
      bacon: 1,
    },
  };

  checkOutCancelledHandler = () => {
    this.props.history.goBack();
  };

  checkOutContinuedHandler = () => {
    this.props.history.replace("/checkout/contact-data");
  };

  render() {
    return (
      <div>
        <CheckoutSummary
          checkOutContinued={this.checkOutContinuedHandler}
          checkOutCancelled={this.checkOutCancelledHandler}
          ingredients={this.state.ingredients}
        />
      </div>
    );
  }
}

export default Checkout;
