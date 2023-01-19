import { longWeekday, shortWeekDay } from "@constants/date-and-time";

export const getWeekdayOrToday = (currentDay: Date, short: boolean = false) => {
  return new Date(currentDay).getDay() !== new Date().getDay()
    ? new Date(currentDay).toLocaleDateString("en-GB", short ? shortWeekDay : longWeekday)
    : "Today";
};
