import { State } from "@types";
import React from "react";

import { Text } from "./styled";

type RenderDesiredScreenProps = {
  state: State;
  children: React.ReactNode;
};

export const RenderDesiredScreen = ({ state, children }: RenderDesiredScreenProps) => {
  switch (state) {
    case State.loading: {
      return <Text data-testid="loading-state">Loading...</Text>;
    }
    case State.error: {
      return <Text data-testid="error-state">Something went wrong</Text>;
    }
    case State.notFound: {
      return <Text data-testid="notfound-state">Not found info</Text>;
    }
    case State.normal: {
      return <>{children}</>;
    }

    default: {
      return <Text>State is not found</Text>;
    }
  }
};
