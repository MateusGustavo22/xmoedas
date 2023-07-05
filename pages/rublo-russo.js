import Head from 'next/head';
import Converter from 'components/Converter';
import Table from 'components/Table/Table';
import { getCurrencyRate } from '@/utils/getCurrencyRate';
import { fetchDataChart } from '@/utils/getChartData';

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
          content="Cotação atualizada do rublo russo hoje em relação ao real. Conversor de moedas e gráfico do rublo nos últimos dias."
        />
        <meta name="keywords" content="Rublo, Russo, Conversor, Cotação, Real, Câmbio, Hoje, Preço" />
        <title>Rublo Russo Hoje: Cotação Comercial, Gráfico e Tabela - Xmoedas</title>
        <meta property="og:title" content="Rublo Russo Hoje" />
      </Head>
      <div className="container_principal">
        <Converter
          currencyRate={props.currencyRate}
          currencyCode={props.currencyCode}
          last7days={props.last7days}
          last30days={props.last30days}
          last365days={props.last365days}
          currencyName={'Rublo Russo'}
          flag={'/flags/ru.svg'}
        />
      </div>
      <main className="mainContent">
        <h1>Cotação do rublo russo hoje</h1>
        <p>
          Hoje, a cotação do rublo russo (RUB) em relação ao real brasileiro (BRL) está em torno de R${' '}
          {props.currencyRate} reais. Isso significa que para comprar 1 RUB, é necessário desembolsar cerca de R${' '}
          {props.currencyRate} reais.
        </p>
        <br />
        <p>
          A taxa de câmbio do RUB pode variar ao longo do dia, dependendo de diversos fatores, como a oferta e demanda
          da moeda no mercado internacional, a política monetária do Banco Central da Rússia, a situação econômica da
          Rússia e de outros países, entre outros.
        </p>
        <br />
        <p>
          Para quem está planejando uma viagem para a Rússia ou para quem precisa realizar transações comerciais com
          parceiros russos, é importante acompanhar a cotação do RUB e realizar operações de câmbio no momento mais
          favorável, a fim de obter a melhor taxa possível.
        </p>
        <br />
        <p>
          Além disso, é recomendado pesquisar e comparar as taxas de câmbio oferecidas por diferentes casas de câmbio e
          bancos, a fim de evitar possíveis golpes e obter a melhor taxa de câmbio possível.
        </p>
        <br />
        <p>
          É importante lembrar que a cotação apresentada aqui é apenas uma referência e pode variar ao longo do dia, por
          isso é necessário consultar fontes confiáveis e atualizadas para obter informações precisas sobre a cotação do
          RUB.
        </p>
        <Table currencyRate={props.currencyRate} currencyName={'Rublo'} currencyCode={props.currencyCode} />
        <h2>Sobre o rublo russo</h2>
        <p>
          O rublo russo (RUB) é a moeda oficial da Federação Russa. Ele é emitido pelo Banco Central da Rússia e é
          amplamente utilizado em toda a Rússia como meio de troca para transações comerciais, bem como para o pagamento
          de serviços e impostos.
        </p>
        <br />
        <p>
          O RUB foi introduzido em 1998, substituindo o antigo rublo soviético. Desde então, o rublo tem enfrentado
          altos e baixos em sua trajetória no mercado internacional, influenciado principalmente pela situação econômica
          da Rússia e pelas políticas adotadas pelo Banco Central da Rússia.
        </p>
        <br />
        <p>
          Nos últimos anos, o rublo tem sido afetado por fatores externos, como as sanções econômicas impostas por
          alguns países ocidentais, bem como por fatores internos, como a queda do preço do petróleo, que é uma
          importante fonte de receita para a Rússia.
        </p>
        <br />
        <p>
          Apesar das flutuações na taxa de câmbio do RUB, ele ainda é amplamente utilizado como meio de troca na Rússia
          e em países vizinhos, e é uma moeda importante para transações comerciais internacionais com parceiros russos.
        </p>
        <br />
        <p>
          Para quem está planejando uma viagem para a Rússia ou para quem precisa realizar transações comerciais com
          parceiros russos, é importante acompanhar a cotação do RUB e realizar operações de câmbio no momento mais
          favorável, a fim de obter a melhor taxa possível.
        </p>
        <h2>Como posso converter rublo para real?</h2>
        <p>
          O site XMOEDAS oferece uma ferramenta online para converter rublos em reais. Para usar essa ferramenta, você
          precisará inserir a quantidade de rublos desejada e a cotação atual será exibida. Isso pode ser útil para quem
          viaja para a Rússia ou precisa realizar transações comerciais com o país. É importante lembrar que a cotação
          do rublo pode variar diariamente, então é importante verificar a cotação atual antes de fazer qualquer
          transação.
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
