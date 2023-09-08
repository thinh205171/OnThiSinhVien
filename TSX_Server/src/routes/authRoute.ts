// routes/authRoutes.js
import express from "express";
import * as authController from "../controllers/authController";

const router = express.Router();

router.post("/register", authController.registerController);
router.post("/login", authController.loginController);
router.get("/validate-token", authController.validateToken);

export default router;
