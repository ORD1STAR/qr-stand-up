const User = require("../models/user.js");

exports.registerUser = async (req, res) => {
  try {
    const { email, username, Password } = req.body;
    const user = new User({ email, username, Password });
    await user.save();
    if (!user) throw new Error("could not create a user");
    res.status(200).json({ user: user, message: "created and success" });
  } catch (error) {
    res
      .status(400)
      .json({ message: "error in register controller", error: error.message });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { username, Password } = req.body;
    const user = await User.findOne({ username });
    console.log(user);
    if (user.Password === Password) {
      const { Password, ...temp } = user._doc;
      res.status(200).json(temp);
    } else {
      res.status(403).json("wrong passwords");
    }
  } catch (error) {
    res.status(400).json("error when a user tried to log in");
  }
};
