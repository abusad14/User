const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
const userRoutes = require("./router/userRoutes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// app.use(express.urlencoded{})

// *----------DB connection
const connectDb = require("./db");
connectDb();
// *----------

app.get("/", (req, res) => {
  res.send("This is home page");
});

// ?------using middleware
app.use("/api", userRoutes);
// ?------

const PORT = process.env.PORT;
console.log(PORT);
app.listen(PORT, console.log("Server is live on " + PORT));
