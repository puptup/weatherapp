import { RootState } from "@store";

export const citySelector = (state: RootState) => state.geoposition.city;
export const geopositionSelector = (state: RootState) => state.geoposition;
export const geopositionStateSelector = (state: RootState) => state.geoposition.geopositionState;

export const dailyWeatherStateSelector = (state: RootState) => state.weather.dailyWeatherState;
export const dailyWeatherSelector = (state: RootState) => state.weather.dailyWeather;

export const calendarSelector = (state: RootState) => state.calendar;
export const tokenSelector = (state: RootState) => state.calendar.token;

export const hourlyWeatherStateSelector = (state: RootState) => state.weather.hourlyWeatherState;
export const hourlyWeatherArraySelector = (state: RootState) => state.weather.hourlyWeather;
export const hourlyWeatherCurrentSelector = (state: RootState) =>
  state.weather.hourlyWeatherOnCurrentDay;

export const currentDaySelector = (state: RootState) => state.weather.currentDay;

export const matchedCitiesSelector = (state: RootState) => state.matchedCities.cities;
export const matchedCitiesStateSelector = (state: RootState) =>
  state.matchedCities.matchedCitiesState;

export const themeSelector = (state: RootState) => state.settings.theme;
