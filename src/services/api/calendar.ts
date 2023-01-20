import { CalendarAPIResponse } from "@types";
import ApiCalendar from "react-google-calendar-api";

const clientId = process.env.GOOGLE_CLIENT_ID!;
const apiKey = process.env.GOOGLE_API_KEY!;

const config = {
  clientId,
  apiKey,
  scope: "https://www.googleapis.com/auth/calendar",
  discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],
};

const apiBase = "https://www.googleapis.com/calendar/v3/calendars/primary/events";

export const apiCalendar = new ApiCalendar(config);

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

export const fetchDayEvents = async (token: string, day: Date): Promise<CalendarAPIResponse> => {
  const timeMin = getStartDay(day).toISOString();
  const timeMax = getEndOfDay(day).toISOString();
  const response = await fetch(
    `${apiBase}?key=${apiKey}&orderBy=startTime&singleEvents=true&timeMin=${timeMin}&timeMax=${timeMax}`,
    {
      headers: {
        Authorization: token,
      },
    }
  );
  const result = await response.json();
  return result;
};
