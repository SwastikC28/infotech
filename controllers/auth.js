const asyncHandler = require("../middlewares/aysnc");
const ErrorResponse = require("../utils/errorResponse");
const Customer = require("../models/Customer");
const Product = require("../models/Product");

//@desc Register User
//@route POST /api/v1/auth/register
//@access Public
exports.register = asyncHandler(async (req, res, next) => {
  const customer = await Customer.create(req.body);
  res.status(200).json({ success: true, data: customer });
});



//@desc Browse Products
//@route Get /api/infotech/auth/products
//@access Public
exports.browseProducts = asyncHandler(async (req, res, next) => {
  const products = await Product.find();
  res.status(200).json({ success: true, data: products });
});

//@desc Order Products
//@route Get /api/infotech/customer/:userId/order/:productId
//@access Public
exports.orderProducts = asyncHandler(async (req, res, next) => {
  const product = await Product.findById(req.params.productId);
  const customer = await Customer.updateOne(
    { id: req.params.userId },
    { $push: { orders: product } }
  );
  res.status(200).json({ data: "Data", success: true });
});

//@desc View Orders
//@route Get /api/infotech/customer/orders/:id
//@access Public
exports.viewOrders = asyncHandler(async (req, res, next) => {
  const customer = await Customer.findById(req.params.id).populate({
    path: "orders",
  });
  const orders = customer.orders;
  res.status(200).json({ success: true, orders: orders });
});

//@desc Get All Customers
//@route Get /api/infotech/customer
//@access Public
exports.getAllCustomers = asyncHandler(async (req, res, next) => {
  const customer = await Customer.find().populate({
    path: "orders",
    select: "name description price seller",
  });
  res.status(200).json({ success: true, data: customer });
});
