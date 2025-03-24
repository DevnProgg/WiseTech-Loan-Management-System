import { PaletteColorOptions, PaletteOptions } from '@mui/material/styles';
import {
  white2,
  gray,
  darkblue,
  blue,
  cyan,
  tomato,
  red,
  yellow,
  transparentRed,
  transparentYellow,
  transparentWhite2,
  transparentBlue,
  transparentCyan,
  transparentViolet,
  transparentTsc,
  tsc,
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


export const palette: PaletteOptions = {
    neutral: {
      light: gray[100],
      main: gray[500],
      dark: gray[600],
      darker: gray[700],
    },
    primary: {
      lighter: tsc[100],
      light: tsc[500],
      main: tsc[200],
      darker : tsc[700],
    },
    secondary: {
      light: cyan[500],
      main: blue[500],
      dark: blue[800],
    },
    info: {
      lighter: white2[100],
      main: white2[200],
      darker: darkblue[500],
    },
    success: {
      main: tsc[500],
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
      primary: tsc[700],
      secondary: gray[800],
      disabled: gray[500],
    },
    gradients: {
      primary: {
        main: tsc[100],
        state: tsc[500],
      },
      secondary: {
        main: tsc[200],
        state: tsc[100],
      },
    },
    transparent: {
      primary: {
        main: transparentTsc[500],
        dark: transparentViolet[700],
      },
      secondary: {
        lighter: transparentBlue[300],
        light: transparentCyan[500],
        main: transparentBlue[500],
      },
      info: {
        main: transparentWhite2[500],
      },
      success: {
        main: transparentTsc[500],
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