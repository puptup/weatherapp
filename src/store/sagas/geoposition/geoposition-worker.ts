/* eslint-disable @typescript-eslint/naming-convention */
import { getGeolocation } from "@services";
import {
  geopositionReceived,
  geopositionRequested,
  geopositionRequestFailed,
} from "@store/reducers/geoposition-slice";
import { GeopositionType } from "@types";
import { SagaIterator } from "redux-saga";
import { call, put } from "redux-saga/effects";

export function* geopositionWorker(): SagaIterator {
  yield put(geopositionRequested());
  try {
    const response = yield call(getGeolocation);
    const { city, country_name } = response;
    yield put(geopositionReceived({ city, country: country_name } as GeopositionType));
  } catch (e) {
    yield put(geopositionRequestFailed());
  }
}
