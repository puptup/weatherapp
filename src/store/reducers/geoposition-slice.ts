import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GeopositionType } from "@types";

type GeopositionStateType = {
  isLoading: boolean;
  hasError: boolean;
  country: string;
  city: string;
};

const initialState: GeopositionStateType = {
  isLoading: true,
  hasError: false,
  country: "",
  city: "",
};

const geopositionSlice = createSlice({
  name: "geoposition",
  initialState,
  reducers: {
    geopositionRequested: (state) => {
      state.isLoading = true;
      state.hasError = false;
      state.city = "";
      state.country = "";
    },
    geopositionReceived: (state, action: PayloadAction<GeopositionType>) => {
      state.isLoading = false;
      state.hasError = false;
      state.city = action.payload.city;
      state.country = action.payload.country;
    },
    geopositionRequestFailed: (state) => {
      state.isLoading = false;
      state.hasError = true;
      state.city = "";
      state.country = "";
    },
    setGeoposition: (state, action: PayloadAction<GeopositionType>) => {
      state.city = action.payload.city;
      state.country = action.payload.country;
    },
  },
});

export const { reducer: geopositionReducer } = geopositionSlice;
export const {
  geopositionRequested,
  geopositionReceived,
  geopositionRequestFailed,
  setGeoposition,
} = geopositionSlice.actions;
