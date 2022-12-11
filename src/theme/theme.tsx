import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.fonts.ubuntu};
    }
`;

export const colors = {
  "marine-blue": "hsl(213, 96%, 18%)",
  "purplish-blue": "hsl(243, 100%, 62%)",
  "pastel-blue": "hsl(228, 100%, 84%)",
  "light-blue": "hsl(206, 94%, 87%)",
  "strawberry-red": "hsl(354, 84%, 57%)",
  "cool-gray": "hsl(231, 11%, 63%)",
  "light-gray": "hsl(229, 24%, 87%)",
  magnolia: "hsl(217, 100%, 97%)",
  alabaster: "hsl(231, 100%, 99%)",
  white: "hsl(0, 0%, 100%)",
};

export const fonts = {
  ubuntu: "Ubuntu",
};

export type Color = keyof typeof colors;

const theme = {
  colors,
  fonts,
};

// type augmentation
type Theme = typeof theme;
declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}

export default theme;
