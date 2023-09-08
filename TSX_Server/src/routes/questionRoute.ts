import express from "express";
import * as questionController from "../controllers/questionController";

const router = express.Router();

router.post("/question", questionController.createQuestion);

export default router;
