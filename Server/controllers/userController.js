const User = require("../models/User");
const userService = require("../services/userService");
const jwt = require("jsonwebtoken");

const updateProfile = async (req, res) => {
  const { fullName, schools, username, email } = req.body;
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const user = jwt.verify(token, process.env.SECRET_KEY);
    const { updatedUser, newToken, status } = await userService.updateProfile(
      user._id,
      {
        fullName,
        schools,
        email,
      },
    );

    res
      .status(200)
      .cookie("token", newToken, {
        sameSite: "strict",
        httpOnly: true,
        secure: false,
        maxAge: 7200000,
      })
      .json({
        message: "User updated successfully",
        updatedUser,
        newToken,
        status,
      });
  } catch (error) {
    console.log("Error during update:", error);
    res.status(401).json({ massage: "Can not update", status: error.status });
  }
};

const logout = (req, res) => {
  res.status(200).clearCookie("token").json({ message: "Logout successful" });
};

module.exports = { updateProfile, logout };
