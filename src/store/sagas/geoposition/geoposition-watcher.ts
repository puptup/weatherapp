import { FETCH_GEOPOSITION, MATCH_CITY } from "@store/actions";
import { takeEvery, takeLatest } from "redux-saga/effects";

import { fetchMatchedCityes } from "./city-match-worker";
import { geopositionWorker } from "./geoposition-worker";

export function* geopositionWatcher() {
  yield takeEvery(FETCH_GEOPOSITION, geopositionWorker);
  yield takeLatest(MATCH_CITY, fetchMatchedCityes);
}
