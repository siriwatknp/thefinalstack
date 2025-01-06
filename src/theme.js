import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

// Create a theme instance.
const light_theme = createTheme({
  cssVariables: true,
  palette: {
    mode: "light",
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

const dark_theme = createTheme({
  cssVariables: true,
  palette: {
    mode: "dark",
    primary: {
      main: "#fff",
    },
    secondary: {
      main: "rgba(233, 30, 99, 1)",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});


const themeIdVsThemeObj = {
  light: light_theme,
  dark: dark_theme,
}

function getTheme(themeId) {
  return themeIdVsThemeObj[themeId];
}

export default {
  getTheme,
};
