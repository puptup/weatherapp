import styled from "styled-components";

export const City = styled.div`
  font-size: 32px;
`;

export const Country = styled.span`
  font-size: 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.palette.item.primary};
  padding: ${({ theme }) => theme.spacing.padding};
  border-radius: ${({ theme }) => theme.spacing.borderRadiusItem};
  transition: all 0.15s linear;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.palette.item.hover};
  }
  &:active {
    background-color: ${({ theme }) => theme.palette.item.active};
  }
`;
