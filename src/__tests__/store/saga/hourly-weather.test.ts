import {
  currentDayMocked,
  hourlyWeatherMocked,
  mockedHourlyWeatherResponse,
  weatherOnCurrentDayMocked,
} from "@services/api/mocked-data";
import * as api from "@services/api/open-weather";
import {
  hourlyWeatherStateChange,
  setHourlyWeather,
  setHourlyWeatherOnCurrentDay,
} from "@store/reducers/weather-slice";
import {
  hourlyWeatherWorker,
  setCurrentHourlyWeather,
} from "@store/sagas/weather/hourly-weather-worker";
import { State } from "@types";
import { convertToHourlyWeather } from "@utils/conversion-response-to-type";
import { AnyAction } from "redux";
import { runSaga } from "redux-saga";

describe("setCurrentHourlyWeather", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("sets hourly weather on current day", async () => {
    const dispatched: AnyAction[] = [];

    await runSaga(
      {
        dispatch: (action: AnyAction) => dispatched.push(action),
        getState: () => ({
          weather: { currentDay: currentDayMocked, hourlyWeather: hourlyWeatherMocked },
        }),
      },
      setCurrentHourlyWeather
    ).toPromise();

    expect(dispatched).toEqual([setHourlyWeatherOnCurrentDay(weatherOnCurrentDayMocked)]);
  });
});

describe("hourlyWeatherWorker", () => {
  it("works correctly", async () => {
    const fetch = jest
      .spyOn(api, "getHourlyWeather")
      .mockImplementation(() => Promise.resolve(mockedHourlyWeatherResponse));

    const dispatched: AnyAction[] = [];

    await runSaga(
      {
        dispatch: (action: AnyAction) => dispatched.push(action),
        getState: () => ({
          geoposition: {
            city: "test city",
          },
          weather: { currentDay: currentDayMocked, hourlyWeather: hourlyWeatherMocked },
        }),
      },
      hourlyWeatherWorker
    ).toPromise();

    const weatherList = convertToHourlyWeather(mockedHourlyWeatherResponse);

    expect(fetch).toBeCalledTimes(1);
    expect(dispatched).toEqual([
      hourlyWeatherStateChange(State.loading),
      hourlyWeatherStateChange(State.normal),
      setHourlyWeather(weatherList),
      setHourlyWeatherOnCurrentDay(weatherOnCurrentDayMocked),
    ]);
  });
});
