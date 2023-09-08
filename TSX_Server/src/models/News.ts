import mongoose, { Document, Schema } from "mongoose";

interface News extends Document {
  imgSrc: string;
  title: string;
  description: string;
  content: string;
  dateCreate: Date;
  category: Schema.Types.ObjectId;
  slug: string;
}

const NewsSchema = new Schema<News>({
  imgSrc: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  content: { type: String, required: true },
  dateCreate: { type: Date, required: true },
  slug: { type: String, required: true },
  category: { type: Schema.Types.ObjectId, ref: "Category" },
});

const NewsModel = mongoose.model<News>("News", NewsSchema);

export default NewsModel;
