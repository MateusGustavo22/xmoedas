import { GlobalStyles } from '/styles/Global';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Light from "styles/Themes/Light";
import Layout from 'components/Layout/Layout';
import Document, { Head } from 'next/document';


export default function App({ Component, pageProps }) {
  if (Component.noLayout) {
    return (
      <>
      <Component {...pageProps}/>;
      </>
    )
  }
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
