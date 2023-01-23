import {
  calendarReducer,
  setEvents,
  setLoading,
  setLoggedIn,
  setLoggedOut,
} from "@store/reducers/calendar-slice";

const state = {
  isLogged: false,
  isLoading: false,
  token: null,
  events: [],
};

const events = [
  {
    start: "test",
    id: "1",
    name: "test",
    end: "test",
  },
  {
    start: "test",
    id: "2",
    name: "test",
    end: "test",
  },
];

describe("calendar-reducer", () => {
  it("setLoading works correctly", () => {
    expect(calendarReducer(state, setLoading())).toEqual({
      isLogged: false,
      isLoading: true,
      token: null,
      events: [],
    });
  });

  it("setEvents works correctly", () => {
    expect(calendarReducer(state, setEvents(events))).toEqual({
      isLogged: false,
      isLoading: false,
      token: null,
      events,
    });
  });

  it("setLoggedIn works correctly", () => {
    const token = "test-token";
    expect(calendarReducer(state, setLoggedIn(token))).toEqual({
      isLogged: true,
      isLoading: false,
      token,
      events: [],
    });
  });

  it("setLoggedOut works correctly", () => {
    expect(calendarReducer(state, setLoggedOut())).toEqual({
      isLogged: false,
      isLoading: false,
      token: null,
      events: [],
    });
  });
});
