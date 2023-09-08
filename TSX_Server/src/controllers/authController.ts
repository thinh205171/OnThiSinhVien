import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import * as authService from "../services/authService";

const registerController = async (req: Request, res: Response) => {
  const userData = req.body;
  try {
    const { user, token, status } = await authService.register(userData);
    res
      .status(200)
      .cookie("token", token, {
        sameSite: "strict",
        httpOnly: true,
        secure: false,
        maxAge: 7200000,
      })
      .json({ message: "User registered successfully", user, token, status });
  } catch (error) {
    res
      .status(500)
      // @ts-ignore
      .json({ error: "Could not register user", status: error.status });
  }
};

const loginController = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  console.log(username, password);

  try {
    const { user, token, status } = await authService.login(username, password);
    res
      .status(200)
      .cookie("token", token, {
        sameSite: "strict",
        httpOnly: true,
        secure: false,
        maxAge: 7200000,
      })
      .json({ message: "Login successful", user, token, status });
  } catch (error) {
    res
      .status(401)
      // @ts-ignore
      .json({ error: "Invalid credentials", status: error.status });
  }
};

const validateToken = async (req: Request, res: Response) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  try {
    const user = jwt.verify(
      token,
      process.env.SECRET_KEY! as string,
    ) as authService.TokenPayload;
    console.log(user);
    res.status(200).json({ user });
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};

export { registerController, loginController, validateToken };
