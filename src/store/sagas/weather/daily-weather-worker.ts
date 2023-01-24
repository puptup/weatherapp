import { getDailyWeather } from "@services/api/meteo-source";
import { setTheme } from "@store/reducers/settings-slice";
import { dailyWeatherStateChange, setDailyWeather } from "@store/reducers/weather-slice";
import { citySelector } from "@store/selectors/index";
import { DailyWeatherResponse, State } from "@types";
import { convertToDailyWeather } from "@utils/conversion-response-to-type";
import { getThemeByIcon } from "@utils/theme-by-icon";
import { SagaIterator } from "redux-saga";
import { call, put, select } from "redux-saga/effects";

export function* dailyWeatherWorker(): SagaIterator {
  yield put(dailyWeatherStateChange(State.loading));
  const city = yield select(citySelector);
  if (!city) {
    yield put(dailyWeatherStateChange(State.notFound));
    return;
  }
  try {
    const response: DailyWeatherResponse = yield call(getDailyWeather, city);
    const weatherList = convertToDailyWeather(response);
    if (weatherList.length > 0) {
      yield put(dailyWeatherStateChange(State.normal));
      yield put(setDailyWeather(weatherList));
      const todayWeather = weatherList.filter(
        (item) => new Date(item.date).getDay() === new Date().getDay()
      )[0];
      yield put(setTheme(getThemeByIcon(todayWeather.icon)));
    } else {
      yield put(dailyWeatherStateChange(State.notFound));
      yield put(setDailyWeather(weatherList));
    }
  } catch (e) {
    yield put(dailyWeatherStateChange(State.error));
  }
}
