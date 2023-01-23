import "@testing-library/jest-dom";

import { RenderDesiredScreen } from "@components/render-desired-screen/render-desired-screen";
import { render } from "@testing-library/react";
import { State } from "@types";
import React from "react";

const NormalComponent = () => <div data-testid="normal">NormalState</div>;

describe("render-desired-screen", () => {
  it("should render error component on error state", () => {
    const { getByTestId } = render(
      <RenderDesiredScreen state={State.error}>
        <NormalComponent />
      </RenderDesiredScreen>
    );

    expect(getByTestId("error-state")).toBeInTheDocument();
  });

  it("should render  normal component on normal state", () => {
    const { getByTestId } = render(
      <RenderDesiredScreen state={State.normal}>
        <NormalComponent />
      </RenderDesiredScreen>
    );

    expect(getByTestId("normal")).toBeInTheDocument();
  });

  it("should render not-found component on not-found state", () => {
    const { getByTestId } = render(
      <RenderDesiredScreen state={State.notFound}>
        <NormalComponent />
      </RenderDesiredScreen>
    );

    expect(getByTestId("notfound-state")).toBeInTheDocument();
  });

  it("should render loading component on loading state", () => {
    const { getByTestId } = render(
      <RenderDesiredScreen state={State.loading}>
        <NormalComponent />
      </RenderDesiredScreen>
    );

    expect(getByTestId("loading-state")).toBeInTheDocument();
  });
});
