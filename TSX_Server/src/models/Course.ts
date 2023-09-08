import mongoose, { Document, Schema } from "mongoose";

interface Course extends Document {
  imageSrc: string;
  nameCourse: string;
  overview: string;
  descriptionDetail: string;
  price: string;
  totalMember: number;
  amountLesson: number;
  language: string;
  lesson: Schema.Types.ObjectId[];
}

const CourseSchema = new Schema<Course>({
  imageSrc: { type: String, required: true },
  nameCourse: { type: String, required: true },
  overview: { type: String, required: true },
  descriptionDetail: { type: String, required: true },
  price: { type: String, required: true },
  totalMember: { type: Number, required: true },
  amountLesson: { type: Number, required: true },
  language: String,
  lesson: [{ type: Schema.Types.ObjectId, ref: "Lesson" }],
});

const CourseModel = mongoose.model<Course>("Course", CourseSchema);

export default CourseModel;
