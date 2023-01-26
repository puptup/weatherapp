import { hourAndMinutesOptions, wholeDate } from "@constants/date-and-time";
import React, { useEffect, useState } from "react";

import { Date as StyledDate, Time, TimeDateWrapper } from "./styled";

export const TimeAndDate = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  return (
    <TimeDateWrapper data-testid="time-date">
      <Time data-testid="time">{date.toLocaleTimeString("en-GB", hourAndMinutesOptions)}</Time>
      <StyledDate data-testid="date">{date.toLocaleDateString("en-GB", wholeDate)}</StyledDate>
    </TimeDateWrapper>
  );
};
