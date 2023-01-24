import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { calendarReducer } from "./calendar-slice";
import { geopositionReducer } from "./geoposition-slice";
import { matchedCitiesReducer } from "./matched-cities-slice";
import { settingsReducer } from "./settings-slice";
import { weatherReducer } from "./weather-slice";

const calendarConfig = {
  key: "dailyWeather",
  storage,
  whitelist: ["token", "isLogged"],
};

const settingsConfig = {
  key: "settings",
  storage,
  whitelist: ["accessToGeoposition"],
};

export const rootReducer = combineReducers({
  weather: weatherReducer,
  geoposition: geopositionReducer,
  calendar: persistReducer(calendarConfig, calendarReducer),
  settings: persistReducer(settingsConfig, settingsReducer),
  matchedCities: matchedCitiesReducer,
});
