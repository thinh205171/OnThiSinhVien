// routes/userRoutes.js
const express = require("express");
const userController = require("../controllers/userController");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.put("/update", userController.updateProfile);
router.get("/logout", userController.logout);

module.exports = router;
