import { GlobalStyles } from '/styles/Global';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Light from "styles/Themes/Light";
import Layout from 'components/Layout/Layout';
import Head from 'next/head';

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
    <Head>
      <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'/>
    </Head>
    <ThemeProvider theme={Light}>
      <GlobalStyles />
        <Layout>
         <Component {...pageProps} />
        </Layout>
    </ThemeProvider>
    </>
  )
}
