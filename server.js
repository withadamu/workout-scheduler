const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.DB_URI;
mongoose.connect(uri, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Database connection established");
});

const exerciseRoute = require('./routes/exercise');
const userRoute = require('./routes/user');

app.use('/exercise', exerciseRoute);
app.use('/users', userRoute);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});