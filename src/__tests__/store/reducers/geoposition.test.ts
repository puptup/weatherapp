/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import {
  geopositionReducer,
  geopositionStateChange,
  setGeoposition,
} from "@store/reducers/geoposition-slice";
import { State } from "@types";

const state = { geopositionState: State.loading, country: "", city: "" };

describe("geoposition-reducer", () => {
  it("state changes correctly", () => {
    [State.error, State.normal, State.notFound, State.loading].forEach((item) => {
      expect(geopositionReducer(state, geopositionStateChange(item))).toEqual({
        ...state,
        geopositionState: item,
      });
    });
  });

  it("setGeoposition works correctly", () => {
    const geo = { city: "test1", country: "test2" };
    expect(geopositionReducer(state, setGeoposition(geo))).toEqual({
      ...state,
      city: "test1",
      country: "test2",
    });
  });
});
