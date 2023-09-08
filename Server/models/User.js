const mongoose = require('mongoose');
const {Schema} = mongoose;

const UserSchema = new Schema({
  fullName: { type: String, required: true },
  schools: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
