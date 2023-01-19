import { findPlacesByPrefix } from "@services/api/meteo-source";
import { matchCity } from "@store/actions-creators";
import {
  cityesFailed,
  cityesRecieved,
  cityesRequested,
} from "@store/reducers/matched-cities-slice";
import { SagaIterator } from "redux-saga";
import { call, delay, put } from "redux-saga/effects";

export type ResponceCityes = {
  name: string;
  country: string;
}[];

export function* fetchMatchedCityes({ payload }: ReturnType<typeof matchCity>): SagaIterator {
  yield delay(300);
  yield put(cityesRequested());
  try {
    const result: ResponceCityes = yield call(findPlacesByPrefix, payload);
    yield put(cityesRecieved(result.slice(0, 5)));
  } catch {
    yield put(cityesFailed());
  }
}
