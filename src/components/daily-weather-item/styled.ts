import styled from "styled-components";

type WeatherItemProps = {
  active: boolean;
};

export const WeatherItem = styled.div<WeatherItemProps>`
  position: relative;
  width: 230px;
  padding: ${({ theme }) => theme.spacing.padding};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  border-radius: ${({ theme }) => theme.spacing.borderRadiusItem};
  background-color: ${({ active, theme }) =>
    active ? theme.palette.item.active : theme.palette.item.primary};
  margin-bottom: ${({ theme }) => theme.spacing.betweenItems};
  transition: all 0.15s linear;
  ${({ active, theme }) =>
    !active &&
    `
    cursor: pointer;
    &:hover {
      background-color: ${theme.palette.item.hover};
    }
  
    &:active {
      background-color: ${theme.palette.item.active};
    }
  `}
`;

export const DateWrapper = styled.div``;

export const AverageTemp = styled.span``;
export const MinMaxTemp = styled.span``;

export const Image = styled.img`
  display: block;
  margin: 0 auto;
  width: 40px;
  height: 40px;
`;

export const TempWrapper = styled.div`
  transition: all 0.15s linear;
  text-align: center;
`;
