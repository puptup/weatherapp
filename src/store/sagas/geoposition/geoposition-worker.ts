/* eslint-disable @typescript-eslint/naming-convention */
import { getGeolocation } from "@services";
import { geopositionStateChange, setGeoposition } from "@store/reducers/geoposition-slice";
import { GeopositionType, State } from "@types";
import { SagaIterator } from "redux-saga";
import { call, put } from "redux-saga/effects";

export function* geopositionWorker(): SagaIterator {
  yield put(geopositionStateChange(State.loading));
  const access = global.confirm("Do you give access to get your geolocation?");
  if (!access) {
    yield put(geopositionStateChange(State.notFound));
    return;
  }
  try {
    const response = yield call(getGeolocation);
    const { city, country_name } = response;
    const geo: GeopositionType = {
      city,
      country: country_name,
    };
    yield put(setGeoposition(geo));
    yield put(geopositionStateChange(State.normal));
  } catch (e) {
    yield put(geopositionStateChange(State.error));
  }
}
