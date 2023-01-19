/* eslint-disable no-nested-ternary */
import { HourlyWeatherItem } from "@components/hourly-weather-item";
import { useAppSelector } from "@hooks";
import { currentDaySelector, hourlyWeatherSelector } from "@store/selectors";
import { getWeekdayOrToday } from "@utils/date";
import React from "react";

import { HourlyWeatherWrapper, ItemsWrapper, Line, NotFound, TitleWrapper } from "./styled";

export const HourlyWeather = () => {
  const { isLoading, hasError, weatherOnCurrentDay } = useAppSelector(hourlyWeatherSelector);
  const currentDay = useAppSelector(currentDaySelector);
  const WeekDay = getWeekdayOrToday(currentDay);

  if (hasError) {
    return <div>Something went wrong...</div>;
  }

  return (
    <HourlyWeatherWrapper>
      <TitleWrapper>{WeekDay}&apos;s hourly forecast</TitleWrapper>
      <Line />
      <ItemsWrapper>
        {isLoading ? (
          <div>Spinner</div>
        ) : weatherOnCurrentDay.length > 0 ? (
          weatherOnCurrentDay.map((item) => <HourlyWeatherItem item={item} key={item.date} />)
        ) : (
          <NotFound>Information not found</NotFound>
        )}
      </ItemsWrapper>
      <Line />
    </HourlyWeatherWrapper>
  );
};
