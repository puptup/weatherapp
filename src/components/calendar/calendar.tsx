import { hourAndMinutesOptions } from "@constants/date-and-time";
import { useAppSelector } from "@hooks";
import { useCalendar } from "@hooks/useCalendar";
import { calendarSelector, currentDaySelector } from "@store/selectors";
import { getWeekdayOrToday } from "@utils/date";
import React from "react";
import { shallowEqual } from "react-redux";

import Logo from "../../assets/g.png";
import {
  Button,
  ButtonsWrapper,
  ButtonText,
  CalendarWrapper,
  EndTime,
  EventItem,
  EventName,
  EventTime,
  GoogleLogo,
  Line,
  LogoWrapper,
  StartTime,
  Title,
} from "./styled";

export const Calendar = () => {
  const { handleSignIn, handleSignOut } = useCalendar();
  const { isLogged, events } = useAppSelector(calendarSelector, shallowEqual);
  const currentDay = useAppSelector(currentDaySelector);
  const WeekDay = getWeekdayOrToday(currentDay);

  return (
    <>
      <CalendarWrapper>
        <Title>
          {isLogged
            ? `${WeekDay}'s calendar events`
            : "Please sign in with Google to see calendar events"}
        </Title>
        {events.map((event) => (
          <EventItem key={event.id}>
            <EventTime>
              <StartTime>
                {new Date(event.start).toLocaleTimeString("en-GB", hourAndMinutesOptions)}
              </StartTime>
              <Line />
              <EndTime>
                {new Date(event.end).toLocaleTimeString("en-GB", hourAndMinutesOptions)}
              </EndTime>
            </EventTime>
            <EventName>{event.name}</EventName>
          </EventItem>
        ))}
      </CalendarWrapper>
      <ButtonsWrapper>
        <Button onClick={!isLogged ? handleSignIn : handleSignOut}>
          <LogoWrapper>
            <GoogleLogo src={Logo} alt="google logo" />
          </LogoWrapper>
          <ButtonText>{!isLogged ? "Sign in" : "Sign out"}</ButtonText>
        </Button>
      </ButtonsWrapper>
    </>
  );
};
