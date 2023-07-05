import Head from 'next/head';
import Converter from 'components/Converter';
import Table from 'components/Table/Table';
import { fetchDataChart } from '@/utils/getChartData';
import { getCurrencyRate } from '@/utils/getCurrencyRate';
export async function getStaticProps() {
  const currencyCode = 'RUB';

  const currencyRate = await getCurrencyRate(currencyCode);

  const last7days = await fetchDataChart(`https://economia.awesomeapi.com.br/json/daily/${currencyCode}-BRL/7`);
  const last30days = await fetchDataChart(`https://economia.awesomeapi.com.br/json/daily/${currencyCode}-BRL/30`);
  const last365days = await fetchDataChart(`https://economia.awesomeapi.com.br/json/daily/${currencyCode}-BRL/365`);

  return {
    props: {
      currencyCode,
      currencyRate,
      last7days,
      last30days,
      last365days,
    },
    revalidate: 3600,
  };
}

export default function Home(props) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Cotação atualizada do yuan chinês hoje em relação ao real. Conversor de moedas e gráfico do yuan nos últimos dias."
        />
        <meta name="keywords" content="Yuan, Conversor, Cotação, Real, Câmbio, Hoje, Preço" />
        <title>Yuan Chinês Hoje: Cotação Comercial, Gráfico e Tabela - Xmoedas</title>
        <meta property="og:title" content="Yuan Chinês Hoje" />

        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-LWHWX85ZP8"></script>
        <script>
          window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config', 'G-LWHWX85ZP8');
        </script>
      </Head>
      <div className="container_principal">
        <Converter
          currencyRate={props.currencyRate}
          currencyCode={props.currencyCode}
          last7days={props.last7days}
          last30days={props.last30days}
          last365days={props.last365days}
          currencyName={'Yuan Chinês'}
          flag={'/flags/cn.svg'}
        />
      </div>
      <main className="mainContent">
        <h1>Cotação do yuan chinês hoje</h1>
        <p>
          A cotação do yuan chinês hoje é de R$ {props.currencyRate.toFixed(2)} reais. Isso significa que, para comprar
          1 yuan chinês, é necessário pagar R$ {props.currencyRate.toFixed(2)} reais. É importante lembrar que as
          cotações podem variar ao longo do dia e que é sempre recomendado verificar a cotação atual antes de realizar
          qualquer operação com moedas estrangeiras.
        </p>
        <Table currencyRate={props.currencyRate} currencyName={'Yuan'} currencyCode={props.currencyCode} />
        <h2>Sobre o yuan chinês</h2>
        <p>
          O yuan chinês (CNY) é a moeda oficial da República Popular da China, um país localizado na Ásia Oriental. Ele
          é emitido pelo Banco Popular da China e é uma das moedas mais negociadas no mundo, sendo amplamente utilizada
          em transações comerciais internacionais.
        </p>
        <br />
        <p>
          O yuan chinês é subdividido em fen e jiao, mas essas unidades não são mais usadas na prática. As moedas em
          circulação incluem 1 fen, 5 fen e 1 yuan, enquanto as notas em circulação incluem 1, 5, 10, 20, 50 e 100 yuan.
        </p>
        <br />
        <p>
          A taxa de câmbio do yuan chinês é determinada pela oferta e demanda da moeda no mercado internacional de
          câmbio. Nos últimos anos, a taxa de câmbio do yuan chinês tem sido objeto de atenção internacional, em parte
          devido à política monetária do governo chinês, que pode influenciar a taxa de câmbio da moeda.
        </p>
        <br />
        <p>
          Além disso, o yuan chinês tem sido objeto de críticas de países como os Estados Unidos, que acusam a China de
          manter a taxa de câmbio da moeda artificialmente baixa para tornar seus produtos mais baratos e competitivos
          no mercado global.
        </p>
        <br />
        <p>
          Para turistas que visitam a China, é importante lembrar que o yuan chinês é uma moeda regulamentada e
          controlada pelo governo chinês. É recomendado trocar dinheiro em casas de câmbio oficiais ou bancos, em vez de
          recorrer a cambistas informais, que podem oferecer taxas de câmbio desfavoráveis ou notas falsificadas.
        </p>
        <h2>Como posso converter yuan em real?</h2>
        <p>
          A ferramenta online XMOEDAS oferece a possibilidade de converter yuan em real. Para usar essa ferramenta,
          basta digitar o valor em yuan e o site irá exibir o valor correspondente em reais. É uma ótima opção para quem
          precisa saber quanto dinheiro brasileiro corresponde a uma determinada quantidade de yuan. O resultado pode
          variar de acordo com a cotação do dia. É importante lembrar que a conversão de moedas estrangeiras pode estar
          sujeita a taxas de câmbio e impostos, então é sempre importante verificar esses detalhes antes de realizar
          qualquer transação.
        </p>
        <h2>Observação sobre o conversor</h2>
        <p>
          Atenção: as cotações de moedas apresentadas neste conversor são meramente informativas e podem não ser 100%
          precisas. Antes de realizar qualquer transação financeira ou tomar uma decisão com base nas cotações
          apresentadas, recomenda-se consultar fontes especializadas para obter informações mais atualizadas e precisas.
        </p>
      </main>
    </>
  );
}
