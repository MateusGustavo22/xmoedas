import Head from 'next/head';
import Converter from 'components/Converter';
import Table from 'components/Table/Table';
import { getCurrencyRate } from '@/utils/getCurrencyRate';
import { fetchDataChart } from '@/utils/getChartData';

export async function getStaticProps() {
  const currencyCode = 'HKD';

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
          content="Cotação atualizada do dólar de hong kong hoje em relação ao real. Conversor de moedas e gráfico do dólar de hong kong nos últimos dias."
        />
        <meta name="keywords" content="Dólar de Hong Kong, Conversor, Cotação, Real, Câmbio, Hoje, Preço" />
        <title>Dólar de Hong Kong Hoje: Cotação Comercial, Gráfico e Tabela - Xmoedas</title>
        <meta property="og:title" content="Dólar De Hong Kong Hoje" />
      </Head>
      <div className="container_principal">
        <Converter
          currencyRate={props.currencyRate}
          currencyCode={props.currencyCode}
          last7days={props.last7days}
          last30days={props.last30days}
          last365days={props.last365days}
          currencyName={'Dólar de Hong Kong'}
          flag={'/flags/hk.svg'}
        />
      </div>
      <main className="mainContent">
        <h1>Cotação do dólar de hong kong hoje</h1>
        <p>
          Hoje, a cotação do dólar de Hong Kong em relação ao real brasileiro está em cerca de R${' '}
          {props.currencyRate.toFixed(2)} reais por 1 HKD. Isso significa que, se você estivesse procurando comprar 1000
          HKD, precisaria pagar cerca de R$ {1000 * props.currencyRate.toFixed(2)} reais.
        </p>
        <br />
        <p>
          Lembre-se de que as taxas de câmbio mudam constantemente, e a cotação de hoje pode não ser a mesma de amanhã.
          Por isso, é importante ficar atento às variações do mercado financeiro e consultar fontes confiáveis para
          obter informações atualizadas sobre a cotação do dólar de Hong Kong em relação ao real brasileiro. Dessa
          forma, você poderá tomar decisões informadas e aproveitar as melhores oportunidades para realizar transações
          de câmbio.
        </p>
        <Table
          currencyRate={props.currencyRate}
          currencyName={'Dólar De Hong Kong'}
          currencyCode={props.currencyCode}
        />
        <h2>Sobre o dólar de hong kong</h2>
        <p>
          O dólar de Hong Kong é a moeda oficial da Região Administrativa Especial de Hong Kong, que é uma região
          autônoma da China. Ele foi introduzido em 1863, inicialmente como moeda da colônia britânica de Hong Kong.
        </p>
        <br />
        <p>
          O dólar de Hong Kong é emitido pelo Hong Kong Monetary Authority, que é a autoridade monetária responsável
          pela política cambial e monetária da região. Ele é amplamente aceito em Hong Kong, embora outras moedas, como
          o dólar americano e o yuan chinês, também sejam usadas.
        </p>
        <br />
        <p>
          A cotação do dólar de Hong Kong em relação a outras moedas pode flutuar bastante, dependendo de vários
          fatores, como as políticas econômicas da China e dos Estados Unidos, a situação do comércio global e os níveis
          de inflação. É importante estar ciente dessas flutuações ao fazer transações em dólares de Hong Kong.
        </p>
        <br />
        <p>
          Além disso, vale ressaltar que a Região Administrativa Especial de Hong Kong tem um sistema financeiro
          altamente desenvolvido e é um centro financeiro internacional significativo. Isso significa que o dólar de
          Hong Kong é amplamente negociado nos mercados financeiros globais e pode ser usado para fins de investimento e
          negociação de câmbio.
        </p>
        <h2>Qual a diferença entre dólar de Hong kong comercial e turismo?</h2>
        <p>Existem duas principais diferenças entre o dólar de Hong Kong comercial e turismo:</p>
        <br />
        <p>
          <strong>Taxas de câmbio:</strong> O dólar de Hong Kong comercial é geralmente usado para transações
          comerciais, como importação e exportação de bens e serviços. As taxas de câmbio para o dólar de Hong Kong
          comercial são determinadas pelos bancos e pelo mercado cambial, e geralmente oferecem taxas de câmbio mais
          favoráveis do que as do dólar de Hong Kong turismo.
        </p>
        <br />
        <p>
          <strong>Finalidade de uso:</strong> O <strong>dólar de Hong Kong turismo</strong> é usado principalmente por
          turistas e viajantes internacionais para transações em Hong Kong, como compras e hospedagem em hotéis.
          Geralmente, o dólar de Hong Kong turismo é comprado com outras moedas estrangeiras em casas de câmbio ou
          bancos e as taxas de câmbio são geralmente menos favoráveis do que as do dólar de Hong Kong comercial.
        </p>
        <br />
        <p>
          Em resumo, o dólar de Hong Kong comercial é usado para transações comerciais e tem taxas de câmbio mais
          favoráveis, enquanto o dólar de Hong Kong turismo é usado por viajantes internacionais para transações em Hong
          Kong, mas com taxas de câmbio menos favoráveis.
        </p>
        <h2>Como posso converter dólar de hong kong em real?</h2>
        <p>
          Se você deseja converter dólares de Hong Kong para reais, pode usar a ferramenta online do site XMOEDAS. Basta
          inserir a quantidade de dólares de Hong Kong que deseja converter e a ferramenta calculará automaticamente a
          quantidade correspondente em reais. Essa ferramenta é útil para quem viaja para Hong Kong, faz negócios
          comerciais ou investimentos no território, ou simplesmente gosta de acompanhar as cotações das moedas.
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
