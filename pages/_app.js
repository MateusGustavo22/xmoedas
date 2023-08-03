import Layout from 'components/Layout'
import Head from 'next/head'
import '../styles/Global.css'
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  if (Component.noLayout) {
    return (
      <>
        <Component {...pageProps} />;
      </>
    )
  }
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=yes, viewport-fit=cover"
        />
      </Head>

      {/* Google tag (gtag.js)  */}
      <Script strategy='afterInteractive' src="https://www.googletagmanager.com/gtag/js?id=G-1FRYX7FHXY"/>

      <Script id="google-analytics" strategy='afterInteractive'>
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-1FRYX7FHXY');
        `}
      </Script>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
