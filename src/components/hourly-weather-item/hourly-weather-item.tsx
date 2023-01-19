import { hoursOptions } from "@constants/date-and-time";
import { HourlyWeather } from "@types";
import { loadIcon } from "@utils/loadImage";
import React, { useEffect, useState } from "react";

import { Image, Item } from "./styled";

type HourlyWeatherItemProps = {
  item: HourlyWeather;
};

export const HourlyWeatherItem = ({ item }: HourlyWeatherItemProps) => {
  const { date, temperature, icon } = item;
  const [image, setImage] = useState(undefined);

  useEffect(() => {
    loadIcon(icon, true).then((path) => {
      setImage(path.default);
    });
  }, []);

  return (
    <Item>
      <div>{new Date(date).toLocaleTimeString("en-GB", hoursOptions)}</div>
      <Image src={image} alt="hourly weahter" />
      <div>{Math.round(temperature)}</div>
    </Item>
  );
};
