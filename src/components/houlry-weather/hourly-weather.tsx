/* eslint-disable no-nested-ternary */
import { HourlyWeatherItem } from "@components/hourly-weather-item";
import { RenderDesiredScreen } from "@components/render-desired-screen";
import { useAppSelector } from "@hooks";
import {
  currentDaySelector,
  hourlyWeatherCurrentSelector,
  hourlyWeatherStateSelector,
} from "@store/selectors";
import { getWeekdayOrToday } from "@utils/date";
import React from "react";

import { HourlyWeatherWrapper, ItemsWrapper, Line, TitleWrapper } from "./styled";

export const HourlyWeather = () => {
  const state = useAppSelector(hourlyWeatherStateSelector);
  const weather = useAppSelector(hourlyWeatherCurrentSelector);
  const currentDay = useAppSelector(currentDaySelector);
  const WeekDay = getWeekdayOrToday(currentDay);

  return (
    <HourlyWeatherWrapper>
      <TitleWrapper data-testid="hourly-weather-title">
        {WeekDay}&apos;s hourly forecast
      </TitleWrapper>
      <Line />
      <ItemsWrapper>
        <RenderDesiredScreen state={state}>
          {weather.map((item) => (
            <HourlyWeatherItem item={item} key={item.date} />
          ))}
        </RenderDesiredScreen>
      </ItemsWrapper>
      <Line />
    </HourlyWeatherWrapper>
  );
};
