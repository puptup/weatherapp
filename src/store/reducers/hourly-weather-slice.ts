import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HourlyWeather } from "@types";

type HourlyWeatherStateType = {
  isLoading: boolean;
  hasError: boolean;
  currentDay: Date;
  weatherOnCurrentDay: HourlyWeather[];
  weather: HourlyWeather[];
};

const initialState: HourlyWeatherStateType = {
  isLoading: true,
  hasError: false,
  currentDay: new Date(),
  weatherOnCurrentDay: [],
  weather: [],
};

const hourlyWeatherSlice = createSlice({
  name: "hourly-weather",
  initialState,
  reducers: {
    hourlyWeatherRequested: (state) => {
      state.isLoading = true;
      state.hasError = false;
      state.weather = [];
    },
    hourlyWeatherReceived: (state, { payload }: PayloadAction<HourlyWeather[]>) => {
      state.isLoading = false;
      state.hasError = false;
      state.weather = payload;
    },
    hourlyWeatherRequestFailed: (state) => {
      state.isLoading = false;
      state.hasError = true;
      state.weather = [];
    },
    setCurrentDay: (state, { payload }: PayloadAction<Date>) => {
      state.currentDay = payload;
    },
    setWeatherOnCurrentDay: (state, { payload }: PayloadAction<HourlyWeather[]>) => {
      state.weatherOnCurrentDay = payload;
    },
  },
});

export const { reducer: hourlyWeatherReducer } = hourlyWeatherSlice;
export const {
  setCurrentDay,
  hourlyWeatherRequested,
  hourlyWeatherReceived,
  hourlyWeatherRequestFailed,
  setWeatherOnCurrentDay,
} = hourlyWeatherSlice.actions;
