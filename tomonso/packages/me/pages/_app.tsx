import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { Paper, ThemeProvider } from '@material-ui/core';
import { darkTheme, lightTheme } from '../src/theme';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to me!</title>
      </Head>
      <ThemeProvider theme={false ? darkTheme : lightTheme}>
        <Paper>
          <Component {...pageProps} />
        </Paper>
      </ThemeProvider>
    </>
  );
}

export default CustomApp;
