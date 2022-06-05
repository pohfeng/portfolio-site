import { ThemeProvider } from 'next-themes';
import '../styles/globals.css';

import MainNavigation from '../components/Layout/MainNavigation';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="dark">
      <MainNavigation />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
