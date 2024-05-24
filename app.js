import express from "express";
import cors from "cors";
import { sendNotification } from "./db.js";

const app = express();
app.use(cors());
app.listen(4000, (req, res) => {
  console.log("server up");
});
app.get("/", (req, res)=>res.send("Server running"))
app.get("/api/notification", sendNotification);
