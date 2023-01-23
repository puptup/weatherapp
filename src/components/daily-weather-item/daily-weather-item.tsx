import { useAppDispatch } from "@hooks";
import { setDayAction } from "@store/actions-creators";
import { setTheme } from "@store/reducers/theme-slice";
import { DailyWeather } from "@types";
import { getWeekdayOrToday } from "@utils/date";
import { loadIcon } from "@utils/loadImage";
import { getThemeByIcon } from "@utils/theme-by-icon";
import React, { useEffect, useState } from "react";

import { AverageTemp, DateWrapper, Image, TempWrapper, WeatherItem } from "./styled";

type DailyWeatherItemProps = {
  item: DailyWeather;
  currentDay: boolean;
};

export const DailyWeatherItem = ({ item, currentDay }: DailyWeatherItemProps) => {
  const [image, setImage] = useState<string>();
  const dispatch = useAppDispatch();

  const { icon, date, temperature } = item;

  useEffect(() => {
    loadIcon(icon).then((path) => {
      setImage(path.default);
    });
  }, []);

  const handleDay = () => {
    if (!currentDay) {
      dispatch(setDayAction(new Date(date)));
      const newTheme = getThemeByIcon(icon);
      dispatch(setTheme(newTheme));
    }
  };

  return (
    <WeatherItem active={currentDay} onClick={handleDay} data-testid="daily-weather-item">
      <DateWrapper>{getWeekdayOrToday(new Date(date), true)}</DateWrapper>
      <Image src={image} alt="weather icon" />
      <TempWrapper>
        <AverageTemp>{Math.round(temperature)}</AverageTemp>
      </TempWrapper>
    </WeatherItem>
  );
};
