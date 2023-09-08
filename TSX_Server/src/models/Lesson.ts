import mongoose, { Document, Schema } from "mongoose";

export interface Lesson extends Document {
  nameLesson: string;
  levelNhanBiet: number;
  levelThongHieu: number;
  levelVanDung: number;
  questions: Schema.Types.ObjectId[];
}

const LessonSchema = new Schema<Lesson>({
  nameLesson: { type: String, required: true },
  levelNhanBiet: { type: Number, required: true },
  levelThongHieu: { type: Number, required: true },
  levelVanDung: { type: Number, required: true },
  questions: [{ type: Schema.Types.ObjectId, ref: "Question" }],
});

const LessonModel = mongoose.model<Lesson>("Lesson", LessonSchema);

export default LessonModel;
