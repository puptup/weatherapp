import { getHourlyWeather } from "@services";
import { setDayAction } from "@store/actions-creators";
import {
  hourlyWeatherStateChange,
  setCurrentDay,
  setHourlyWeather,
  setHourlyWeatherOnCurrentDay,
} from "@store/reducers/weather-slice";
import { citySelector } from "@store/selectors";
import { HourlyWeather, State } from "@types";
import { convertToHourlyWeather } from "@utils/conversion-response-to-type";
import { SagaIterator } from "redux-saga";
import { call, fork, put, select } from "redux-saga/effects";

import { currentDaySelector, hourlyWeatherArraySelector } from "../../selectors/index";
import { CalendarLoadEvents } from "../calendar/watcher";

export function* setCurrentHourlyWeather(): SagaIterator {
  const day: number = yield select(currentDaySelector);
  const weather: HourlyWeather[] = yield select(hourlyWeatherArraySelector);
  const weatherOnCurrentDay = weather.filter(
    (item) => new Date(item.date).getDay() === new Date(day).getDay()
  );

  yield put(setHourlyWeatherOnCurrentDay(weatherOnCurrentDay));
}

export function* setDaySaga({ payload }: ReturnType<typeof setDayAction>): SagaIterator {
  yield put(setCurrentDay(payload));
  yield fork(setCurrentHourlyWeather);
  yield fork(CalendarLoadEvents);
}

export function* hourlyWeatherWorker(): SagaIterator {
  const city = yield select(citySelector);
  if (!city) {
    yield put(hourlyWeatherStateChange(State.notFound));
    return;
  }
  yield put(hourlyWeatherStateChange(State.loading));
  try {
    const response = yield call(getHourlyWeather, city);
    const weatherList = convertToHourlyWeather(response);
    if (weatherList.length > 0) {
      yield put(hourlyWeatherStateChange(State.normal));
    } else {
      yield put(hourlyWeatherStateChange(State.notFound));
    }

    yield put(setHourlyWeather(weatherList));
    yield fork(setCurrentHourlyWeather);
  } catch (e) {
    yield put(hourlyWeatherStateChange(State.error));
  }
}
