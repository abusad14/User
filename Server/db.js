// const mongoose = require("mongoose");
// require("dotenv").config();

// const MONGO_URI = process.env.MONGO_URI;

// const connectDb = async () => {
//   try {
//     await mongoose.connect(MONGO_URI);
//     console.log("Database is connected successfully");
//   } catch (error) {
//     console.log("Database connection error", error);
//   }
// };
// module.exports = connectDb;
const mongoose = require("mongoose");
require("dotenv").config();
const MONGO_URI = process.env.MONGO_URI;

const connectDb = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Database is connected");
  } catch (error) {
    console.log("Database connection error", error);
  }
};
module.exports = connectDb;
