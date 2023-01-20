import { State } from "@types";
import React from "react";

import { NotFound } from "./styled";

type RenderDesiredScreenProps = {
  state: State;
  children: React.ReactNode;
};

export const RenderDesiredScreen = ({ state, children }: RenderDesiredScreenProps) => {
  switch (state) {
    case State.loading: {
      return <div>Spinner</div>;
    }
    case State.error: {
      return <div>Something went wrong</div>;
    }
    case State.notFound: {
      return <NotFound>Not found info</NotFound>;
    }
    case State.normal: {
      return <>{children}</>;
    }

    default: {
      return <div>State is not found</div>;
    }
  }
};
