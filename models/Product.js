const mongoose = require("mongoose");

const ProductSchemna = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide name of the product"],
    },

    description: {
      type: String,
      required: [true, "Please provide description of the product"],
    },
    price: {
      type: Number,
      required: [true, "Please provide the cost of the product"],
    },

    seller: {
      type: mongoose.Schema.ObjectId,
      ref: "Seller",
      required: true,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

module.exports = mongoose.model("Product", ProductSchemna);
