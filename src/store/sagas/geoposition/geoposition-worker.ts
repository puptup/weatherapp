/* eslint-disable @typescript-eslint/naming-convention */
import { getGeolocation } from "@services";
import { geopositionStateChange, setGeoposition } from "@store/reducers/geoposition-slice";
import { setAccessToGeoposition } from "@store/reducers/settings-slice";
import { accessToGeopositionSelector } from "@store/selectors";
import { GeopositionType, State } from "@types";
import { SagaIterator } from "redux-saga";
import { call, put, select } from "redux-saga/effects";

export function* geopositionWorker(): SagaIterator {
  yield put(geopositionStateChange(State.loading));
  const access = yield select(accessToGeopositionSelector);
  if (!access) {
    const newAccess = global.confirm("Do you give access to get your geolocation?");
    yield put(setAccessToGeoposition(newAccess));
    if (!newAccess) {
      yield put(geopositionStateChange(State.notFound));
      return;
    }
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
