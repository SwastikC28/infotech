const express = require("express");

const {
  createProduct,
  getAllProduct,
  getProduct,
} = require("../controllers/product");

const router = express.Router();

router.route("/").get(getAllProduct);
router.route("/:id").get(getProduct);

router.route("/create/:sellerId").post(createProduct);

module.exports = router;
