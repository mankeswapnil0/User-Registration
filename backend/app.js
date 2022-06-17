const express = require("express");
// const connectDB = require("./config/db");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

// require('dotenv').config({path:"config/test.env"});
// connectDB();

const user = require("./routes/userRoutes");
app.use("/api/v1", user);

module.exports = app;