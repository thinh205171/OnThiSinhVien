import mongoose, { Document, Schema } from "mongoose";

interface Question extends Document {
  questionTitle: string;
  level: string;
  answerA: string;
  answerB: string;
  answerC: string;
  answerD: string;
  correctAnswer: number;
}

const QuestionSchema = new Schema<Question>({
  questionTitle: { type: String, required: true },
  level: { type: String, required: true },
  answerA: { type: String },
  answerB: { type: String },
  answerC: { type: String },
  answerD: { type: String },
  correctAnswer: { type: Number, required: true },
});

const QuestionModel = mongoose.model<Question>("Question", QuestionSchema);

export default QuestionModel;
