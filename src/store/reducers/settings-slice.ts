import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Theme = "clear-sky" | "cloudy" | "rain" | "snow";

type ThemeStateType = {
  theme: Theme;
  accessToGeoposition: boolean;
};

const initialState: ThemeStateType = {
  theme: "clear-sky",
  accessToGeoposition: false,
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setTheme: (state, { payload }: PayloadAction<Theme>) => {
      state.theme = payload;
    },
    setAccessToGeoposition: (state, { payload }: PayloadAction<boolean>) => {
      state.accessToGeoposition = payload;
    },
  },
});

export const { reducer: settingsReducer } = settingsSlice;
export const { setTheme, setAccessToGeoposition } = settingsSlice.actions;
