import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";

export const purchaseBurgerSuccess = (id, orderData) => {
  return {
    type: actionTypes.PURCHASE_BURGER_SUCCESS,
    orderId: id,
    orderData: orderData,
  };
};

export const purchaseBurgerFail = (error) => {
  return {
    type: actionTypes.PURCHASE_BURGER_FAIL,
    error: error,
  };
};

export const purchaseBurgerStart = () => {
  return {
    type: actionTypes.PURCHASE_BURGER_START,
  };
};

export const purchaseBurger = (orderData, token) => {
  return (dispatch) => {
    dispatch(purchaseBurgerStart());

    axios
      .post("/orders.json?auth=" + token, orderData)
      .then((response) => {
        dispatch(purchaseBurgerSuccess(response.data.name, orderData));
      })
      .catch((error) => {
        dispatch(purchaseBurgerFail(error));
      });
  };
};

export const purchaseInit = () => {
  return {
    type: actionTypes.PURCHASE_INIT,
  };
};

export const fecthOrdersSuccess = (orders) => {
  return {
    type: actionTypes.FECTH_ORDERS_SUCCESS,
    orders: orders,
  };
};

export const fecthOrderFail = (error) => {
  return {
    type: actionTypes.FECTH_ORDERS_FAIL,
    error: error,
  };
};

export const fecthOrdersStart = () => {
  return {
    type: actionTypes.FECTH_ORDERS_START,
  };
};

export const fecthOrders = (token, userId) => {
  return (dispatch) => {
    dispatch(fecthOrdersStart());
    const queryParems =
      "?auth=" + token + `&orderBy="userId"&equalTo="` + userId + '"';
    axios
      .get("/orders.json" + queryParems)
      .then((res) => {
        const fecthedOrders = [];
        for (let key in res.data) {
          fecthedOrders.push({ ...res.data[key], id: key });
        }
        dispatch(fecthOrdersSuccess(fecthedOrders));
      })
      .catch((error) => {
        dispatch(fecthOrderFail(error));
      });
  };
};
