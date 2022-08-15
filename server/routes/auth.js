const express = require("express");
const {
  registerUser,
  authUser,
} = require("../controllers/auth.controller");

const router = express.Router();

// url/api/user
router.post("/signup", registerUser);
router.post("/login", authUser);

module.exports = router;