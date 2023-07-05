import Head from 'next/head';
import Converter from 'components/Converter';
import Table from 'components/Table/Table';
import { getCurrencyRate } from '@/utils/getCurrencyRate';
import { fetchDataChart } from '@/utils/getChartData';

export async function getStaticProps() {
  const currencyCode = 'TWD';

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
          content="Cotação atualizada do dólar taiwanês hoje em relação ao real. Conversor de moedas e gráfico do dólar taiwanês nos últimos dias."
        />
        <meta name="keywords" content="Dólar Taiwanês, Conversor, Cotação, Real, Câmbio, Hoje, Preço" />
        <title>Dólar Taiwanês Hoje: Cotação Comercial, Gráfico e Tabela - Xmoedas</title>
        <meta property="og:title" content="Dólar Taiwanês Hoje" />
      </Head>
      <div className="container_principal">
        <Converter
          currencyRate={props.currencyRate}
          currencyCode={props.currencyCode}
          last7days={props.last7days}
          last30days={props.last30days}
          last365days={props.last365days}
          currencyName={'Dólar Taiwanês'}
          flag={'/flags/tw.svg'}
        />
      </div>
      <main className="mainContent">
        <h1>Cotação do dólar taiwanês hoje</h1>
        <p>
          Hoje, a cotação do dólar taiwanês em relação ao real brasileiro está em cerca de R${' '}
          {props.currencyRate.toFixed(2)} por Dólar Taiwanês. Isso significa que, se você estivesse procurando comprar
          1000 TWD, precisaria pagar cerca de R$ {1000 * props.currencyRate.toFixed(2)} reais.
        </p>
        <br />
        <p></p>
        <Table currencyRate={props.currencyRate} currencyName={'Dólar Taiwanês'} currencyCode={props.currencyCode} />
        <h2>Sobre o dólar taiwanês</h2>
        <p>
          O dólar taiwanês é a moeda oficial da República da China (Taiwan), que é uma ilha localizada na Ásia Oriental.
          Foi introduzido em 1949, quando o governo nacionalista da China mudou-se para Taiwan após a guerra civil
          chinesa.
        </p>
        <br />
        <p>
          O dólar taiwanês é emitido pelo Banco Central da República da China e é amplamente utilizado em Taiwan para
          todas as transações comerciais. Ele também é aceito em algumas áreas do continente chinês, embora o yuan
          chinês seja a moeda oficial da China continental.
        </p>
        <br />
        <p>
          A cotação do dólar taiwanês em relação a outras moedas pode flutuar de acordo com vários fatores econômicos e
          políticos, incluindo a situação econômica em Taiwan e a taxa de inflação. É importante observar que o dólar
          taiwanês não é amplamente negociado nos mercados financeiros globais em comparação com outras moedas como o
          dólar americano, o euro e a libra esterlina.
        </p>
        <br />
        <p>
          No entanto, Taiwan é um importante centro financeiro da Ásia e o dólar taiwanês pode ser usado para fins de
          investimento e negociação de câmbio. Além disso, o país tem uma economia dinâmica e inovadora, com destaque
          para as indústrias de tecnologia e eletrônicos, o que pode influenciar na cotação do dólar taiwanês.
        </p>
        <br />
        <p>
          Em resumo, o dólar taiwanês é a moeda oficial de Taiwan e é amplamente utilizado na ilha. Embora não seja tão
          amplamente negociado como outras moedas globais, ainda é uma moeda importante no mercado financeiro asiático.
        </p>
        <h2>Qual a diferença entre dólar taiwanês comercial e turismo?</h2>
        <p>
          No Brasil, as casas de câmbio e bancos oferecem duas cotações para o dólar taiwanês: o dólar taiwanês
          comercial e o dólar taiwanês turismo.
        </p>
        <br />
        <p>
          O <strong>dólar taiwanês comercial</strong> é a cotação utilizada em operações de comércio exterior, ou seja,
          é a taxa de câmbio usada nas transações comerciais entre empresas brasileiras e taiwanesas. Geralmente, essa
          cotação é mais baixa do que a cotação do dólar taiwanês turismo.
        </p>
        <br />
        <p>
          Já o <strong>dólar taiwanês turismo</strong> é a cotação utilizada nas operações de câmbio para compra de
          moeda estrangeira para fins de turismo ou viagens internacionais. Essa cotação é geralmente mais alta do que a
          cotação comercial, pois inclui taxas adicionais cobradas pelas casas de câmbio e bancos para a compra da moeda
          estrangeira.
        </p>
        <br />
        <p>
          É importante ressaltar que a diferença entre as cotações do dólar taiwanês comercial e turismo pode variar
          bastante, dependendo da oferta e demanda da moeda no mercado de câmbio. Além disso, a cotação do dólar
          taiwanês turismo também pode ser afetada por fatores como a sazonalidade do turismo, a instabilidade política
          e econômica do país emissor da moeda, entre outros. Por isso, é sempre importante comparar as cotações
          oferecidas por diferentes casas de câmbio e bancos antes de realizar uma operação de câmbio.
        </p>
        <h2>Como posso converter dólar taiwanês em real?</h2>
        <p>
          Para converter dólar taiwanês para real, você pode usar a ferramenta online do site XMOEDAS. Basta inserir a
          quantidade de dólar taiwanês que deseja converter e a ferramenta exibirá o valor equivalente em reais. Isso é
          útil para quem viaja para Taiwan ou realiza transações comerciais com o país. Lembre-se de sempre verificar a
          cotação atualizada antes de realizar a conversão.
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
