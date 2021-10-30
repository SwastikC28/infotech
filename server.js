const express = require("express");
const dotenv = require("dotenv");

const connectDB = require("./config/db");
const colors = require("colors");
const errorHandler = require("./middlewares/error.js");
const path = require("path");

//Load env vars
dotenv.config({ path: "./config/config.env" });

//Routing Files
const auth = require("./routes/auth");
const product = require("./routes/product");
const seller = require("./routes/seller");

//Connecting Database
connectDB();

const app = express();

//Body-Parser
app.use(express.json());

//Mounting Routers
app.use("/api/infotech/seller", seller);
app.use("/api/infotech/product", product);
app.use("/api/infotech/customer", auth);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`.yellow.bold);
});
