import React, { Component } from "react";

import axios from "../../axios-orders";
import Order from "../../components/Order/Order";
import withErrorHandlerer from "../../hoc/withErrorHandler/withErrorHandler";

class Orders extends Component {
  state = {
    orders: [],
    loading: true,
  };

  componentDidMount() {
    axios
      .get("/orders.json")
      .then((res) => {
        const fecthedOrders = [];
        for (let key in res.data) {
          fecthedOrders.push({ ...res.data[key], id: key });
        }
        this.setState({ loading: false, orders: fecthedOrders });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ loading: false });
      });
  }

  render() {
    return (
      <div>
        {this.state.orders.map((order) => (
          <Order
            ingredients={order.ingredients}
            price={order.price}
            key={order.id}
          />
        ))}
      </div>
    );
  }
}

export default withErrorHandlerer(Orders, axios);
