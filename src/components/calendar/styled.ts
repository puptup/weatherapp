import styled from "styled-components";

export const CalendarWrapper = styled.div`
  background-color: ${({ theme }) => theme.palette.block.secondary};
  padding: 5px;
  border-radius: 20px;
  flex: 1;
  margin-top: 10px;
  overflow: scroll;
  backdrop-filter: blur(35px);
`;

export const EventItem = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.item.primary};
  border-radius: 5px;
  padding: 5px;
  margin-bottom: 5px;
`;

export const Title = styled.div`
  text-align: center;
  margin-bottom: 10px;
`;

export const EventName = styled.div``;

export const EventTime = styled.div`
  font-size: 14px;
  margin-right: 20px;
`;

export const StartTime = styled.div``;
export const EndTime = styled.div``;

export const Line = styled.div`
  height: 1px;
  width: 100%;
  background: white;
`;

export const ButtonsWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: fit-content;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  color: #444;
  border: thin solid #888;
  border: 1px solid transparent;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 25%);
  transition: background-color 0.218s, border-color 0.218s, box-shadow 0.218s;
  border-radius: 1px;
  background-color: #4285f4;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 3px 3px rgb(66 133 244 / 30%);
    background-color: #4285f4;
  }
`;

export const ButtonText = styled.span`
  display: inline-block;
  vertical-align: middle;
  padding-left: 25px;
  padding-right: 25px;
  font-size: 16px;
  font-weight: bold;
  color: white;
`;

export const GoogleLogo = styled.img`
  display: block;
  width: 18px;
  height: 18px;
  margin: 1px;
  background-color: white;
`;

export const LogoWrapper = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`;
