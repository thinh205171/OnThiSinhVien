import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import authRoute from "./routes/authRoute";
import userRoute from "./routes/userRoute";
import questionRoute from "./routes/questionRoute";
import newsRoute from "./routes/newsRoute";

require("dotenv").config();

mongoose.set("strictQuery", true);

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

mongoose.connect(process.env.MONGO_URL! as string).then((r) => {
  console.log("Connect database successfully");
});

const port = process.env.PORT || 3000;

app.use("/auth", authRoute);
app.use("/user", userRoute);
app.use("/ques", questionRoute);
app.use("/", newsRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
