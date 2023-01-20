import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MatchedCitiesType, State } from "@types";

type MatchedCitiesState = {
  matchedCitiesState: State;
  cities: MatchedCitiesType[];
};

const initialState: MatchedCitiesState = {
  matchedCitiesState: State.normal,
  cities: [],
};

const matchedCitiesSlice = createSlice({
  name: "matchedCities",
  initialState,
  reducers: {
    matchedCitiesChange: (state, { payload }: PayloadAction<State>) => {
      state.matchedCitiesState = payload;
    },
    setCityes: (state, { payload }: PayloadAction<MatchedCitiesType[]>) => {
      state.cities = payload;
    },
  },
});

export const { reducer: matchedCitiesReducer } = matchedCitiesSlice;
export const { matchedCitiesChange, setCityes } = matchedCitiesSlice.actions;
