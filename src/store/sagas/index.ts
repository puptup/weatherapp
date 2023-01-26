import { all, fork } from "redux-saga/effects";

import { calendarWatcher } from "./calendar/watcher";
import { geopositionWatcher } from "./geoposition/geoposition-watcher";
import { initialWatcher, reinitialOnCityChange } from "./initial";
import { weatherWatcher } from "./weather/weather-watcher";

export function* rootSaga() {
  yield all([
    fork(initialWatcher),
    fork(weatherWatcher),
    fork(geopositionWatcher),
    fork(calendarWatcher),
    fork(reinitialOnCityChange),
  ]);
}
