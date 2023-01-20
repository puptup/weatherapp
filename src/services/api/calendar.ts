import { calendarConfig, googleApiKey } from "@constants/calendar";
import { CalendarAPIResponse } from "@types";
import { getEndOfDay, getStartDay } from "@utils/date";
import ApiCalendar from "react-google-calendar-api";

const apiBase = "https://www.googleapis.com/calendar/v3/calendars/primary/events";

export const apiCalendar = new ApiCalendar(calendarConfig);

export const fetchDayEvents = async (token: string, day: Date): Promise<CalendarAPIResponse> => {
  const timeMin = getStartDay(day).toISOString();
  const timeMax = getEndOfDay(day).toISOString();
  const response = await fetch(
    `${apiBase}?key=${googleApiKey}&orderBy=startTime&singleEvents=true&timeMin=${timeMin}&timeMax=${timeMax}`,
    {
      headers: {
        Authorization: token,
      },
    }
  );
  const result = await response.json();
  return result;
};
