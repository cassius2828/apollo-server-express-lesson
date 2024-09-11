const productModel = require("./products.models");

module.exports = {
  Query: {
    products: () => {
      return productModel.getAllProducts();
    },
    productsByPrice: (_, args) => {
      return productModel.getProductsByPrice(args.min, args.max);
    },
    product: () => {
      return productModel.getProductById(_, args.id);
    },
  },
  Mutation: {
    addNewProduct: (_, args) => {
      return productModel.addNewProduct(args.id, args.description, args.price);
    },
    addNewProductReview: (_, args) => {
      return productModel.addNewProductReview(
        args.id,
        args.rating,
        args.comment
      );
    },
  },
};
