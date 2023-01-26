import {
  dailyWeatherStateChange,
  hourlyWeatherStateChange,
  weatherReducer,
} from "@store/reducers/weather-slice";
import { State } from "@types";

const state = {
  dailyWeather: [],
  hourlyWeather: [],
  hourlyWeatherOnCurrentDay: [],
  dailyWeatherState: State.loading,
  hourlyWeatherState: State.loading,
  currentDay: new Date(),
};

describe("weather-reducer", () => {
  it("state changes correctly", () => {
    [State.error, State.normal, State.notFound, State.loading].forEach((item) => {
      expect(weatherReducer(state, dailyWeatherStateChange(item))).toEqual({
        ...state,
        dailyWeatherState: item,
      });
    });

    [State.error, State.normal, State.notFound, State.loading].forEach((item) => {
      expect(weatherReducer(state, hourlyWeatherStateChange(item))).toEqual({
        ...state,
        hourlyWeatherState: item,
      });
    });
  });
});
