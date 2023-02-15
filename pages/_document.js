import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="pt-br">
      <Head>
       <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
       <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
       <meta property="og:type" content="website" />
       <meta property="og:url" content="https://xmoedas.com.br" />
       <meta property="og:image" content="https://xmoedas.com.br/icone-midia.png" />
       <meta property="og:description" content="Veja a Cotação de Hoje das principais Moedas em relação ao Real." />
       <link rel="preconnect" href="https://fonts.googleapis.com"/>
       <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
       <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet"/>
       
       <meta name="application-name" content="PWA App" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="PWA App" />
      <meta name="description" content="Best PWA App in the world" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="msapplication-config" content="/icons/browserconfig.xml" />
      <meta name="msapplication-TileColor" content="#2B5797" />
      <meta name="msapplication-tap-highlight" content="no" />
      <meta name="theme-color" content="#000000" />
       
       <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'/>
       <meta name="mobile-web-app-capable" content="yes"/>
       <link rel="manifest" href="/manifest.json" />
      </Head>
        
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
