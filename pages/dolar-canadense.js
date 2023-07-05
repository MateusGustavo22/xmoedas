import Head from 'next/head';
import Converter from 'components/Converter';
import Table from 'components/Table/Table';
import { getCurrencyRate } from '@/utils/getCurrencyRate';
import { fetchDataChart } from '@/utils/getChartData';

export async function getStaticProps() {
  const currencyCode = 'CAD';

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
          content="Cotação atualizada do dólar canadense hoje em relação ao real. Conversor de moedas e gráfico do dólar canadense nos últimos dias."
        />
        <meta name="keywords" content="Dólar canadense, Conversor, Cotação, Real, Câmbio, Hoje, Preço" />
        <title>Dólar Canadense Hoje: Cotação Comercial, Gráfico e Tabela - Xmoedas</title>
        <meta property="og:title" content="Dólar Canadense Hoje" />

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
          currencyName={'Dólar Canadense'}
          flag={'/flags/ca.svg'}
        />
      </div>
      <main className="mainContent">
        <h1>Cotação do dólar canadense hoje</h1>
        <p>
          A cotação do dólar canadense (CAD) hoje é de R$ {props.currencyRate.toFixed(2)} reais. Isso significa que cada
          dólar canadense está sendo negociado ao preço de R$ {props.currencyRate.toFixed(2)} reais. A cotação do dólar
          canadense pode ser influenciada por uma variedade de fatores, incluindo a economia dos Estados Unidos e do
          Canadá, as taxas de juros, as expectativas de inflação e a demanda por recursos naturais do Canadá. Como
          investidor ou viajante, é importante estar ciente da cotação do dólar canadense e como ela pode afetar suas
          decisões.
        </p>
        <Table currencyRate={props.currencyRate} currencyName={'Dólar Canadense'} currencyCode={props.currencyCode} />
        <h2>Sobre o dólar canadense</h2>
        <p>
          O dólar canadense é a moeda oficial do Canadá, sendo representada pelo símbolo CAD (C$). O Banco do Canadá é o
          responsável por emitir e controlar a circulação do dólar canadense, assim como definir sua política monetária.
        </p>
        <br />
        <p>
          O dólar canadense é uma moeda flutuante, ou seja, seu valor em relação a outras moedas é determinado pelo
          mercado financeiro. A taxa de câmbio do dólar canadense é influenciada por diversos fatores, como a oferta e
          demanda da moeda no mercado internacional, a balança comercial do país, a política monetária e fiscal do
          governo canadense, entre outros.
        </p>
        <br />
        <p>
          Uma característica interessante do dólar canadense é que ele é frequentemente considerado uma moeda de
          reserva, juntamente com o dólar americano, o euro e o iene japonês. Isso se deve em parte à estabilidade
          política e econômica do Canadá, bem como à diversidade de sua economia, que é baseada em recursos naturais,
          manufatura, serviços financeiros e turismo.
        </p>
        <br />
        <p>
          O dólar canadense é amplamente utilizado no comércio internacional, especialmente com os Estados Unidos, sendo
          que a maior parte das exportações canadenses têm como destino o mercado americano. Além disso, o dólar
          canadense é utilizado em transações comerciais em outros países, como a China, o Reino Unido e a União
          Europeia.
        </p>
        <h2>Qual a diferença entre dólar canadense comercial turismo?</h2>
        <p>O dólar canadense comercial e o dólar canadense turismo são duas cotações diferentes da moeda canadense.</p>
        <br />
        <p>
          O <strong>dólar canadense comercial</strong> é utilizado em transações comerciais entre empresas de diferentes
          países, como importações e exportações de bens e serviços. Essa cotação é definida pelo mercado financeiro e é
          influenciada por diversos fatores, como a oferta e demanda de dólares canadenses no mercado internacional, a
          taxa de juros do Canadá e dos países envolvidos na transação, as políticas econômicas adotadas pelos governos,
          entre outros.
        </p>
        <br />
        <p>
          Já o <strong>dólar canadense turismo</strong> é utilizado em transações de pessoas físicas em viagens ao
          exterior, como compras em lojas estrangeiras, pagamento de serviços turísticos, como hotéis e passeios, e
          saques em caixas eletrônicos no exterior. A cotação do dólar canadense turismo é geralmente mais alta do que a
          do dólar canadense comercial, já que inclui outras taxas, como a taxa de câmbio, impostos e tarifas de
          serviços bancários.
        </p>
        <br />
        <p>
          Em resumo, enquanto o dólar canadense comercial é usado em transações entre empresas de diferentes países, o
          dólar canadense turismo é usado em transações de pessoas físicas em viagens internacionais. A cotação do dólar
          canadense turismo geralmente é mais alta do que a do dólar canadense comercial, devido a taxas adicionais
          incluídas no preço final.
        </p>
        <h2>Como posso converter dólar canadense em real?</h2>
        <p>
          O site XMOEDAS é uma ferramenta prática e fácil de usar para converter valores em dólar para real. Basta
          inserir o valor em dólar que deseja converter e o nosso conversor fará o cálculo em tempo real, exibindo o
          valor em real equivalente. O site também permite que você compare as taxas de câmbio atuais do dólar com o
          real para que você possa tomar decisões informadas sobre suas transações financeiras. Aproveite a nossa
          ferramenta confiável e fácil de usar hoje mesmo no XMOEDAS!
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
