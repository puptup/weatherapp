import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MatchedCitiesType } from "@types";

type MatchedCitiesState = {
  isLoading: boolean;
  hasError: boolean;
  cities: MatchedCitiesType[];
};

const initialState: MatchedCitiesState = {
  isLoading: false,
  hasError: false,
  cities: [],
};

const matchedCitiesSlice = createSlice({
  name: "matchedCities",
  initialState,
  reducers: {
    cityesRequested: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    cityesRecieved: (state, { payload }: PayloadAction<MatchedCitiesType[]>) => {
      state.cities = payload;
      state.isLoading = false;
      state.hasError = false;
    },
    cityesFailed: (state) => {
      state.cities = [];
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

export const { reducer: matchedCitiesReducer } = matchedCitiesSlice;
export const { cityesFailed, cityesRecieved, cityesRequested } = matchedCitiesSlice.actions;
