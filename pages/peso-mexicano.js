import Head from 'next/head'
import Converter from 'components/Converter'
import Table from 'components/Table/Table'
import { getCurrencyRate } from '@/utils/getCurrencyRate'
import { fetchDataChart } from '@/utils/getChartData'

export async function getStaticProps() {
  const currencyCode = 'MXN'

  const currencyRate = await getCurrencyRate(currencyCode)

  const last7days = await fetchDataChart(`https://economia.awesomeapi.com.br/json/daily/${currencyCode}-BRL/7`)
  const last30days = await fetchDataChart(`https://economia.awesomeapi.com.br/json/daily/${currencyCode}-BRL/30`)
  const last365days = await fetchDataChart(`https://economia.awesomeapi.com.br/json/daily/${currencyCode}-BRL/365`)

  return {
    props: {
      currencyCode,
      currencyRate,
      last7days,
      last30days,
      last365days,
    },
    revalidate: 3600,
  }
}

export default function Home(props) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Cotação atualizada do peso mexicano hoje em relação ao real. Conversor de moedas e gráfico do peso mexicano nos últimos dias."
        />
        <meta name="keywords" content="Peso, Mexicano, Conversor, Cotação, Real, Câmbio, Hoje, Preço" />
        <title>Peso Mexicano Hoje: Cotação Comercial, Gráfico e Tabela - Xmoedas</title>
        <meta property="og:title" content="Peso Mexicano Hoje" />
      </Head>
      <div className="container_principal">
        <Converter
          currencyRate={props.currencyRate}
          currencyCode={props.currencyCode}
          last7days={props.last7days}
          last30days={props.last30days}
          last365days={props.last365days}
          currencyName={'Peso Mexicano'}
          flag={'/flags/mx.svg'}
        />
      </div>
      <main className="mainContent">
        <h1>Cotação do peso mexicano hoje</h1>
        <p>
          Hoje, a cotação do peso mexicano em relação ao real brasileiro está em R$ {props.currencyRate.toFixed(2)}{' '}
          reais. Essa taxa de câmbio pode ser influenciada por uma série de fatores, incluindo a economia global, a
          política monetária do México e do Brasil, bem como outros eventos geopolíticos.
        </p>
        <br />
        <p>
          A cotação do peso mexicano em relação ao real brasileiro pode ter um impacto significativo nas importações e
          exportações entre os dois países, bem como no turismo e investimentos. Por exemplo, se o peso mexicano se
          valorizar em relação ao real, as exportações brasileiras para o México podem se tornar mais competitivas,
          enquanto as importações do México para o Brasil podem se tornar mais caras.
        </p>
        <Table currencyRate={props.currencyRate} currencyName={'Peso Mexicano'} currencyCode={props.currencyCode} />
        <h2>Sobre o peso mexicano</h2>
        <p>
          O peso mexicano (MXN) é a moeda oficial do México, um país localizado na América do Norte. Ele é a oitava
          moeda mais negociada no mundo e é amplamente utilizado em transações comerciais internacionais, além de ser a
          moeda de circulação oficial no país.
        </p>
        <br />
        <p>
          O peso mexicano é subdividido em centavos e as moedas em circulação incluem 5, 10, 20 e 50 centavos, além de
          moedas de 1, 2, 5, 10 e 20 pesos. As notas em circulação incluem 20, 50, 100, 200, 500 e 1.000 pesos.
        </p>
        <br />
        <p>
          A taxa de câmbio do peso mexicano é determinada pela oferta e demanda da moeda no mercado internacional de
          câmbio, e pode ser influenciada por uma série de fatores, como a política econômica do governo mexicano, a
          situação econômica do país e as condições globais do mercado.
        </p>
        <br />
        <p>
          Nos últimos anos, o peso mexicano tem sofrido flutuações significativas em sua taxa de câmbio, em grande parte
          devido às incertezas políticas e econômicas no país e ao impacto de fatores globais, como as políticas
          econômicas dos Estados Unidos e a pandemia de COVID-19.
        </p>
        <br />
        <p>
          Para os turistas que visitam o México, é importante lembrar que a taxa de câmbio do peso mexicano pode flutuar
          significativamente e é recomendado trocar dinheiro em casas de câmbio oficiais ou bancos, em vez de recorrer a
          cambistas informais, que podem oferecer taxas de câmbio desfavoráveis ou notas falsificadas.
        </p>
        <h2>Qual a diferença entre peso mexicano comercial e turismo?</h2>
        <p>
          O peso mexicano tem duas taxas de câmbio: a taxa de câmbio comercial e a taxa de câmbio turismo. A principal
          diferença entre as duas é a finalidade para as quais são utilizadas.
        </p>
        <br />
        <p>
          A taxa de câmbio <strong>comercial</strong> é usada para transações internacionais entre empresas e governos,
          como a compra e venda de bens e serviços ou o pagamento de dívidas. Ela é geralmente mais baixa do que a taxa
          de câmbio turismo, pois não inclui as margens de lucro adicionais cobradas por casas de câmbio e bancos.
        </p>
        <br />
        <p>
          Já a taxa de câmbio <strong>turismo</strong> é usada por turistas que desejam comprar pesos mexicanos para
          suas despesas pessoais enquanto viajam no México. Ela é geralmente mais alta do que a taxa de câmbio
          comercial, pois inclui a margem de lucro das casas de câmbio e bancos, além de taxas adicionais, como o
          Imposto sobre o Valor Agregado (IVA).
        </p>
        <br />
        <p>
          No México, é comum que turistas utilizem a taxa de câmbio turismo para comprar pesos mexicanos, já que é mais
          conveniente para eles. No entanto, é importante pesquisar e comparar as taxas de câmbio oferecidas por
          diferentes casas de câmbio e bancos para obter a melhor taxa possível e evitar possíveis golpes.
        </p>
        <h2>Como posso converter peso mexicano em real?</h2>
        <p>
          Se você deseja converter peso mexicano para real, você pode usar a ferramenta online XMOEDAS. Basta inserir a
          quantidade de pesos mexicano que você deseja converter e a ferramenta dará o valor equivalente em reais. É
          importante lembrar de verificar a cotação atual antes de fazer qualquer conversão, pois elas podem variar ao
          longo do tempo.
        </p>
        <h2>Observação sobre o conversor</h2>
        <p>
          Atenção: as cotações de moedas apresentadas neste conversor são meramente informativas e podem não ser 100%
          precisas. Antes de realizar qualquer transação financeira ou tomar uma decisão com base nas cotações
          apresentadas, recomenda-se consultar fontes especializadas para obter informações mais atualizadas e precisas.
        </p>
      </main>
    </>
  )
}
