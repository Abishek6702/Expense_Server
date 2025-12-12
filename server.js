const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const fs = require("fs");
const path = require("path");
const connectDB = require("./config/db");
dotenv.config();

const app = express();

connectDB();
app.use(express.json());

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
