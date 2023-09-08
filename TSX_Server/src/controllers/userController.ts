import {Request, Response} from "express";
import jwt from "jsonwebtoken";
import * as userService from "../services/userService";
import * as authService from "../services/authService";

// const secretKey = process.env.SECRET_KEY! as string;
const updateProfile = async (req: Request, res: Response) => {
  const { fullName, schools, email } = req.body;
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const user = jwt.verify(
      token,
      process.env.SECRET_KEY! as string,
    ) as authService.TokenPayload;
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
    // @ts-ignore
    res.status(401).json({ message: "Can not update", status: error.status });
  }
};

const logout = (req: Request, res: Response) => {
  res.status(200).clearCookie("token").json({ message: "Logout successful" });
};

export { updateProfile, logout };
