import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

export const sendNotification = (request, response) => {
  const options = {
    method: "POST",
    url: "https://onesignal.com/api/v1/notifications",
    params: { app_id: "e4a9b913-d9a6-44b5-aac9-4ae022e599d4" },
    headers: {
      Authorization: "Basic MmEwNDc3ZWEtYjJhMC00MjBhLTk4ZjctMzY2MzM5MmM5N2Iw",
    },
    data: {
      included_segments: ["Subscribed Users"],
      contents: { en: "Notification from NodeJS" },
      include_aliases: {
        onesignal_id: ["77feae12-024f-482c-94b1-463393662d8d"],
      },
      target_channel: [
        "AndroidPush",
        "WindowsPush",
        "iOSPush",
        "ChromePush",
        "FirefoxPush",
        "SafariPush",
        "macOSPush",
      ],
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
