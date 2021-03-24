import { darken, lighten } from "polished";

const primaryColor = "#004643";
const secondaryColor = "#FAF4D3";

const GlobalTheme = {
  colors: {
    primary: {
      light: lighten(0.1, primaryColor),
      normal: primaryColor,
      dark: darken(0.1, primaryColor),
    },

    secondary: {
      light: lighten(0.1, secondaryColor),
      normal: secondaryColor,
      dark: darken(0.1, secondaryColor),
    },
  },

  font: {
    family: "Roboto, sans-serif",
  },

  page: {
    backgroundColor: "#fff",
  },

  navbar: {
    height: "60px",
  },

  border: {
    radius: "6px",
  },
};

export default GlobalTheme;
