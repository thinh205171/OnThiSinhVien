const User = require("../models/User");
const jwt = require("jsonwebtoken");
const cryptoJS = require("crypto-js");

const REGISTER_STATUS = {
  SUCCESS: 4,
  USERNAME_EXIST: 5,
  EMAIL_EXIST: 6,
  PHONE_NUMBER_EXIST: 7,
};

const LOGIN_STATUS = {
  SUCCESS: 1,
  USERNAME_NOT_FOUND: 2,
  WRONG_PASSWORD: 3,
};

const register = async (userData) => {
  const { fullName, email, phoneNumber, schools, username, password } =
    userData;

  try {
    const userExists = await User.findOne({ username });
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

    const secretKey = process.env.SECRET_KEY;
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
      },
      process.env.SECRET_KEY,
    );

    return { user: savedUser, token, status: REGISTER_STATUS.SUCCESS };
  } catch (error) {
    throw { error, status: error.status };
  }
};

const login = async (username, password) => {
  const user = await User.findOne({ username });

  if (!user) {
    throw { status: LOGIN_STATUS.USERNAME_NOT_FOUND };
  }

  const secretKey = process.env.SECRET_KEY;
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
    },
    process.env.SECRET_KEY,
  );

  return { user, token, status: LOGIN_STATUS.SUCCESS };
};

module.exports = { register, login };
