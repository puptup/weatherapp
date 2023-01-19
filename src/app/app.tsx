import { ErrorBoundary } from "@components/error-boundary";
import { MainScreen } from "@components/main-screen";
import { persistor, store } from "@store";
import { GlobalStyle, theme } from "@theme";
import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "styled-components";

export const App = () => {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ThemeProvider theme={theme}>
            <MainScreen />
          </ThemeProvider>
        </PersistGate>
      </Provider>
      <GlobalStyle />
    </ErrorBoundary>
  );
};
