import { App } from "@app";
import { ErrorBoundary } from "@components/error-boundary";
import { persistor, store } from "@store";
import { GlobalStyle, theme } from "@theme";
import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "styled-components";

const root = createRoot(document.getElementById("root") as HTMLDivElement);

root.render(
  <ErrorBoundary>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </PersistGate>
    </Provider>
    <GlobalStyle />
  </ErrorBoundary>
);
