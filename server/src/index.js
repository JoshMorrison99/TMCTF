const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const Login = require("../controllers/UserController");
const User = require("../models/UserModel");

const app = express();
const port = 5000;

const addAdmin = () => {
  // Add default users
  const adminUser = new User({
    username: "admin",
    password: "nosqli123!",
  });

  adminUser.save((err) => {
    if (err) {
      console.log("err creating default user");
    } else {
      console.log("save successful");
    }
  });
};

const main = async () => {
  // Parse JSON
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  // Connect to MongoDB
  mongoose.connect("mongodb://localhost:27017/trendy", (err) => {
    if (err) {
      console.log(err.message);
    } else {
      console.log("Successfully Connected!");
    }
  });

  // Cors Configuration
  app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    })
  );

  addAdmin();

  app.post("/login", (req, res) => {
    Login(req, res);
  });

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
};

main().catch((err) => {
  console.error(err);
});
