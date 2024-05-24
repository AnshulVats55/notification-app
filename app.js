import express from "express";
import cors from "cors";
import { sendNotification } from "./db.js";

const app = express();
app.use(cors());
app.listen(4000, () => {
  console.log("server up");
});

app.get("/api/notification", sendNotification);
