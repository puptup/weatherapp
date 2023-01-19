import { getHourlyWeather } from "@services";
import { setDayAction } from "@store/actions-creators";
import {
  hourlyWeatherReceived,
  hourlyWeatherRequested,
  hourlyWeatherRequestFailed,
  setCurrentDay,
  setWeatherOnCurrentDay,
} from "@store/reducers/hourly-weather-slice";
import { citySelector } from "@store/selectors";
import { HourlyWeather } from "@types";
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
  yield put(setWeatherOnCurrentDay(weatherOnCurrentDay));
}

export function* setDaySaga({ payload }: ReturnType<typeof setDayAction>): SagaIterator {
  yield put(setCurrentDay(payload));
  yield fork(setCurrentHourlyWeather);
  yield fork(CalendarLoadEvents);
}

export function* hourlyWeatherWorker(): SagaIterator {
  const city = yield select(citySelector);
  yield put(hourlyWeatherRequested());
  try {
    const response = yield call(getHourlyWeather, city);
    const weatherList = convertToHourlyWeather(response);
    yield put(hourlyWeatherReceived(weatherList));
    yield fork(setCurrentHourlyWeather);
  } catch (e) {
    yield put(hourlyWeatherRequestFailed());
  }
}
