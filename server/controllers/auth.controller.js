const User = require("../models/User");
const generateToken = require("../config/generateToken");

//@description     Register new user
//@route           POST /api/user/
//@access          Public
const registerUser = async (req, res) => {
  const { username, email, password, usertype } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({
        message: "Please enter all the feilds"
    });
    // throw new Error("Please Enter all the Feilds");
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    return res.status(400).json({
        message: "user already exists"
    })
    // throw new Error("User already exists");
  }

  const user = await User.create({
    username,
    email,
    password,
    usertype
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    return res.status(400).json({
        message: "User not found"
    });
    // throw new Error("User not found");
  }
};

//@description     Auth the user
//@route           POST /api/user/login
//@access          Public
const authUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      username: user.username,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    return res.status(401).json({
        message: "Invalid Email or password"
    });
    // throw new Error("Invalid Email or Password");
  }
};

module.exports = { registerUser, authUser };