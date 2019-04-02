import { createMuiTheme } from "@material-ui/core/styles/index";

const palette = {
  primary: {
    main: "#001e3d",
    light: "#334b63",
    dark: "#00152a",
    contrastText: "#ffffff"
  },
  secondary: {
    main: "#fbfff7",
    light: "#fbfff8",
    dark: "#afb2ac",
    contrastText: "#000000"
  }
};

const typography = {
  headline: {
    color: "#000000",
    fontFamily: "Lato / sans-serif",
    lineHeight: "21px",
    fontSize: "24px",
    fontWeight: 400
  },
  display2: {
    marginLeft: "-0.32px",
    color: "#000000",
    fontFamily: "Lato / sans-serif",
    lineHeight: "18px",
    fontSize: "45px",
    fontWeight: 400
  },
  fontWeightLight: 300,
  display3: {
    marginLeft: "-0.32px",
    color: "#000000",
    fontFamily: "Lato / sans-serif",
    letterSpacing: "-0.32px",
    lineHeight: "21px",
    fontSize: "56px",
    fontWeight: 400
  },
  display4: {
    marginLeft: "-0.64px",
    color: "#000000",
    fontFamily: "Lato / sans-serif",
    letterSpacing: "-0.64px",
    lineHeight: "18px",
    fontSize: "112px",
    fontWeight: 400
  },
  fontWeightRegular: 400,
  display1: {
    color: "#000000",
    fontFamily: "Lato / sans-serif",
    lineHeight: "19px",
    fontSize: "34px",
    fontWeight: 400
  },
  button: {
    textTransform: "uppercase",
    color: "#000000",
    fontFamily: "Lato / sans-serif",
    fontSize: "14px",
    fontWeight: 500
  },
  fontFamily: "Lato / sans-serif",
  body2: {
    color: "#000000",
    fontFamily: "Lato / sans-serif",
    lineHeight: "27px",
    fontSize: "14px",
    fontWeight: 500
  },
  caption: {
    color: "#000000",
    fontFamily: "Lato / sans-serif",
    lineHeight: "22px",
    fontSize: "12px",
    fontWeight: 400
  },
  fontSize: 14,
  fontWeightMedium: 500,
  title: {
    color: "#000000",
    fontFamily: "Lato / sans-serif",
    lineHeight: "18px",
    fontSize: "21px",
    fontWeight: 500
  },
  subheading: {
    color: "#000000",
    fontFamily: "Lato / sans-serif",
    lineHeight: "24",
    fontSize: "16px",
    fontWeight: 400
  },
  heading: {
    color: "#000000",
    fontFamily: "Lato / sans-serif",
    lineHeight: "24",
    fontSize: "34px",
    fontWeight: 900
  },
  body1: {
    color: "#000000",
    fontFamily: "Lato / sans-serif",
    lineHeight: "23px",
    fontSize: "14px",
    fontWeight: 400
  }
};

export const theme = createMuiTheme({ palette, typography });
