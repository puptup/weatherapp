import "@testing-library/jest-dom";

import { TimeAndDate } from "@components/time-and-date/time-and-date";
import { renderWithProviders } from "@utils/testing/render-with-providers";
import React from "react";

const wholeDate = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
} as const;

const hourAndMinutes = { hour: "2-digit", minute: "2-digit" } as const;

describe("Time and date", () => {
  it("should have time and date", () => {
    const { getByTestId } = renderWithProviders(<TimeAndDate />);

    expect(getByTestId("time")).toBeInTheDocument();
    expect(getByTestId("date")).toBeInTheDocument();

    const time = new Date().toLocaleTimeString("en-GB", hourAndMinutes);
    const date = new Date().toLocaleDateString("en-GB", wholeDate);

    expect(getByTestId("time")).toHaveTextContent(time);
    expect(getByTestId("date")).toHaveTextContent(date);
  });
});
