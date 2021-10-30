const mongoose = require("mongoose");
const bcrpyt = require("bcryptjs");
const CustomerSchema = new mongoose.Schema({
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

  orders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});



module.exports = mongoose.model("User", CustomerSchema);
