import styled from "styled-components";

export const PopUp = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000000ad;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InputBlock = styled.div`
  padding: ${({ theme }) => theme.spacing.padding};
  border-radius: ${({ theme }) => theme.spacing.borderRadiusBlock};
  width: 300px;
  height: 400px;
  background-color: ${({ theme }) => theme.palette.block.secondary};
  color: ${({ theme }) => theme.palette.text.primary};
  backdrop-filter: blur(400px);
`;

export const Title = styled.div`
  font-size: 16px;
  margin-bottom: ${({ theme }) => theme.spacing.betweenBlocks};
  text-align: center;
`;

export const Item = styled.div`
  padding: ${({ theme }) => theme.spacing.padding};
  background-color: ${({ theme }) => theme.palette.item.primary};
  border-radius: ${({ theme }) => theme.spacing.borderRadiusItem};
  margin: ${({ theme }) => theme.spacing.blockOutside};
`;

export const Input = styled.input`
  width: 100%;
  height: 30px;
  margin-bottom: ${({ theme }) => theme.spacing.blockOutside};
`;
