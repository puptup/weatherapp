import { CITY_CHANGED, INITIAL_APP } from "@store/actions";
import { changeCity } from "@store/actions-creators";
import { geopositionStateChange, setGeoposition } from "@store/reducers/geoposition-slice";
import { State } from "@types";
import { call, fork, put, take, takeEvery } from "redux-saga/effects";

import { CalendarLoadEvents } from "../calendar/watcher";
import { geopositionWorker } from "../geoposition/geoposition-worker";
import { dailyWeatherWorker } from "../weather/daily-weather-worker";
import { hourlyWeatherWorker } from "../weather/hourly-weather-worker";

export function* reinitialWorker({ payload }: ReturnType<typeof changeCity>) {
  const { name, country } = payload;
  yield put(setGeoposition({ city: name, country }));
  yield put(geopositionStateChange(State.normal));
  yield fork(dailyWeatherWorker);
  yield fork(hourlyWeatherWorker);
}

export function* reinitialOnCityChange() {
  yield takeEvery(CITY_CHANGED, reinitialWorker);
}

export function* initialWatcher() {
  yield take(INITIAL_APP);
  yield call(geopositionWorker);
  yield fork(CalendarLoadEvents);
  yield fork(dailyWeatherWorker);
  yield fork(hourlyWeatherWorker);
}
