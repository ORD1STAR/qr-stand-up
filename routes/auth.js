const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/auth.js");
router.get("/login");

router.post("/login", loginUser);
router.post("/register", registerUser);

module.exports = router;
