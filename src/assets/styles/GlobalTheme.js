import { darken, lighten } from "polished";

const primaryColor = "#0062ff";
const secondaryColor = "#82c43c";

const GlobalTheme = {
  colors: {
    primary: {
      light: lighten(0.1, primaryColor),
      base: primaryColor,
      dark: darken(0.1, primaryColor),
    },
    secondary: {
      light: lighten(0.1, secondaryColor),
      base: secondaryColor,
      dark: darken(0.1, secondaryColor),
    },
  },
  font: {
    family: "Roboto, sans-serif",
  },
};

export default GlobalTheme;
