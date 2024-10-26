import { OAuth2Client } from "google-auth-library";
import google from "@googleapis/calendar";
import moment from "moment";
import { Interface } from "readline";
import axios from "axios";
import { headers } from "next/headers";

interface CalendarEventData {
  title: string;
  description: string;
  summary: string;
  startDate: string;
  endDate: string;
  user_email: string;
}

// export default class CalendarEvent {

export const googleAuthHandler = () => async () => {
  var SCOPES = "https://www.googleapis.com/auth/calendar.events";
  const client = (window as any).google.accounts.oauth2.initCodeClient({
    client_id: process.env.GOOGLE_CLIENT_ID,
    Scope: SCOPES,
    ux_mode: "popup",
    callback: async (response: any) => {
      try {
        if (!response.code) {
          return;
        }
        console.log(client);
        // axios
        //   .post("",
        //     { token: response.code },
        //     { headers: { "Content-Type": "application/json" } }
        //   )
        //   .then((response) => JSON.parse(response.data))
        //   .then((data) => console.log("success"))
        //   .catch((e) => {
        //     message: `${e}`;
        //   });

        //sending the code to backend nestjs Mars
        // fetch("/gauth/token", {
        //   method: "post",
        //   headers: { "Content-Type": "application/json" },
        //   body: JSON.stringify({
        //     token : response.code
        //   }),
        // })
        //   .then((response) => response.json())
        //   .then((data) => console.log("success"));
      } catch (error) {
        console.log(error);
      }
    }
  });
  client.requestCode();
};

export const createCalendarEvent = (data: CalendarEventData) => async () => {
  try {
    axios
      .post("/gauth/calendarevent", {
        title: data.title,
        description: data.description,
        summary: data.summary,
        startDate: data.startDate,
        endDate: data.endDate,
        email: data.user_email
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  } catch (error) {}
};
// }

/*      
start: {dateTime: moment().format(moment().add(1, 'days').calendar()),},
end: {dateTime: moment().format(moment().add(3, 'days').calendar()),}, 
*/
