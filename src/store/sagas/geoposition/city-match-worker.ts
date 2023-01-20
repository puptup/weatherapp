import { findPlacesByPrefix } from "@services/api/meteo-source";
import { matchCity } from "@store/actions-creators";
import { matchedCitiesChange, setCityes } from "@store/reducers/matched-cities-slice";
import { State } from "@types";
import { SagaIterator } from "redux-saga";
import { call, delay, put } from "redux-saga/effects";

export type ResponceCityes = {
  name: string;
  country: string;
}[];

export function* fetchMatchedCityes({ payload }: ReturnType<typeof matchCity>): SagaIterator {
  yield delay(300);
  yield put(matchedCitiesChange(State.loading));
  try {
    const result: ResponceCityes = yield call(findPlacesByPrefix, payload);
    if (result.length > 0) {
      yield put(setCityes(result.slice(0, 5)));
      yield put(matchedCitiesChange(State.normal));
    } else {
      yield put(setCityes([]));
      yield put(matchedCitiesChange(State.notFound));
    }
  } catch {
    yield put(matchedCitiesChange(State.error));
  }
}
