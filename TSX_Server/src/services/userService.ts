import User from "../models/User";
import jwt from "jsonwebtoken";

enum UPDATE_STATUS {
  SUCCESS = 8,
  SMT_REMAIN = 9,
  EMAIL_EXIST = 10,
}

interface NewUserData {
  fullName?: string;
  schools?: string;
  email?: string;
}

const updateProfile = async (userId: string, newData: NewUserData) => {
  const { fullName, schools, email } = newData;
  try {
    const userToUpdate = await User.findById(userId);
    if (!userToUpdate) {
      throw { error: "User not found" };
    }

    const hasChanges =
      fullName !== userToUpdate.fullName ||
      schools !== userToUpdate.schools ||
      email !== userToUpdate.email;
    console.log("Has change: " + hasChanges);
    if (!hasChanges) {
      throw { status: UPDATE_STATUS.SMT_REMAIN };
    }

    const existingEmail = await User.findOne({ email });
    if (existingEmail && existingEmail._id.toString() !== userId) {
      throw { status: UPDATE_STATUS.EMAIL_EXIST };
    }

    if (fullName) {
      userToUpdate.fullName = fullName;
    }
    if (schools) {
      userToUpdate.schools = schools;
    }
    if (email) {
      userToUpdate.email = email;
    }

    await userToUpdate.save();

    const token = jwt.sign(
      {
        _id: userToUpdate._id,
        username: userToUpdate.username,
        email: userToUpdate.email,
        fullName: userToUpdate.fullName,
        phoneNumber: userToUpdate.phoneNumber,
        schools: userToUpdate.schools,
      },
      process.env.SECRET_KEY!,
    );

    return {
      updatedUser: userToUpdate,
      newToken: token,
      status: UPDATE_STATUS.SUCCESS,
    };
  } catch (error) {
    // @ts-ignore
    throw { status: error.status };
  }
};

export { updateProfile };
