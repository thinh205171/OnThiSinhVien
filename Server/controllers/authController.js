const authService = require("../services/authService");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
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
      .json({ error: "Could not register user", status: error.status });
  }
};

const login = async (req, res) => {
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
      .json({ error: "Invalid credentials", status: error.status });
  }
};

const validateToken = async (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  try {
    const user = jwt.verify(token, process.env.SECRET_KEY);
    res.status(200).json({ user });
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = { register, login, validateToken };
