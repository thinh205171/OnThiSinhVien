import { Request, Response } from "express";
import * as questionService from "../services/questionService";

const createQuestion = async (req: Request, res: Response) => {
  try {
    const questionData = req.body;
    const newQuestion = await questionService.createQuestion(questionData);
    res
      .status(201)
      .json({ message: "Question created", question: newQuestion });
  } catch (error) {
    res.status(500).json({ error: "Could not create question" });
  }
};

export { createQuestion };
