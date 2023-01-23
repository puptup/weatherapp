import { device } from "@constants/devices";
import { loadBackground } from "@utils/loadImage";
import styled from "styled-components";

type MainWrapperProps = {
  background: string;
};

export const MainWrapper = styled.div<MainWrapperProps>`
  max-width: 1024px;
  width: 100vw;
  background-image: url(${({ background }) => loadBackground(background)});
  background-size: 100%;
  padding: ${({ theme }) => theme.spacing.betweenBlocks};
  border-radius: ${({ theme }) => theme.spacing.borderRadiusBlock};
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  align-items: stretch;
  gap: ${({ theme }) => theme.spacing.betweenBlocks};
  box-shadow: rgb(12 14 16 / 26%) 19px 20px 21px 0px;
  margin-top: 60px;

  @media ${device.laptop} {
    flex-direction: column;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`;

export const Wrapper = styled.div`
  color: ${({ theme }) => theme.palette.text.primary};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  margin-bottom: ${({ theme }) => theme.spacing.betweenBlocks};
  min-height: 280px;
`;
