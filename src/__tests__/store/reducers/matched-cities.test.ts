import {
  matchedCitiesChange,
  matchedCitiesReducer,
  setCityes,
} from "@store/reducers/matched-cities-slice";
import { State } from "@types";

const state = {
  matchedCitiesState: State.normal,
  cities: [],
};

describe("matched-cities-reducer", () => {
  it("state changes correctly", () => {
    [State.error, State.normal, State.notFound, State.loading].forEach((item) => {
      expect(matchedCitiesReducer(state, matchedCitiesChange(item))).toEqual({
        ...state,
        matchedCitiesState: item,
      });
    });
  });

  it("setCityes works correctly", () => {
    const cities = [{ name: "test", country: "test" }];
    expect(matchedCitiesReducer(state, setCityes(cities))).toEqual({
      ...state,
      cities,
    });
  });
});
