import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  
  render() {
    return (
      <Html lang="pt-br">
      <Head>
      <link rel="apple-touch-icon" sizes="180x180" href="/icons/icon-192x192.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://xmoedas.com.br" />
      <meta property="og:image" content="https://xmoedas.com.br/icone-midia.png" />
      <meta property="og:description" content="Veja a Cotação de Hoje das principais Moedas em relação ao Real." />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet"></link>

      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="msapplication-tap-highlight" content="no" />
      <link rel="manifest" href="/manifest.json" />

      {/*-- Google tag (gtag.js) */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-DS763N9YLS');
          `,
        }}
      />

      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8159596782031361"
      crossorigin="anonymous"></script>
      </Head>
        
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
