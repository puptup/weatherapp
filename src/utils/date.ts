import { longWeekday, shortWeekDay } from "@constants/date-and-time";

export const getWeekdayOrToday = (currentDay: Date, short: boolean = false) => {
  return new Date(currentDay).getDay() !== new Date().getDay()
    ? new Date(currentDay).toLocaleDateString("en-GB", short ? shortWeekDay : longWeekday)
    : "Today";
};

export const getStartDay = (day: Date): Date => {
  const start = new Date(day);
  start.setUTCHours(0, 0, 0, 0);
  return start;
};

export const getEndOfDay = (day: Date): Date => {
  const end = new Date(day);
  end.setUTCHours(23, 59, 59, 999);
  return end;
};
