import express from "express";
import cors from "cors";
import { sendNotification } from "./db.js";

const app = express();
app.use(cors());
app.listen(4000, (req, res) => {
  console.log("server up");
  res.send("Server Up")
});

app.get("/api/notification", sendNotification);
