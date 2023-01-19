import styled from "styled-components";

export const HourlyWeatherWrapper = styled.div`
  padding: ${({ theme }) => theme.spacing.padding};
  padding-bottom: ${({ theme }) => theme.spacing.betweenBlocks};
  background-color: ${({ theme }) => theme.palette.block.secondary};
  border-radius: ${({ theme }) => theme.spacing.borderRadiusBlock};
  color: ${({ theme }) => theme.palette.text.primary};
  max-width: 730px;
  min-height: 134px;
  backdrop-filter: blur(100px);
`;

export const TitleWrapper = styled.div`
  font-size: 16px;
  margin-bottom: ${({ theme }) => theme.spacing.betweenBlocks};
  text-align: center;
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: white;
`;

export const ItemsWrapper = styled.div`
  display: flex;
  min-height: 88px;
  overflow: scroll;
  gap: 34px;
`;

export const NotFound = styled.span`
  text-align: center;
  width: 100%;
`;
