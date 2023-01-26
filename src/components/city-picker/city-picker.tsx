/* eslint-disable no-nested-ternary */
import { RenderDesiredScreen } from "@components/render-desired-screen";
import { useAppSelector } from "@hooks";
import { changeCity, matchCity } from "@store/actions-creators";
import { citySelector, matchedCitiesSelector, matchedCitiesStateSelector } from "@store/selectors";
import { MatchedCitiesType } from "@types";
import React, { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { Input, InputBlock, Item, PopUp, Title } from "./styled";

type CityPickerProps = {
  handleClose: () => void;
};

export const CityPicker = ({ handleClose }: CityPickerProps) => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const state = useAppSelector(matchedCitiesStateSelector);
  const currentCity = useAppSelector(citySelector);
  const cities = useAppSelector(matchedCitiesSelector);

  useEffect(() => {
    setInput(currentCity);
  }, []);

  const handleClick = (event: MouseEvent) => {
    event.stopPropagation();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setInput(value);
    dispatch(matchCity(value));
  };

  const handleChangeCurrentCity = (item: MatchedCitiesType) => () => {
    dispatch(changeCity(item));
    handleClose();
  };

  return (
    <PopUp data-testid="popup" onClick={handleClose}>
      <InputBlock onClick={handleClick}>
        <Title>City picker</Title>
        <Input type="text" onChange={handleChange} value={input} />
        <RenderDesiredScreen state={state}>
          {cities.map((item) => (
            <Item key={item.name + item.country} onClick={handleChangeCurrentCity(item)}>
              {item.name}, {item.country}
            </Item>
          ))}
        </RenderDesiredScreen>
      </InputBlock>
    </PopUp>
  );
};
