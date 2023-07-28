const express = require("express");
const jsonServer = require("json-server");
const cors = require("cors");
const low = require("lowdb");
const bcrypt = require("bcrypt");
const FileSync = require("lowdb/adapters/FileSync");

const app = express();
app.use(express.json());
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

app.use("/api", router);
app.use(middlewares);
app.use(cors());

const adapter = new FileSync("db.json");
const db = low(adapter);

app.post("/register", async (req, res) => {
  const {
    phoneNumber,
    email,
    password,
    confirmPassword,
    username,
    ...account
  } = req.body;
  if (password !== confirmPassword) {
    return res.status(400).json({ error: "Confirm password does not match" });
  }
  const existingUser = db.get("account").find({ username }).value();
  if (existingUser) {
    return res.status(400).json({ error: "Username already exists" });
  }
  const existingEmail = db.get("account").find({ email }).value();
  if (existingEmail) {
    return res.status(400).json({ error: "Email already exists" });
  }
  const existingPhone = db.get("account").find({ phoneNumber }).value();
  if (existingPhone) {
    return res.status(400).json({ error: "Phone number already exists" });
  }
  delete account.confirmPassword;
  const hashedPassword = await bcrypt.hash(password, 10);
  account.username = username;
  account.phoneNumber = phoneNumber;
  account.password = hashedPassword;
  account.email = email;
  db.get("account").push(account).write();
  res.status(200).json({ account });
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = db.get("account").find({ username }).value();
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (isPasswordValid) {
    res.status(200).json({ message: "Login successful", user });
  } else {
    res.status(401).json({ error: "Invalid password" });
  }
});

app.put("/update", (req, res) => {
  const { fullName, schools, username, email } = req.body;
  const userToUpdate = db.get("account").find({ username }).value();
  if (!userToUpdate) {
    return res.status(404).json({ error: "User not found" });
  }
  const hasChanges =
    fullName !== userToUpdate.fullName ||
    schools !== userToUpdate.schools ||
    email !== userToUpdate.email;
  if (!hasChanges) {
    return res
      .status(200)
      .json({ message: "User not change", user: userToUpdate });
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
  db.get("account").find({ username }).assign(userToUpdate).write();
  res
    .status(200)
    .json({ message: "User updated successfully", user: userToUpdate });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
