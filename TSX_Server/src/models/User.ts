import mongoose, { Document, Schema } from "mongoose";

interface User extends Document {
  fullName: string;
  schools: string;
  username: string;
  phoneNumber: string;
  password: string;
  email: string;
}

const UserSchema = new Schema<User>({
  fullName: { type: String, required: true },
  schools: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});

const UserModel = mongoose.model<User>("User", UserSchema);

export default UserModel;
