import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GeopositionType, State } from "@types";

type GeopositionStateType = {
  geopositionState: State;
  country: string;
  city: string;
};

const initialState: GeopositionStateType = {
  geopositionState: State.loading,
  country: "",
  city: "",
};

const geopositionSlice = createSlice({
  name: "geoposition",
  initialState,
  reducers: {
    geopositionStateChange: (state, { payload }: PayloadAction<State>) => {
      state.geopositionState = payload;
    },
    setGeoposition: (state, { payload }: PayloadAction<GeopositionType>) => {
      const { city, country } = payload;
      state.city = city;
      state.country = country;
    },
  },
});

export const { reducer: geopositionReducer } = geopositionSlice;
export const { geopositionStateChange, setGeoposition } = geopositionSlice.actions;
