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
