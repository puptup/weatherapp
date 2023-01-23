import "@testing-library/jest-dom";

import { HourlyWeather } from "@components/houlry-weather/hourly-weather";
import * as selectors from "@store/selectors";
import { State } from "@types";
import * as utils from "@utils/loadImage";
import { renderWithProviders } from "@utils/testing/render-with-providers";
import React from "react";

const mockCurrDay = "Mon Jan 23 2023 17:30:21 GMT+0300 (Moscow Standard Time)";
const mockWeatherList = [
  {
    temperature: -0.14,
    maxTemperature: -0.14,
    minTemperature: -0.63,
    icon: "13n",
    date: "2023-01-23 15:00:00",
    weather: "light snow",
  },
  {
    temperature: -0.22,
    maxTemperature: -0.22,
    minTemperature: -0.37,
    icon: "04n",
    date: "2023-01-23 18:00:00",
    weather: "overcast clouds",
  },
  {
    temperature: -0.23,
    maxTemperature: -0.23,
    minTemperature: -0.27,
    icon: "04n",
    date: "2023-01-23 21:00:00",
    weather: "overcast clouds",
  },
];

describe("hourly-weather", () => {
  jest.spyOn(utils, "loadIcon").mockReturnValue(Promise.resolve(() => "test"));

  it("should render list", () => {
    jest.spyOn(selectors, "hourlyWeatherStateSelector").mockReturnValue(State.normal);
    jest.spyOn(selectors, "hourlyWeatherCurrentSelector").mockReturnValue(mockWeatherList);
    jest.spyOn(selectors, "currentDaySelector").mockReturnValue(new Date(mockCurrDay));
    const { getAllByTestId } = renderWithProviders(<HourlyWeather />);
    expect(getAllByTestId("hourly-weather-item").length).toBe(3);
  });
});
