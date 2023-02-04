import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
       <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico"/>
       <meta property="og:type" content="website" />
       <meta property="og:url" content="https://conversor-moedas-two.vercel.app/" />
       <meta property="og:image" content="https://conversor-moedas-two.vercel.app/icone-midia.jpeg" />
       <meta property="og:description" content="Veja a Cotação de Hoje das principais Moedas em relação ao Real." />
       
       <meta name="twitter:site" content="@nytimesbits" />
       <meta name="twitter:creator" content="@nickbilton" />
       <meta property="og:url" content="https://conversor-moedas-two.vercel.app/" />
       <meta property="og:title" content="Dólar hoje" />
       <meta property="og:description" content="Veja a Cotação de Hoje das principais Moedas em relação ao Real. " />
       <meta property="og:image" content="https://conversor-moedas-two.vercel.app/icone-midia.jpeg" />

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
