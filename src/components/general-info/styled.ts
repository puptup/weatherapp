import styled from "styled-components";

export const InfoWrapper = styled.div`
  background-color: ${({ theme }) => theme.palette.block.secondary};
  border-radius: ${({ theme }) => theme.spacing.borderRadiusBlock};
  padding: ${({ theme }) => theme.spacing.padding};
  backdrop-filter: blur(35px);
`;

export const InfoItemsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
