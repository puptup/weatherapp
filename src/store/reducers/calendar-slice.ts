import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CalendarEvent } from "@types";

type CalendarStateType = {
  isLogged: boolean;
  isLoading: boolean;
  token: string | null;
  events: CalendarEvent[];
};

const initialState: CalendarStateType = {
  isLogged: false,
  isLoading: false,
  token: null,
  events: [],
};

const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    setLoggedIn(state, action: PayloadAction<string>) {
      state.isLogged = true;
      state.token = action.payload;
    },
    setLoggedOut(state) {
      state.token = null;
      state.isLogged = false;
      state.isLoading = false;
      state.events = [];
    },
    setLoading(state) {
      state.isLoading = true;
    },
    setEvents(state, action: PayloadAction<CalendarEvent[]>) {
      state.events = action.payload;
      state.isLoading = false;
    },
  },
});

export const { reducer: calendarReducer } = calendarSlice;
export const { setLoggedIn, setLoggedOut, setLoading, setEvents } = calendarSlice.actions;
