import mongoose, { Document, Schema } from "mongoose";

interface School extends Document {
  shortName: string;
  schoolName: string;
  amountCourses: number;
  courses: Schema.Types.ObjectId[];
}

const SchoolSchema = new Schema<School>({
  shortName: { type: String, required: true },
  schoolName: { type: String, required: true },
  amountCourses: { type: Number, required: true },
  courses: [{ type: Schema.Types.ObjectId, ref: "Course" }],
});

const SchoolModel = mongoose.model<School>("School", SchoolSchema);

export default SchoolModel;
