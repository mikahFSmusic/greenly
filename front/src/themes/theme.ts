import { createMuiTheme } from "@material-ui/core";

enum Colors {
  GREEN_TEXT_LIGHT = "#bcffa7",
  GREEN_TEXT_DARK = "#006b37",
  GREEN_BACKGROUND_DARK = "#003f1e",
}

const fontWeightRegular = 400;
const fontWeightMedium = 500;
const fontWeightBold = 600;

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: Colors.GREEN_TEXT_DARK,
      light: Colors.GREEN_TEXT_LIGHT,
    },
  },
  typography: {
    fontFamily: ["Avenir", "Montserrat", "Lato"].join(","),
    fontWeightRegular,
    fontWeightMedium,
    fontWeightBold,
    h1: {},
    h2: {},
    h3: {},
    h4: {},
    h5: {
      margin: "17px",
      fontWeight: fontWeightMedium,
    },
    body1: {},
    body2: {},
  },
});
