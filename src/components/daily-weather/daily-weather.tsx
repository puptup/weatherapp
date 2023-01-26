import { DailyWeatherItem } from "@components/daily-weather-item";
import { RenderDesiredScreen } from "@components/render-desired-screen";
import { useAppSelector } from "@hooks";
import {
  currentDaySelector,
  dailyWeatherSelector,
  dailyWeatherStateSelector,
} from "@store/selectors";
import React from "react";

import { DailyWeatherContainer, Line, TitleWrapper, WeatherContainer } from "./styled";

export const DailyWeather = () => {
  const state = useAppSelector(dailyWeatherStateSelector);
  const weather = useAppSelector(dailyWeatherSelector);
  const currentDay = useAppSelector(currentDaySelector);

  return (
    <WeatherContainer>
      <TitleWrapper>Weekly forecast</TitleWrapper>
      <RenderDesiredScreen state={state}>
        <Line />
        <DailyWeatherContainer>
          {weather.map((item) => (
            <DailyWeatherItem
              key={item.date}
              item={item}
              currentDay={new Date(currentDay).getDay() === new Date(item.date).getDay()}
            />
          ))}
        </DailyWeatherContainer>
        <Line />
      </RenderDesiredScreen>
    </WeatherContainer>
  );
};
