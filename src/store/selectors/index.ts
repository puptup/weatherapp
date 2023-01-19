import { RootState } from "@store";

export const citySelector = (state: RootState) => state.geoposition.city;
export const geopositionSelector = (state: RootState) => state.geoposition;

export const dailyWeatherSelector = (state: RootState) => state.dailyWeather;

export const calendarSelector = (state: RootState) => state.calendar;
export const tokenSelector = (state: RootState) => state.calendar.token;

export const hourlyWeatherSelector = (state: RootState) => state.hourlyWeather;
export const currentDaySelector = (state: RootState) => state.hourlyWeather.currentDay;
export const hourlyWeatherArraySelector = (state: RootState) => state.hourlyWeather.weather;

export const matchedCitiesSelector = (state: RootState) => state.matchedCities;

export const themeSelector = (state: RootState) => state.theme.theme;
