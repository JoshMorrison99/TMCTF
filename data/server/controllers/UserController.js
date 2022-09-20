const User = require("../models/UserModel");

const Login = async (req, res) => {
  console.log("login");
  console.log(req.body);
  let user = await User.findOne({ username: req.body.username });
  if (!user) {
    console.log("[!] Error: User does not exist!");
    res.status(400);
    res.send({ message: "user does not exist" });
  } else {
    // check if password is correct
    let password = await User.findOne({ password: req.body.password });
    if (password != null) {
      console.log("[+] User correct password");
      res.send(user);
    } else {
      console.log("[!] User incorrect password");
      res.status(401);
      res.send({ message: "user password incorrect" });
    }
  }
};

module.exports = Login;
