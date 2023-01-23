/* eslint-disable import/no-extraneous-dependencies */
import { store } from "@store";
import { render } from "@testing-library/react";
import { theme } from "@theme";
import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

export const renderWithProviders = (component: JSX.Element | JSX.Element[]) => {
  return render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>{component}</ThemeProvider>
    </Provider>
  );
};
