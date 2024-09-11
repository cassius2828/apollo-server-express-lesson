const orderModel = require("./orders.models");

module.exports = {
  Query: {
    orders: () => {
      return orderModel.getAllOrders();
    },
  },
};
