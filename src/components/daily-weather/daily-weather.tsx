import { WeatherItemContainer } from "@components/daily-weather-item";
import { useAppSelector } from "@hooks";
import { currentDaySelector, dailyWeatherSelector } from "@store/selectors";
import React from "react";

import { TitleWrapper, WeatherContainer } from "./styled";

export const DailyWeather = () => {
  const { isLoading, hasError, weather } = useAppSelector(dailyWeatherSelector);
  const currentDay = useAppSelector(currentDaySelector);

  if (hasError) {
    return <div>Something went wrong...</div>;
  }

  return (
    <WeatherContainer>
      <TitleWrapper>Weekly forecast</TitleWrapper>
      {isLoading ? (
        <div>spinner</div>
      ) : (
        weather.map((item) => (
          <WeatherItemContainer
            key={item.date}
            item={item}
            currentDay={new Date(currentDay).getDay() === new Date(item.date).getDay()}
          />
        ))
      )}
    </WeatherContainer>
  );
};
