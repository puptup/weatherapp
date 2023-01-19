import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Theme = "clear-sky" | "cloudy" | "rain" | "snow";

type ThemeStateType = {
  theme: Theme;
};

const initialState: ThemeStateType = {
  theme: "clear-sky",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, { payload }: PayloadAction<Theme>) => {
      state.theme = payload;
    },
  },
});

export const { reducer: themeReducer } = themeSlice;
export const { setTheme } = themeSlice.actions;
