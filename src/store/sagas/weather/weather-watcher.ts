import { SET_DAY } from "@store/actions";
import { takeEvery } from "redux-saga/effects";

import { setDaySaga } from "./hourly-weather-worker";

export function* weatherWatcher() {
  yield takeEvery(SET_DAY, setDaySaga);
}
