import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

export const sendNotification = (request, response) => {
  const options = {
    method: "POST",
    url: "https://onesignal.com/api/v1/notifications",
    params: { app_id: "e4a9b913-d9a6-44b5-aac9-4ae022e599d4" },
    headers: {
      cookie:
        "__cf_bm=zHfLDveHas5NSFQei9hTeVyXtIES8x2oYPG91NHpbPE-1716543901-1.0.1.1-io3CgWaGg.5lW1wHYlC0.tRUx0xzBJvG.4PEYe0OtnoSq06fODda8UUjghLwm_TKjN_DW5c2rPPGb4P_Z7rswg",
      "Content-Type": "application/json",
      // "User-Agent": "insomnia/9.1.1",
      Authorization: "Basic MmEwNDc3ZWEtYjJhMC00MjBhLTk4ZjctMzY2MzM5MmM5N2Iw",
    },
    data: {
      included_segments: ["Subscribed Users"],
      contents: { en: "Notification from NodeJS" },
      include_aliases: {
        onesignal_id: ["77feae12-024f-482c-94b1-463393662d8d"],
      },
      target_channel: "push",
    },
  };

  axios
    .request(options)
    .then((res) => {
      response.send(res.data);
    })
    .catch(function (error) {
      response.send(400).json({ fail: error });
    });
};
