const mongoose = require("mongoose");

const SellerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please Add a Name"],
    },

    email: {
      type: String,
      required: [true, "Please Add An Email"],
      unique: true,
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please Add A valid Email",
      ],
    },

    password: {
      type: String,
      required: [true, "Please add a Password"],
      minlength: 6,
      select: false,
    },

    createdAt: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

//Reverse Populate with virtuals
SellerSchema.virtual("products", {
  ref: "Product",
  localField: "_id",
  foreignField: "seller",
  justOne: false,
});

module.exports = mongoose.model("Seller", SellerSchema);
