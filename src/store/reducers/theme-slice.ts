import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Theme = "clear-sky" | "cloudy" | "rain" | "snow";

type ThemeStateType = {
  theme: Theme;
};

const initialState: ThemeStateType = {
  theme: "clear-sky",
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setTheme: (state, { payload }: PayloadAction<Theme>) => {
      state.theme = payload;
    },
  },
});

export const { reducer: settingsReducer } = settingsSlice;
export const { setTheme } = settingsSlice.actions;
