import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import express from "express";
import connectDb from "./src/db/db.js";
import { router } from "./src/routes/route.js";

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", router);

app.listen(8000, async () => {
  await connectDb("mongodb://127.0.0.1/mini");
  console.log("server: http://localhost:8000");
});
