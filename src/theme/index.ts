import { GlobalStyle } from "./global-style";

export { GlobalStyle };

const spacing = {
  padding: "5px",
  blockOutside: "5px",
  betweenBlocks: "10px",
  betweenItems: "5px",
  borderRadiusBlock: "20px",
  borderRadiusItem: "5px",
};

export const theme = {
  palette: {
    background: {
      primary: "#7eb8de",
    },
    block: {
      primary: "white",
      secondary: "#ffffff2b",
    },
    item: {
      primary: "#ffffff4f",
      active: "#e0e0e024",
      hover: "#7cb3fbd4",
    },
    text: {
      primary: "white",
    },
  },
  spacing,
};
