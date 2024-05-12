'use client';
import { createTheme } from '@mui/material/styles';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  weight: ['300', '400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0F52BA',
      dark: '#0F52BA',
    },
    secondary: {
      main: '#FFFFFF',
      dark: '#FFFFFF',
    },
    info: {
      main: '#373737',
      dark: '#FFFFFF',
    },
    text: {
      primary: '#2C2C2C',
    }
  },
  typography: {
    fontFamily: montserrat.style.fontFamily,
  },
});