const asyncHandler = require("../middlewares/aysnc");
const ErrorHandler = require("../middlewares/error");
const Product = require("../models/Product");

//@desc Create A Seller
//Route /api/product/create/:sellerId
exports.createProduct = asyncHandler(async (req, res, next) => {
  let sellerId = req.params.sellerId;
  let product = await Product.create({ ...req.body, seller: sellerId });
  res.status(200).json({
    success: true,
    message: `Product Added To the Seller with id ${sellerId}`,
    productDetails: product,
  });
});

//@desc Get All Seller
//Route /api/product
exports.getAllProduct = asyncHandler(async (req, res, next) => {
  let seller = await Product.find();
  res.status(200).json({ success: true, data: seller });
});

//@desc Get Product By Product ID
//Route /api/product/:id
exports.getProduct = asyncHandler(async (req, res, next) => {
  let seller = await Product.findById(req.params.id);
  res.status(200).json({ success: true, data: seller });
});
