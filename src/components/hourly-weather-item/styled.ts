import styled from "styled-components";

export const Image = styled.img`
  display: block;
  margin: 0 auto;
  width: 40px;
  height: 40px;
`;

export const Item = styled.div`
  width: 60px;
  background-color: ${({ theme }) => theme.palette.item.primary};
  border-radius: ${({ theme }) => theme.spacing.borderRadiusItem};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.padding};
  margin: ${({ theme }) => theme.spacing.blockOutside};
  flex-shrink: 0;
`;
