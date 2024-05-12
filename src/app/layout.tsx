import { theme } from '@/Types/Theme';
import { Navbar } from '@/components/Navbar';
import QueryProvider from '@/utils/QueryProvider';
import { CartProvider } from '@/utils/context/CartContext';
import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: "MKS Sistemas",
  description: "Products Store with MKS sistemas API",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="pt-br">
      <body>
        <ThemeProvider theme={theme}>
          <CartProvider>
            <CssBaseline />
            <Navbar />
            <QueryProvider>
              {children}
            </QueryProvider>
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
