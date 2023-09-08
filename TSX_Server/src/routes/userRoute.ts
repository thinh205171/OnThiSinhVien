// routes/userRoutes.js
import express from "express";
import * as userController from "../controllers/userController";

const router = express.Router();

router.put("/update", userController.updateProfile);
router.get("/logout", userController.logout);

export default router;
