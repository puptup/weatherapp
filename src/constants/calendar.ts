const clientId = process.env.GOOGLE_CLIENT_ID!;
export const googleApiKey = process.env.GOOGLE_API_KEY!;

export const calendarConfig = {
  clientId,
  apiKey: googleApiKey,
  scope: "https://www.googleapis.com/auth/calendar",
  discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],
};
