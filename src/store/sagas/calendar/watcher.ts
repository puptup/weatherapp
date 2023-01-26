import { fetchDayEvents } from "@services/api/calendar";
import { RootState } from "@store";
import { LOAD_EVENTS_FROM_CALENDAR } from "@store/actions";
import { setEvents, setLoggedOut } from "@store/reducers/calendar-slice";
import { CalendarAPIResponse, CalendarEvent } from "@types";
import { SagaIterator } from "redux-saga";
import { call, put, select, takeEvery } from "redux-saga/effects";

import { currentDaySelector } from "../../selectors/index";

const tokenSelector = (state: RootState) => state.calendar.token;

export function* CalendarLoadEvents(): SagaIterator {
  const token: string | null = yield select(tokenSelector);
  const currentDay: Date = yield select(currentDaySelector);
  if (token) {
    try {
      const responce: CalendarAPIResponse = yield call(fetchDayEvents, token, currentDay);

      const events: CalendarEvent[] = responce.items.map((item) => ({
        start: item.start.dateTime,
        id: item.id,
        end: item.end.dateTime,
        name: item.summary,
      }));

      yield put(setEvents(events));
    } catch (e) {
      yield put(setLoggedOut());
    }
  }
}

export function* calendarWatcher() {
  yield takeEvery(LOAD_EVENTS_FROM_CALENDAR, CalendarLoadEvents);
}
