const orders = [
  {
    date: "2005-05-05",
    subtotal: 91.98,
    items: [
      {
        product: {
          id: "redshoe",
          description: "Old Red Shoe",
          price: 37.99,
        },
        quantity: 2,
      },
    ],
  },
];

const getAllOrders = () => {
  return orders;
};

module.exports = {
  getAllOrders,
};
