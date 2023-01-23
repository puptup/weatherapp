import * as api from "@services/api/meteo-source";
import { dailyWeatherMocked, mockedDailyWeatherResponse } from "@services/api/mocked-data";
import { setTheme } from "@store/reducers/theme-slice";
import { dailyWeatherStateChange, setDailyWeather } from "@store/reducers/weather-slice";
import { dailyWeatherWorker } from "@store/sagas/weather/daily-weather-worker";
import { State } from "@types";
import { AnyAction } from "redux";
import { runSaga } from "redux-saga";

describe("hourlyWeatherWorker", () => {
  it("puts not found into state if city doesn't exist", async () => {
    const dispatched: AnyAction[] = [];

    await runSaga(
      {
        dispatch: (action: AnyAction) => dispatched.push(action),
        getState: () => ({
          geoposition: {
            city: "",
          },
        }),
      },
      dailyWeatherWorker
    ).toPromise();

    expect(dispatched).toEqual([
      dailyWeatherStateChange(State.loading),
      dailyWeatherStateChange(State.notFound),
    ]);
  });

  it("puts normal into state if fetch was successful", async () => {
    const fetch = jest
      .spyOn(api, "getDailyWeather")
      .mockImplementation(() => Promise.resolve(mockedDailyWeatherResponse));

    const dispatched: AnyAction[] = [];

    await runSaga(
      {
        dispatch: (action: AnyAction) => dispatched.push(action),
        getState: () => ({
          geoposition: {
            city: "test city",
          },
        }),
      },
      dailyWeatherWorker
    ).toPromise();

    expect(fetch).toBeCalledTimes(1);
    expect(dispatched).toEqual([
      dailyWeatherStateChange(State.loading),
      dailyWeatherStateChange(State.normal),
      setDailyWeather(dailyWeatherMocked),
      setTheme("cloudy"),
    ]);
  });
});
