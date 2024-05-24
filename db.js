import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

export const sendNotification = (request, response) => {
  const options = {
    method: "POST",
    url: "https://onesignal.com/api/v1/notifications?",
    params: { app_id: "9a37f401-19dd-4edc-afe7-a666b14c6ff6" },
    headers: {
      cookie:
        "__cf_bm=zHfLDveHas5NSFQei9hTeVyXtIES8x2oYPG91NHpbPE-1716543901-1.0.1.1-io3CgWaGg.5lW1wHYlC0.tRUx0xzBJvG.4PEYe0OtnoSq06fODda8UUjghLwm_TKjN_DW5c2rPPGb4P_Z7rswg",
      "Content-Type": "application/json",
      "User-Agent": "insomnia/9.1.1",
      Authorization: "Basic Mzg0NTY3MDktMDhlNy00YTk3LThjZjItMWU1MGVjMzE4ZTk0",
    },
    data: {
      included_segments: ["Subscribed Users"],
      contents: { en: "From Node" },
      include_aliases: {
        onesignal_id: ["2d4e9a8f-e53a-4e01-8764-3ad5bbb4cea9"],
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
