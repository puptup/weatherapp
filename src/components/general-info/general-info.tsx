import { CountryAndCity } from "@components/country-and-city";
import { TimeAndDate } from "@components/time-and-date";
import React from "react";

import { InfoItemsWrapper, InfoWrapper } from "./styled";

export const GeneralInfo = () => {
  return (
    <InfoWrapper>
      <InfoItemsWrapper>
        <TimeAndDate />
        <CountryAndCity />
      </InfoItemsWrapper>
    </InfoWrapper>
  );
};
