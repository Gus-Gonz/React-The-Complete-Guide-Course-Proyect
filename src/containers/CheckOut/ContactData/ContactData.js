import React, { Component } from "react";

import Button from "../../../components/Ui/Button/Button";
import "./ContactData.css";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: "",
    },
  };

  render() {
    return (
      <div className="ContactData">
        <h4>Enter your Contact Data</h4>
        <form>
          <input
            className="Input"
            type="text"
            name="name"
            placeholder="Your Name"></input>
          <input
            className="Input"
            type="email"
            name="email"
            placeholder="Your Email"></input>
          <input
            className="Input"
            type="text"
            name="street"
            placeholder="Street"></input>
          <input
            className="Input"
            type="text"
            name="postal"
            placeholder="Postal Code"></input>
          <Button btnType="Success"> ORDER </Button>
        </form>
      </div>
    );
  }
}

export default ContactData;
