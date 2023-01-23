/* eslint-disable @typescript-eslint/no-shadow */
import * as api from "@services/api/meteo-source";
import { matchCity } from "@store/actions-creators";
import { matchedCitiesChange, setCityes } from "@store/reducers/matched-cities-slice";
import { fetchMatchedCityes, ResponceCityes } from "@store/sagas/geoposition/city-match-worker";
import { State } from "@types";
import { AnyAction } from "redux";
import { runSaga } from "redux-saga";

describe("fetchMatchedCityes", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should puts error into state on bad fetch", async () => {
    const fetch = jest.spyOn(api, "findPlacesByPrefix").mockImplementation(() => {
      throw new Error();
    });

    const dispatched: AnyAction[] = [];
    await runSaga(
      {
        dispatch: (action: AnyAction) => dispatched.push(action),
      },
      fetchMatchedCityes,
      matchCity("test preffix")
    ).toPromise();

    expect(fetch).toBeCalledTimes(1);
    expect(dispatched).toEqual([
      matchedCitiesChange(State.loading),
      matchedCitiesChange(State.error),
    ]);
  });

  it("puts cities into state if it exsits", async () => {
    const mockResp: ResponceCityes = [{ name: "test", country: "test" }];
    const fetch = jest
      .spyOn(api, "findPlacesByPrefix")
      .mockImplementation(() => Promise.resolve(mockResp));

    const dispatched: AnyAction[] = [];
    await runSaga(
      {
        dispatch: (action: AnyAction) => dispatched.push(action),
      },
      fetchMatchedCityes,
      matchCity("test preffix")
    ).toPromise();

    expect(fetch).toBeCalledTimes(1);
    expect(dispatched).toEqual([
      matchedCitiesChange(State.loading),
      setCityes(mockResp),
      matchedCitiesChange(State.normal),
    ]);
  });

  it("puts notfound into state if result has 0 length", async () => {
    const mockResp: ResponceCityes = [];
    const fetch = jest
      .spyOn(api, "findPlacesByPrefix")
      .mockImplementation(() => Promise.resolve(mockResp));

    const dispatched: AnyAction[] = [];
    await runSaga(
      {
        dispatch: (action: AnyAction) => dispatched.push(action),
      },
      fetchMatchedCityes,
      matchCity("test preffix")
    ).toPromise();

    expect(fetch).toBeCalledTimes(1);
    expect(dispatched).toEqual([
      matchedCitiesChange(State.loading),
      setCityes(mockResp),
      matchedCitiesChange(State.notFound),
    ]);
  });
});
