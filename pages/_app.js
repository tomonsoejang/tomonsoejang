import { Paper } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import Store, { StoreContext } from "../src/Store";
import '../src/styles/main.css';
import { darkTheme, lightTheme } from "../src/theme";

export default function MyApp({ Component, pageProps }) {    
  return (
    <Store>
      <StoreContext.Consumer>
        {([{darkMode}]) => (  
          <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <Paper>
              <Component {...pageProps} />
            </Paper>
          </ThemeProvider>
        )} 
      </StoreContext.Consumer>
    </Store>
  )
}