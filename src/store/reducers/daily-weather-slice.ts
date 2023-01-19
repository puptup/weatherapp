import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DailyWeather } from "@types";

type DailyWeatherStateType = {
  isLoading: boolean;
  hasError: boolean;
  weather: DailyWeather[];
};

const initialState: DailyWeatherStateType = {
  isLoading: true,
  hasError: false,
  weather: [],
};

const dailyWeatherSlice = createSlice({
  name: "daily-weather",
  initialState,
  reducers: {
    dailyWeatherRequested: (state) => {
      state.isLoading = true;
      state.hasError = false;
      state.weather = [];
    },
    dailyWeatherReceived: (state, action: PayloadAction<DailyWeather[]>) => {
      state.isLoading = false;
      state.hasError = false;
      state.weather = action.payload;
    },
    dailyWeatherRequestFailed: (state) => {
      state.isLoading = false;
      state.hasError = true;
      state.weather = [];
    },
  },
});

export const { reducer: dailyWeatherReducer } = dailyWeatherSlice;
export const { dailyWeatherRequested, dailyWeatherReceived, dailyWeatherRequestFailed } =
  dailyWeatherSlice.actions;
