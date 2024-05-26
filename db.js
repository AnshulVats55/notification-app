import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

export const sendNotification = (request, response) => {
  const options = {
    method: "POST",
    url: "https://onesignal.com/api/v1/notifications",
    params: { app_id: "af11bec5-a1fb-4416-a259-cd9e4d16d626" },
    headers: {
      Authorization: "Basic NjU5YTQxODQtN2E2ZS00MWIyLThjYWUtNWE2ZTAyNDMzMDMx",
    },
    data: {
      included_segments: ["Subscribed Users"],
      contents: { en: "New notification from NodeJS" },
      include_aliases: {
        onesignal_id: ["c25979cc-2728-4363-862a-25c64cc64b42"],
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
