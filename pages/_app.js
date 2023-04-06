import Layout from 'components/Layout/Layout';
import Head from 'next/head';
import '../styles/Global.scss';

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
      <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=yes, viewport-fit=cover'/>
    </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
