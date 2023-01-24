import { BackgroundThemeKeys } from "@assets/weather-background";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ThemeStateType = {
  theme: BackgroundThemeKeys;
  accessToGeoposition: boolean;
};

const initialState: ThemeStateType = {
  theme: "clearSky",
  accessToGeoposition: false,
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setTheme: (state, { payload }: PayloadAction<BackgroundThemeKeys>) => {
      state.theme = payload;
    },
    setAccessToGeoposition: (state, { payload }: PayloadAction<boolean>) => {
      state.accessToGeoposition = payload;
    },
  },
});

export const { reducer: settingsReducer } = settingsSlice;
export const { setTheme, setAccessToGeoposition } = settingsSlice.actions;
