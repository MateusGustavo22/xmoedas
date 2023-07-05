import Head from 'next/head';
import Converter from 'components/Converter';
import Table from 'components/Table/Table';
import { getCurrencyRate } from '@/utils/getCurrencyRate';
import { fetchDataChart } from '@/utils/getChartData';

export async function getStaticProps() {
  const currencyCode = 'GBP';

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
          content="Cotação atualizada da Libra esterlina hoje em relação ao real. Conversor de moedas e gráfico da libra nos últimos dias."
        />
        <meta name="keywords" content="Libra, Conversor, Cotação, Real, Câmbio, Hoje, Preço" />
        <title>Libra Esterlina Hoje: Cotação Comercial, Gráfico e Tabela - Xmoedas</title>
        <meta property="og:title" content="Libra Esterlina Hoje" />

         {/* Google tag (gtag.js) */}
         <script async src="https://www.googletagmanager.com/gtag/js?id=G-LWHWX85ZP8"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());

          gtag('config', 'G-LWHWX85ZP8');
        </script>
        
      </Head>
      <div className="container_principal">
        <Converter
          currencyRate={props.currencyRate}
          currencyCode={props.currencyCode}
          last7days={props.last7days}
          last30days={props.last30days}
          last365days={props.last365days}
          currencyName={'Libra Esterlina'}
          flag={'/flags/gb.svg'}
        />
      </div>
      <main className="mainContent">
        <h1>Cotação da libra hoje</h1>
        <p>
          A cotação da libra esterlina hoje é de R$ {props.currencyRate.toFixed(2)} reais. Isso significa que por cada
          libra esterlina, você pode obter R$ {props.currencyRate.toFixed(2)} reais. É importante notar que as cotações
          podem mudar diariamente, então é importante verificar regularmente para obter as cotações atuais.
        </p>
        <Table currencyRate={props.currencyRate} currencyName={'Libra'} currencyCode={props.currencyCode} />
        <h2>Sobre a libra esterlina</h2>
        <p>
          A libra esterlina (GBP) é a moeda oficial do Reino Unido, que inclui a Inglaterra, Escócia, País de Gales e
          Irlanda do Norte. É também usada como moeda em algumas das dependências da coroa britânica, como Ilhas do
          Canal, Ilha de Man e Gibraltar.
        </p>
        <br />
        <p>
          A libra esterlina é uma das moedas mais antigas do mundo, tendo sido introduzida pela primeira vez pelos
          saxões no século VIII. O termo "esterlina" tem origem em "Easterlings", que era como os comerciantes alemães
          que operavam na Inglaterra eram conhecidos.
        </p>
        <br />
        <p>
          Atualmente, a libra esterlina é a quarta moeda mais negociada no mercado cambial global, depois do dólar
          americano, euro e iene japonês. Ela também é uma das moedas de reserva mais importantes do mundo.
        </p>
        <br />
        <p>
          A libra esterlina é dividida em 100 pence (penny, no singular). As notas em circulação incluem £5, £10, £20 e
          £50, e as moedas em circulação incluem 1p, 2p, 5p, 10p, 20p, 50p, £1 e £2.
        </p>
        <h2>Qual a diferença entre libra comercial e turismo?</h2>
        <p>
          A principal diferença entre a libra comercial e a libra turismo é a finalidade para a qual cada uma é
          utilizada. A libra comercial é utilizada em transações comerciais internacionais, como importações e
          exportações, enquanto a libra turismo é utilizada por pessoas que estão viajando para o Reino Unido ou que
          desejam fazer remessas para o país.
        </p>
        <br />
        <p>
          A <strong>libra comercial</strong> tem um valor de câmbio mais estável e é negociada em grandes volumes no
          mercado financeiro global. Seu valor é determinado pela oferta e demanda internacional da moeda e pode ser
          influenciado por fatores como a política monetária do Banco da Inglaterra, as condições econômicas globais e a
          demanda por produtos e serviços do Reino Unido.
        </p>
        <br />
        <p>
          Já a <strong>libra turismo</strong> é mais volátil e seu valor é determinado pelo mercado local de câmbio do
          país onde ela é utilizada. Ela é geralmente mais cara do que a libra comercial, pois inclui taxas adicionais,
          como taxas de câmbio e comissões de casas de câmbio.
        </p>
        <br />
        <p>
          Por exemplo, se uma pessoa que vive no Brasil deseja viajar para o Reino Unido, ela precisará trocar seus
          reais pela libra turismo para pagar por seus gastos enquanto estiver no país. Nesse caso, ela pagará mais pela
          libra turismo do que o valor da libra comercial, que é a taxa de câmbio utilizada em transações comerciais
          internacionais.
        </p>
        <h2>Como posso converter libra em real?</h2>
        <p>
          Se você deseja converter libras esterlinas para reais, pode usar a ferramenta online do site XMOEDAS. Basta
          inserir a quantidade de libras esterlinas que deseja converter e a ferramenta calculará automaticamente a
          quantidade correspondente em reais. Essa ferramenta é útil para quem viaja para o Reino Unido, faz negócios
          comerciais ou investimentos no país, ou simplesmente gosta de acompanhar as cotações das moedas. É importante
          lembrar que a taxa de câmbio pode variar de acordo com o banco ou casa de câmbio que você utiliza, por isso é
          importante sempre verificar as cotações antes de realizar qualquer transação.
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
