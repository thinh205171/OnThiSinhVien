import Question from "../models/Question";

interface QuestionData {
  questionTitle: string;
  level: string;
  answerA: string;
  answerB: string;
  answerC: string;
  answerD: string;
  correctAnswer: number;
}

interface AnswerData {
  userAnswer: number;
}

const createQuestion = async (questionData: QuestionData) => {
  try {
    const existingQuestion = await Question.findOne({
      questionTitle: questionData.questionTitle,
    });

    if (existingQuestion) {
      throw new Error("Question already exists");
    }

    const newQuestion = new Question(questionData);
    const savedQuestion = await newQuestion.save();
    return savedQuestion.toObject();
  } catch (error) {
    throw new Error("Could not create question");
  }
};

export { createQuestion };
