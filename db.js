import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const sendNotification = async () => {
  //   const url = `https://onesignal.com/api/v1/notifications?app_id=${app_id}`;
  //   const data = {
  //     included_segments: ["Subscribed Users"],
  //     contents: {
  //       en: "NodeJS 1",
  //     },
  //     include_aliases: {
  //       onesignal_id: ["2d4e9a8f-e53a-4e01-8764-3ad5bbb4cea9"],
  //     },
  //     
  //   };target_channel: "push",

  //   const headers = {
  //     Authorization: `Basic ${api_key}`,
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //     referrerPolicy: "no-referrer",
  //     mode: "no-mode",
  //     "Access-Control-Allow-Origin": "*",
  //   };

  //   try {
  //     const response = await axios.post(url, data, { headers });
  //     console.log("Notification sent successfully:", response.data);
  //   } catch (error) {
  //     console.error(
  //       "Error sending notification:",
  //       error.response ? error.response.data : error.message
  //     );
  //   }
  // const options = {
  //   method: "POST",
  //   url: "https://onesignal.com/api/v1/notifications",
  //   params: { "": "", app_id: "e4a9b913-d9a6-44b5-aac9-4ae022e599d4" },
  //   headers: {
  //     "Content-Type": "application/json",
  //     Authorization: "Basic MmEwNDc3ZWEtYjJhMC00MjBhLTk4ZjctMzY2MzM5MmM5N2Iw",
  //   },
  //   data: {
  //     included_segments: ["Subscribed Users"],
  //     contents: { en: "It is time to book meal" },
  //     include_aliases: {
  //       onesignal_id: ["77feae12-024f-482c-94b1-463393662d8d"],
  //     },
  //     target_channel: "push",
  //   },
  // };

  // axios
  //   .request(options)
  //   .then(function (response) {
  //     console.log(response.data);
  //   })
  //   .catch(function (error) {
  //     console.error(error);
  //   });

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
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};

await sendNotification();
