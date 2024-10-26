import moment from "moment";
import { arrayUnique } from "./object-utls";
import { addColan } from "./string-utils";
/**
 * converts 24hours time to 12 hours time
 *
 * @param time
 * @returns string
 *
 * usage: timeConvert ('15:30')
 */

export function timeConvert(time: any) {
  // Check correct time format and split into components
  time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)?$/) || [time];

  if (time.length > 1) {
    // If time format correct
    time = time.slice(1); // Remove full string match value
    time[5] = +time[0] < 12 ? " AM" : " PM"; // Set AM/PM
    time[0] = +time[0] % 12 || 12; // Adjust hours
  }
  return time.join(""); // return adjusted time or original string
}

export function getMinsForGivenTimes(obj: object, mins: number, selectedDate: string) {
  var date = moment(new Date()).format("YYYY-MM-DD");

  var arr = Object.values(obj);
  var result: any = [];

  arr.map((timeObj, i) => {
    var startString = date + timeObj.start;
    var endString = date + timeObj.end;
    var start = moment(startString, "YYYY-MM-DD hh:mm");
    var end = moment(endString, "YYYY-MM-DD hh:mm");

    // round starting minutes up to nearest 15 (12 --> 15, 17 --> 30)
    // note that 59 will round up to 60, and moment.js handles that correctly
    // start.minutes(Math.ceil(start.minutes() / 15) * 15);

    var current = moment(start);
    var presentTime = moment().format("HH:mm").replace(":", "");
    var today = selectedDate == start.format("YYYY-MM-DD");

    while (current <= end) {
      var t = current.format("HH:mm").replace(":", "");
      // Only adding future hours
      if (today && presentTime < t) {
        result.push(current.format("HH:mm"));
      } else if (!today) {
        result.push(current.format("HH:mm"));
      }
      current.add(mins, "minutes");
    }
  });

  // creating unique array
  const unique = arrayUnique(result);

  // Converting int hours to proper format
  var res1: string[] = [];
  unique.map((time) => res1.push(timeConvert(time)));

  return res1;
}
