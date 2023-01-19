import { getDailyWeather } from "@services/api/meteo-source";
import {
  dailyWeatherReceived,
  dailyWeatherRequested,
  dailyWeatherRequestFailed,
} from "@store/reducers/daily-weather-slice";
import { setTheme } from "@store/reducers/theme-slice";
import { citySelector } from "@store/selectors/index";
import { DailyWeatherResponce } from "@types";
import { convertToDailyWeather } from "@utils/conversion-response-to-type";
import { getThemeByIcon } from "@utils/theme-by-icon";
import { SagaIterator } from "redux-saga";
import { call, put, select } from "redux-saga/effects";

export function* dailyWeatherWorker(): SagaIterator {
  const city = yield select(citySelector);
  yield put(dailyWeatherRequested());
  try {
    const response: DailyWeatherResponce = yield call(getDailyWeather, city);
    const weatherList = convertToDailyWeather(response);
    const todayWeather = weatherList.filter(
      (item) => new Date(item.date).getDay() === new Date().getDay()
    )[0];
    yield put(setTheme(getThemeByIcon(todayWeather.icon)));
    yield put(dailyWeatherReceived(weatherList));
  } catch (e) {
    yield put(dailyWeatherRequestFailed());
  }
}
