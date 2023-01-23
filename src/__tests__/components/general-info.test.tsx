import "@testing-library/jest-dom";

import { GeneralInfo } from "@components/general-info/general-info";
import { renderWithProviders } from "@utils/testing/render-with-providers";
import React from "react";

describe("general-info", () => {
  it("should contains time, date, city and country", () => {
    const { getByTestId } = renderWithProviders(<GeneralInfo />);
    expect(getByTestId("country-and-city")).toBeInTheDocument();
    expect(getByTestId("time")).toBeInTheDocument();
    expect(getByTestId("date")).toBeInTheDocument();
  });
});
