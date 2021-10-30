const express = require("express");

const {
  createSeller,
  getAllSeller,
  getSeller,
} = require("../controllers/seller");

const router = express.Router();

router.route("/").get(getAllSeller);
router.route("/:id").get(getSeller);
router.route("/signup").post(createSeller);

module.exports = router;
