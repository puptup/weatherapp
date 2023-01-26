import "@testing-library/jest-dom";

import { DailyWeatherItem } from "@components/daily-weather-item/daily-weather-item";
import * as utils from "@utils/loadImage";
import { renderWithProviders } from "@utils/testing/render-with-providers";
import React from "react";

describe("hourly-weather-item", () => {
  jest.spyOn(utils, "loadIcon").mockReturnValue(Promise.resolve(() => "test"));

  it("should correspond to snapshot", () => {
    const { getByTestId } = renderWithProviders(
      <DailyWeatherItem
        item={{
          icon: "test",
          date: "2023-01-23T14:13:22.224Z",
          maxTemperature: 0,
          minTemperature: 0,
          temperature: 0,
          weather: "test",
        }}
        currentDay
      />
    );
    expect(getByTestId("daily-weather-item")).toMatchSnapshot();
  });
});
