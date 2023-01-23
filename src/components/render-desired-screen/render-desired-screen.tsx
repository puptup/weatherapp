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
      return <Text>Loading...</Text>;
    }
    case State.error: {
      return <Text>Something went wrong</Text>;
    }
    case State.notFound: {
      return <Text>Not found info</Text>;
    }
    case State.normal: {
      return <>{children}</>;
    }

    default: {
      return <Text>State is not found</Text>;
    }
  }
};
