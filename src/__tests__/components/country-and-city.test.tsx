import "@testing-library/jest-dom";

import { CountryAndCity } from "@components/country-and-city/country-and-city";
import * as selectors from "@store/selectors";
import { fireEvent } from "@testing-library/react";
import { State } from "@types";
import { renderWithProviders } from "@utils/testing/render-with-providers";
import React from "react";

describe("country-and-city", () => {
  it("should show country and city", () => {
    jest.spyOn(selectors, "geopositionSelector").mockReturnValue({
      city: "Test-City",
      country: "Test-Country",
      geopositionState: State.normal,
    });
    const { getByTestId } = renderWithProviders(<CountryAndCity />);
    expect(getByTestId("country-and-city-normal-state")).toHaveTextContent(
      "Test-City, Test-Country"
    );
  });

  it("should open popup on click", () => {
    const { getByTestId, queryByTestId } = renderWithProviders(<CountryAndCity />);
    const wrapper = getByTestId("country-and-city");

    expect(queryByTestId("popup")).not.toBeInTheDocument();
    fireEvent.click(wrapper);
    expect(getByTestId("popup")).toBeInTheDocument();
  });
});
