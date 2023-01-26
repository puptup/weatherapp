import * as calendarApi from "@services/api/calendar";
import { setEvents, setLoggedOut } from "@store/reducers/calendar-slice";
import { CalendarLoadEvents } from "@store/sagas/calendar/watcher";
import { AnyAction } from "redux";
import { runSaga } from "redux-saga";

describe("CalendarLoadEvents", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("sets user events to store if no errors", async () => {
    const eventsResponse = {
      items: [
        {
          id: "1",
          end: { dateTime: "12345" },
          start: { dateTime: "12345" },
          summary: "test event",
        },
      ],
    };

    const fetch = jest
      .spyOn(calendarApi, "fetchDayEvents")
      .mockImplementation(() => Promise.resolve(eventsResponse));

    const dispatched: AnyAction[] = [];

    await runSaga(
      {
        dispatch: (action: AnyAction) => dispatched.push(action),
        getState: () => ({
          calendar: { token: "testToken" },
          weather: {
            currentDay: "testDay",
          },
        }),
      },
      CalendarLoadEvents
    ).toPromise();

    const events = eventsResponse.items.map((item) => ({
      start: item.start.dateTime,
      id: item.id,
      end: item.end.dateTime,
      name: item.summary,
    }));

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([setEvents(events)]);
  });

  it("sets logged out if has errors", async () => {
    const fetch = jest.spyOn(calendarApi, "fetchDayEvents").mockImplementation(() => {
      throw new Error();
    });

    const dispatched: AnyAction[] = [];

    await runSaga(
      {
        dispatch: (action: AnyAction) => dispatched.push(action),
        getState: () => ({
          calendar: { token: "testToken" },
          weather: {
            currentDay: "testDay",
          },
        }),
      },
      CalendarLoadEvents
    ).toPromise();

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([setLoggedOut()]);
  });
});
