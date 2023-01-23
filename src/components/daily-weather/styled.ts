import { device } from "@constants/devices";
import styled from "styled-components";

export const WeatherContainer = styled.div`
  background-color: ${({ theme }) => theme.palette.block.secondary};
  padding: ${({ theme }) => theme.spacing.padding};
  border-radius: ${({ theme }) => theme.spacing.borderRadiusBlock};
  color: ${({ theme }) => theme.palette.text.primary};
  min-width: 240px;
  backdrop-filter: blur(100px);
`;

export const TitleWrapper = styled.div`
  font-size: 16px;
  margin-bottom: ${({ theme }) => theme.spacing.betweenBlocks};
  text-align: center;
`;

export const DailyWeatherContainer = styled.div`
  @media ${device.laptop} {
    display: flex;
    gap: 34px;
    padding: 5px;
    overflow: hidden;
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: white;
  display: none;

  @media ${device.laptop} {
    display: block;
  }
`;
