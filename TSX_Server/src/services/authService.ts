import User from "../models/User";
import jwt from "jsonwebtoken";
import cryptoJS from "crypto-js";

interface UserData {
  fullName: string;
  email: string;
  phoneNumber: string;
  schools: string;
  username: string;
  password: string;
  confirmPassword: string;
}

interface TokenPayload {
  _id: string;
  username: string;
  email: string;
  fullName: string;
  phoneNumber: string;
  schools: string;
  iat: number;
}

enum REGISTER_STATUS {
  SUCCESS = 4,
  USERNAME_EXIST = 5,
  EMAIL_EXIST = 6,
  PHONE_NUMBER_EXIST = 7,
  INVALID_INPUT_REGISTER = 22,
}

enum LOGIN_STATUS {
  SUCCESS = 1,
  USERNAME_NOT_FOUND = 2,
  WRONG_PASSWORD = 3,
  INVALID_INPUT_LOGIN = 21,
}

const register = async (userData: UserData) => {
  const {
    fullName,
    email,
    phoneNumber,
    schools,
    username,
    password,
    confirmPassword,
  } = userData;
  console.log(userData);
  if (
    !fullName ||
    !email ||
    !phoneNumber ||
    !schools ||
    !username ||
    !password ||
    !confirmPassword
  ) {
    throw { status: REGISTER_STATUS.INVALID_INPUT_REGISTER };
  }
  if (username.length < 8) {
    throw { status: REGISTER_STATUS.INVALID_INPUT_REGISTER };
  }
  if (!/^0[0-9]{9}$/.test(phoneNumber)) {
    throw { status: REGISTER_STATUS.INVALID_INPUT_REGISTER };
  }
  if (!/^[\p{L}\p{M}\s]*$/u.test(fullName)) {
    throw { status: REGISTER_STATUS.INVALID_INPUT_REGISTER };
  }
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    throw { status: REGISTER_STATUS.INVALID_INPUT_REGISTER };
  }
  try {
    const userExists = await User.findOne({ username });
    console.log("userExist: " + userExists);
    if (userExists) {
      throw { status: REGISTER_STATUS.USERNAME_EXIST };
    }

    const emailExists = await User.findOne({ email });
    if (emailExists) {
      throw { status: REGISTER_STATUS.EMAIL_EXIST };
    }

    const phoneNumberExists = await User.findOne({ phoneNumber });
    if (phoneNumberExists) {
      throw { status: REGISTER_STATUS.PHONE_NUMBER_EXIST };
    }

    const secretKey = process.env.SECRET_KEY!;
    const bytes = cryptoJS.AES.decrypt(password, secretKey);
    const originalPassword = bytes.toString(cryptoJS.enc.Utf8);
    const hashedPassword = cryptoJS.SHA256(originalPassword).toString();

    const user = new User({
      fullName,
      email,
      phoneNumber,
      schools,
      username,
      password: hashedPassword,
    });

    const savedUser = await user.save();
    const token = jwt.sign(
      {
        _id: savedUser._id,
        username: savedUser.username,
        email: savedUser.email,
        fullName: savedUser.fullName,
        phoneNumber: savedUser.phoneNumber,
        schools: savedUser.schools,
      } as TokenPayload,
      process.env.SECRET_KEY!,
    );

    return { user: savedUser, token, status: REGISTER_STATUS.SUCCESS };
  } catch (error) {
    console.log(typeof error);
    // @ts-ignore
    throw { error, status: error.status };
  }
};

const login = async (username: string, password: string) => {
  if (!username || !password) {
    throw { status: LOGIN_STATUS.INVALID_INPUT_LOGIN };
  }
  if (username.length < 8) {
    throw { status: LOGIN_STATUS.INVALID_INPUT_LOGIN };
  }

  const user = await User.findOne({ username });

  if (!user) {
    throw { status: LOGIN_STATUS.USERNAME_NOT_FOUND };
  }

  const secretKey = process.env.SECRET_KEY!;
  const bytes = cryptoJS.AES.decrypt(password, secretKey);
  const originalPassword = bytes.toString(cryptoJS.enc.Utf8);

  const hashedPassword = cryptoJS.SHA256(originalPassword).toString();

  if (hashedPassword !== user.password) {
    throw { status: LOGIN_STATUS.WRONG_PASSWORD };
  }

  const token = jwt.sign(
    {
      _id: user._id,
      username: user.username,
      email: user.email,
      fullName: user.fullName,
      phoneNumber: user.phoneNumber,
      schools: user.schools,
    } as TokenPayload,
    process.env.SECRET_KEY!,
  );

  return { user, token, status: LOGIN_STATUS.SUCCESS };
};

export { register, login, TokenPayload };
