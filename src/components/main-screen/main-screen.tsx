/* eslint-disable react-hooks/exhaustive-deps */
import { Calendar } from "@components/calendar";
import { DailyWeather } from "@components/daily-weather";
import { GeneralInfo } from "@components/general-info";
import { HourlyWeather } from "@components/houlry-weather";
import { useAppDispatch, useAppSelector } from "@hooks";
import { initialApp } from "@store/actions-creators";
import { themeSelector } from "@store/selectors";
import React, { useEffect } from "react";

import { Container, MainWrapper, Wrapper } from "./styled";

export const MainScreen = () => {
  const dispatch = useAppDispatch();
  const background = useAppSelector(themeSelector);

  useEffect(() => {
    dispatch(initialApp());
  }, []);

  return (
    <MainWrapper background={background}>
      <Container>
        <Wrapper>
          <GeneralInfo />
          <Calendar />
        </Wrapper>
        <HourlyWeather />
      </Container>
      <DailyWeather />
    </MainWrapper>
  );
};
