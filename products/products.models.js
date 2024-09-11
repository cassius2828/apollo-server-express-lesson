const products = [
  {
    id: "4678213",
    description: "Red Shoe",
    price: 45.99,
    reviews: [],
  },
  {
    id: "43214",
    description: "Blue Jeans",
    price: 122.58,
    reviews: [],
  },
];

const getAllProducts = () => {
  return products;
};

const getProductsByPrice = (min, max) => {
  return products.filter(
    (product) => product.price >= min && product.price <= max
  );
};

const getProductById = (id) => {
  return products.find((product) => product.id === id);
};

const addNewProduct = (id, description, price) => {
  const newProduct = {
    id,
    description,
    price,
  };
  products.push(newProduct);
  return newProduct;
};

const addNewProductReview = (id, rating, comment) => {
  const product = getProductById(id);
  const newReview = {
    rating,
    comment,
  };
  product.reviews?.push(newReview);
};

module.exports = {
  getAllProducts,
  addNewProduct,
  getProductById,
  getProductsByPrice,
  addNewProductReview,
};
