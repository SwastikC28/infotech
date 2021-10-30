const express = require("express");

const {
  register,
  login,
  browseProducts,
  viewOrders,
  getAllCustomers,
  orderProducts,
} = require("../controllers/auth");

const router = express.Router();

router.route("/").get(getAllCustomers);
router.route("/login").get(login);
router.route("/register").post(register);
router.route("/products").get(browseProducts);
router.route("/:userId/order/:productId").post(orderProducts);
router.route("/orders/:id").get(viewOrders);

module.exports = router;
