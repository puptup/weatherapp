import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DailyWeather, HourlyWeather, State } from "@types";

type WeatherStateType = {
  dailyWeatherState: State;
  dailyWeather: DailyWeather[];
  hourlyWeatherState: State;
  hourlyWeather: HourlyWeather[];
  hourlyWeatherOnCurrentDay: HourlyWeather[];
  currentDay: Date;
};

const initialState: WeatherStateType = {
  dailyWeather: [],
  hourlyWeather: [],
  hourlyWeatherOnCurrentDay: [],
  dailyWeatherState: State.loading,
  hourlyWeatherState: State.loading,
  currentDay: new Date(),
};

const weatherSlice = createSlice({
  name: "wheather",
  initialState,
  reducers: {
    dailyWeatherStateChange: (state, { payload }: PayloadAction<State>) => {
      state.dailyWeatherState = payload;
    },
    hourlyWeatherStateChange: (state, { payload }: PayloadAction<State>) => {
      state.hourlyWeatherState = payload;
    },
    setDailyWeather: (state, { payload }: PayloadAction<DailyWeather[]>) => {
      state.dailyWeather = payload;
    },
    setHourlyWeather: (state, { payload }: PayloadAction<HourlyWeather[]>) => {
      state.hourlyWeather = payload;
    },
    setCurrentDay: (state, { payload }: PayloadAction<Date>) => {
      state.currentDay = payload;
    },
    setHourlyWeatherOnCurrentDay: (state, { payload }: PayloadAction<HourlyWeather[]>) => {
      state.hourlyWeatherOnCurrentDay = payload;
    },
  },
});

export const { reducer: weatherReducer } = weatherSlice;
export const {
  dailyWeatherStateChange,
  hourlyWeatherStateChange,
  setCurrentDay,
  setDailyWeather,
  setHourlyWeather,
  setHourlyWeatherOnCurrentDay,
} = weatherSlice.actions;
