import Head from 'next/head';
import Converter from 'components/Converter';
import Table from 'components/Table/Table';
import { fetchDataChart } from '@/utils/getChartData';
import { getCurrencyRate } from '@/utils/getCurrencyRate';

export async function getStaticProps() {
  const currencyCode = 'CHF';

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
          content="Cotação atualizada do franco suíço hoje em relação ao real. Conversor de moedas e gráfico do franco suíço nos últimos dias."
        />
        <meta name="keywords" content="Franco suíço, Conversor, Cotação, Real, Câmbio, Hoje, Preço" />
        <title>Franco Suíço Hoje: Cotação Comercial, Gráfico e Tabela - Xmoedas</title>
        <meta property="og:title" content="Franco Suíço Hoje" />

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
          currencyName={'Franco Suíço'}
          flag={'/flags/ch.svg'}
        />
      </div>
      <main className="mainContent">
        <h1>Cotação do franco suíço hoje</h1>
        <p>
          A cotação do franco suíço hoje é de R$ {props.currencyRate.toFixed(2)} reais. Isso significa que, para comprar
          um franco suíço, é necessário gastar R$ {props.currencyRate.toFixed(2)} reais. O franco suíço é conhecido por
          ser uma moeda forte e estável, e é amplamente utilizado para investimentos financeiros e para fazer
          transferências internacionais. Além disso, a Suíça é um país economicamente forte, o que contribui para a
          solidez da sua moeda. No entanto, é importante lembrar que a cotação do franco suíço pode sofrer variações
          diariamente, portanto, é sempre recomendável manter-se atualizado sobre as flutuações do mercado financeiro.
        </p>
        <Table currencyRate={props.currencyRate} moeda={'Franco Suíço'} currencyCode={props.currencyCode} />
        <h2>Sobre o franco suíço</h2>
        <p>
          O franco suíço (CHF) é a moeda oficial da Suíça e do Liechtenstein. Ele é emitido pelo Banco Nacional Suíço e
          é amplamente utilizado em toda a Suíça como meio de troca para transações comerciais, bem como para o
          pagamento de serviços e impostos.
        </p>
        <br />
        <p>
          O franco suíço é considerado uma das moedas mais seguras e estáveis do mundo, devido à economia estável da
          Suíça e à política monetária conservadora do Banco Nacional Suíço. Isso significa que a taxa de câmbio do CHF
          é geralmente menos volátil do que outras moedas.
        </p>
        <br />
        <p>
          O franco suíço é usado não apenas na Suíça e no Liechtenstein, mas também em algumas regiões da Itália, França
          e Alemanha que fazem fronteira com a Suíça. Além disso, o CHF é amplamente aceito em transações comerciais
          internacionais em todo o mundo.
        </p>
        <br />
        <p>
          Devido à sua estabilidade e segurança, o franco suíço é considerado uma moeda de refúgio seguro em momentos de
          incerteza econômica global. Por exemplo, durante a crise financeira de 2008, o CHF foi bastante procurado
          pelos investidores como uma alternativa mais segura ao dólar americano e ao euro.
        </p>
        <br />
        <p>
          Para quem está planejando uma viagem para a Suíça ou para quem precisa realizar transações comerciais com
          parceiros suíços, é importante acompanhar a cotação do CHF e realizar operações de câmbio no momento mais
          favorável, a fim de obter a melhor taxa possível.
        </p>
        <h2>Como posso converter franco suíço em real?</h2>
        <p>
          Para converter franco suíço para real, você pode usar a ferramenta online disponível no site XMOEDAS. Basta
          inserir a quantidade de francos suíços que deseja converter e a ferramenta calculará automaticamente o valor
          equivalente em reais. Isso é útil para quem viaja para a Suíça ou precisa fazer transações comerciais com o
          país.
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
