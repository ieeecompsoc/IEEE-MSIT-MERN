const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');

//@description     Register new user
//@route           POST /api/user/signup
//@access          Public
const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({
      message: "Please enter all the feilds"
    });
    // throw new Error("Please Enter all the Feilds");
  }

  let userExists;
  try {
    userExists = await User.findOne({ email: email });
  } catch (error) {
    return res.status(500).json({
      message: "signing up failed please try again later"
    })
  }

  if (userExists) {
    return res.status(422).json({
      message: "user already exists"
    })
    // throw new Error("User already exists");
  }

  let hashedPassword;
  try {
    hashedPassword = await bcrypt.hash(password, 12);
  } catch (err) {
    return res.status(500).json(
      'Could not create user, please try again.'
    );
  }

  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  });

  try {
    await user.save();
  } catch (error) {
    return res.status(500).json(
      'Could not create user, please try again.'
    );
  }

  let token;
  try {
    token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
    );
  } catch (error) {
    return res.status(500).json(
      'Could not create user, please try again.'
    );
  }

  res.status(201).json({
    _id: user._id,
    username: user.username,
    email: user.email,
    token: token,
  });
};

//@description     Auth the user
//@route           POST /api/user/login
//@access          Public
const authUser = async (req, res) => {
  const { email, password } = req.body;

  let user
  try {
    user = await User.findOne({ email });
  } catch (error) {
    return res.status(500).json('Logging in failed, please try again later.');
  }

  if (!user) {
    return res.status(403).json('Invalid username or password');
  }

  let isValidPassword;

  try {
    isValidPassword = await bcrypt.compare(password, user.password);
  } catch (error) {
    return res.status(500).json('Could not log you in.');
  }

  if (!isValidPassword) {
    return res.status(403).json('Invalid username or password');
  }

  let token;
  try {
    token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
    );
  } catch (error) {
    return res.status(500).json(
      'log in failed, please try again.'
    );
  }

  res.json({
    _id: user._id,
    email: user.email,
    token: token,
  });
};

module.exports = { registerUser, authUser };