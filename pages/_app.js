import { GlobalStyles } from '/styles/Global';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Light from "styles/Themes/Light";
import Layout from 'components/Layout/Layout';

export default function App({ Component, pageProps }) {
  
  return (
    <>
    <ThemeProvider theme={Light}>
      <GlobalStyles />
        <Layout>
         <Component {...pageProps} />
        </Layout>
    </ThemeProvider>
    </>
  )
}
