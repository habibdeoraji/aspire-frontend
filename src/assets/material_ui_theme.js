import { createTheme } from "@mui/material/styles";

const customColors = {
  white: {
    50: "#FFFFFF",
    100: "#FCFCFC",
    200: "#F5F9FF",
    300: "#EDF3FF",
    400: "#F0F0F0",
    500: "#F5F5F5",
  },
  grey: {
    50: "#E5E5E5",
    200: "#EDFFF5",
    300: "#AAAAAA",
    400: "#222222",
  },
  blue: {
    100: "#23CEFD",
    200: "#325BAF",
    300: "#0C365A",
  },
  green: {
    50: "#DDFFEC",
    100: "#01D167",
  },
  other: {
    100: "#072A441F",
    200: "#009DFF1A",
    300: "#00D6B51A",
    400: "#F251951A",
    600: "#0000001F",
    700: "#00000014",
    800: "#0000000F",
    900: "#0000000A",
    1000: "#00000005",
  },
};

const theme = createTheme({
  palette: {
    common: {
      white: customColors.white[50],
      black: customColors.black,
    },
    primary: {
      main: customColors.blue[300],
      ...customColors.blue,
    },
    secondary: {
      main: customColors.green[100],
      ...customColors.green,
    },
    grey: {
      main: customColors.grey[300],
      ...customColors.grey,
    },
    white: {
      main: customColors.white[50],
      ...customColors.white,
    },
    whiteShades: customColors.white,
    greenShades: customColors.green,
    blueShades: customColors.blue,
    otherShades: customColors.other,
  },
  typography: {
    fontFamily: "Open Sans, sans-serif",
  },
});

export default theme;
