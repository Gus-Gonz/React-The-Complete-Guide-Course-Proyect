import React, { Component } from "react";

import Button from "../../../components/Ui/Button/Button";
import Spinner from "../../../components/Ui/Spinner/Spinner";
import axios from "../../../axios-orders";
import Input from "../../../components/Ui/Input/Input";

import "./ContactData.css";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: "",
    },
    loading: false,
  };

  orderHandler = (event) => {
    console.log("inside ContactData " + this.props.price);
    event.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: parseFloat(this.props.price).toFixed(2),
      customer: {
        name: "GusGonz",
        address: {
          street: "TestStreet 1",
          zipCode: "41351",
          country: "Germany",
        },
        email: "Test@Test.com",
      },
      deliveryMethod: "fastest",
    };
    axios.post("/orders.json", order).then(
      (response) => {
        this.setState({ loading: false });
        this.props.history.push("/");
      },
      (error) => {
        this.setState({ loading: false });
      }
    );
  };

  render() {
    let form = (
      <form>
        <Input
          inputtype="input"
          type="text"
          name="name"
          placeholder="Your Name"></Input>
        <Input
          inputtype="input"
          type="email"
          name="email"
          placeholder="Your Email"></Input>
        <Input
          inputtype="input"
          type="text"
          name="street"
          placeholder="Street"></Input>
        <Input
          inputtype="input"
          type="text"
          name="postal"
          placeholder="Postal Code"></Input>
        <Button btnType="Success" clicked={this.orderHandler}>
          {" "}
          ORDER{" "}
        </Button>
      </form>
    );

    if (this.state.loading) {
      form = <Spinner />;
    }

    return (
      <div className="ContactData">
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
