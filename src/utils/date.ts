import moment from "moment";

export function ConvertDate(value: string) {
  // Converting string to date
  let new_Date = moment(value).local();
  // Convert the date object to US specific date string
  let result: string = new_Date.format("dddd MMMM Do, YYYY");
  return result;
}

export function getHoursDiff(date: string, time: string): boolean {
  var end = moment(new Date()); //todays date
  var now = moment(date); // another date
  var duration = moment.duration(now.diff(end));
  var _hoursPositive = Math.abs(duration.asHours());
  var hours = _hoursPositive > 1 ? Math.ceil(_hoursPositive) : Math.floor(_hoursPositive);

  return Math.abs(hours) == 0;
}
