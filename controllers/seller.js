const asyncHandler = require("../middlewares/aysnc");
const ErrorHandler = require("../middlewares/error");
const Seller = require("../models/Seller");

//@desc Create A Seller
//Route /api/seller/signup
exports.createSeller = asyncHandler(async (req, res, next) => {
  const seller = await Seller.create(req.body);

  res.status(200).json({
    success: true,
    message: "Account Created Successfully",
    data: seller,
  });
});

//@desc Get All Seller
//Route /api/infotech/seller
exports.getAllSeller = asyncHandler(async (req, res, next) => {
  const seller = await Seller.find().populate({ path: "products" });
  res.status(200).json({ success: true, data: seller });
});

//@desc Get Seller By ID
//Route /api/infotech/seller/:id
exports.getSeller = asyncHandler(async (req, res, next) => {
  const seller = await Seller.findById(req.params.id).populate({
    path: "products",
  });
  res.status(200).json({ success: true, data: seller });
});
