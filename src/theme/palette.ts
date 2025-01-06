import { PaletteColorOptions, PaletteOptions } from '@mui/material/styles';
import {
  white,
  gray,
  darkblue,
  blue,
  cyan,
  tomato,
  red,
  green,
  yellow,
  transparentRed,
  transparentGreen,
  transparentYellow,
  transparentWhite,
  transparentBlue,
  transparentCyan,
  transparentViolet,
} from './colors';

declare module '@mui/material/styles' {
  interface PaletteOptions {
    neutral?: PaletteColorOptions;
    transparent?: {
      primary: PaletteColorOptions;
      secondary: PaletteColorOptions;
      info: PaletteColorOptions;
      success: PaletteColorOptions;
      warning: PaletteColorOptions;
      error: PaletteColorOptions;
    };
    gradients?: {
      primary: PaletteColorOptions;
      secondary?: PaletteColorOptions;
    };
  }
  interface SimplePaletteColorOptions {
    lighter?: string;
    darker?: string;
    state?: string;
  }
  interface Palette {
    neutral: PaletteColor;
    gradients: {
      primary: PaletteColor;
      secondary: PaletteColor;
    };
    transparent: {
      primary: PaletteColor;
      secondary: PaletteColor;
      info: PaletteColor;
      success: PaletteColor;
      warning: PaletteColor;
      error: PaletteColor;
    };
  }
  interface PaletteColor {
    lighter: string;
    darker: string;
    state: string;
  }
}

const palette: PaletteOptions = {
  neutral: {
    light: gray[100],
    main: gray[500],
    dark: gray[600],
    darker: gray[700],
  },
  primary: {
    lighter: green[200],
    light: green[300],
    main: green[500],
  },
  secondary: {
    light: cyan[500],
    main: blue[500],
    dark: blue[800],
  },
  info: {
    lighter: white[100],
    main: white[200],
    darker: darkblue[500],
  },
  success: {
    main: green[500],
  },
  warning: {
    main: yellow[500],
  },
  error: {
    light: tomato[500],
    main: red[500],
    dark: red[800],
  },
  text: {
    primary: green[700],
    secondary: gray[800],
    disabled: gray[500],
  },
  gradients: {
    primary: {
      main: green[200],
      state: green[300],
    },
    secondary: {
      main: green[200],
      state: green[300],
    },
  },
  transparent: {
    primary: {
      main: transparentGreen[500],
      dark: transparentViolet[700],
    },
    secondary: {
      lighter: transparentBlue[300],
      light: transparentCyan[500],
      main: transparentBlue[500],
    },
    info: {
      main: transparentWhite[500],
    },
    success: {
      main: transparentGreen[500],
    },
    warning: {
      main: transparentYellow[500],
      dark: transparentYellow[700],
    },
    error: {
      light: transparentRed[200],
      main: transparentRed[500],
    },
  },
};

export default palette;
