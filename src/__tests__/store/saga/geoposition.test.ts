import * as api from "@services/api/get-geolocation";
import { geopositionStateChange, setGeoposition } from "@store/reducers/geoposition-slice";
import { geopositionWorker } from "@store/sagas/geoposition/geoposition-worker";
import { State } from "@types";
import { AnyAction } from "redux";
import { runSaga } from "redux-saga";

describe("geopositionWorker", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should set error if no confirm", async () => {
    jest.spyOn(global, "confirm").mockReturnValue(false);

    const dispatched: AnyAction[] = [];

    await runSaga(
      {
        dispatch: (action: AnyAction) => dispatched.push(action),
      },
      geopositionWorker
    ).toPromise();

    expect(dispatched).toEqual([
      geopositionStateChange(State.loading),
      geopositionStateChange(State.notFound),
    ]);
  });

  it("should works correctly with confirm", async () => {
    jest.spyOn(global, "confirm").mockReturnValue(true);

    const mockResp = { city: "test", country_name: "test" };

    const fetch = jest
      .spyOn(api, "getGeolocation")
      .mockImplementation(() => Promise.resolve(mockResp));

    const dispatched: AnyAction[] = [];

    await runSaga(
      {
        dispatch: (action: AnyAction) => dispatched.push(action),
      },
      geopositionWorker
    ).toPromise();

    const geo = {
      city: mockResp.city,
      country: mockResp.country_name,
    };

    expect(fetch).toBeCalledTimes(1);
    expect(dispatched).toEqual([
      geopositionStateChange(State.loading),
      setGeoposition(geo),
      geopositionStateChange(State.normal),
    ]);
  });
});
