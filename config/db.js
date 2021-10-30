const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const connectDB = async () => {
  const conn = await mongoose.connect(`${process.env.MONGO_URL}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to Database Successfully".green);
};

module.exports = connectDB;
