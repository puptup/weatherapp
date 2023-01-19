import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { calendarReducer } from "./calendar-slice";
import { dailyWeatherReducer } from "./daily-weather-slice";
import { geopositionReducer } from "./geoposition-slice";
import { hourlyWeatherReducer } from "./hourly-weather-slice";
import { matchedCitiesReducer } from "./matched-cities-slice";
import { themeReducer } from "./theme-slice";

const calendarConfig = {
  key: "dailyWeather",
  storage,
  whitelist: ["token", "isLogged"],
};

export const rootReducer = combineReducers({
  dailyWeather: dailyWeatherReducer,
  hourlyWeather: hourlyWeatherReducer,
  geoposition: geopositionReducer,
  calendar: persistReducer(calendarConfig, calendarReducer),
  theme: themeReducer,
  matchedCities: matchedCitiesReducer,
});
