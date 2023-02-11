import { GlobalStyles } from '/styles/Global';
import React, { useState, useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import Light from "styles/Themes/Light";

export default function App({ Component, pageProps }) {
  
  return (
    <>
    <ThemeProvider theme={Light}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
    </>
  )
}
