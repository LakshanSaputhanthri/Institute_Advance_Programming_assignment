import { createTheme } from "@mui/material/styles";

export const initTheme = createTheme({
  typography: { fontFamily: '"Lexend", sans-serif' },
  palette: {
    primary: {
      light: "#2C7EBC",
      main: "#005A9D",
      dark: "#08263C",
      "600": "#012D4E",
      "900": "#000E17",
    },
    secondary: {
      light: "#F9F2F1",
      main: "#FFA45B",
      dark: "#FF7F1F",
    },
    success: {
      main: "#34D399",
    },
    error: {
      main: "#FC3D31",
    },
    warning: {
      main: "#FF9900",
    },
    text: {
      primary: "#354151",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1600,
    },
  },
});

export const theme = createTheme({
  ...initTheme,
  zIndex: {
    drawer: 1400,
    modal: 1500,
  },
  components: {
    MuiCard: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          borderRadius: initTheme.spacing(3),
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: initTheme.spacing(5),
        },
      },
      defaultProps: {
        type: "button",
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: initTheme.spacing(2),
        },
      },
    },
  },
});

export type Theme = typeof theme;
