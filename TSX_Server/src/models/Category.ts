import mongoose, { Document, Schema } from "mongoose";

interface Category extends Document {
  cateName: string;
  slug: string;
}

const CateSchema = new Schema<Category>({
  cateName: { type: String, required: true },
  slug: { type: String, required: true },
});

const CateModel = mongoose.model<Category>("Category", CateSchema);

export default CateModel;
