import styled from "styled-components";

export const Time = styled.div`
  font-size: 32px;
`;

export const Date = styled.div`
  font-size: 16px;
`;

export const TimeDateWrapper = styled.div`
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.item.active};
  padding: ${({ theme }) => theme.spacing.padding};
  margin: ${({ theme }) => theme.spacing.betweenItems};
  border-radius: ${({ theme }) => theme.spacing.borderRadiusItem};
`;
