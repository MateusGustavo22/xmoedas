import Head  from 'next/head';
import Conversor from 'components/Conversor/Conversor';
import Table from 'components/Table/Table';

//Pegar a cotação da moeda e passa como props
export async function getStaticProps() {
 
  const code = 'JPY'
  let cotacao = 0

  const fetFetch1 = async () => {
    const responseApi = await fetch(`https://economia.awesomeapi.com.br/json/last/${code}-BRL`)
    if (responseApi.ok) {
      const apiData = await responseApi.json()
      cotacao = parseFloat(apiData[code+'BRL'].bid).toFixed(2)
    }
  }

  const cot30bids = {
    bid: [],
    timestamp: []
  }

  const fetFetch2 = async () => {
    const responseApi = await fetch(`https://economia.awesomeapi.com.br/json/daily/${code}-BRL/30`)
    if (responseApi.ok) {
      const apiData = await responseApi.json()
      const responseBid = apiData.map(data => {
        let value = parseFloat(data.bid)
        return value < 1 ? value.toFixed(2) : value.toFixed(3)
      })
      const responseDate = apiData.map(data => data.timestamp)

      cot30bids.bid = responseBid
      cot30bids.timestamp = responseDate
    }
  }
  
  await fetFetch1()
  await fetFetch2()

  return {
    props: {
      cotacao,
      code,
      cot30bids //objeto contendo propriedade bid e timestamp
    },
    revalidate: 3600,
  };

}

export default function Home(props) {
  
  return (
      <>
        <Head>
          <meta name="description" content="Cotação atualizada do iene japonês hoje em relação ao real. Conversor de moedas e gráfico do iene nos últimos dias."/>
          <meta name="keywords" content="Iene, Conversor, Cotação, Real, Câmbio, Hoje, Preço" />
          <title>Iene Japonês Hoje: Cotação Comercial, Gráfico  e Tabela - Xmoedas</title>
          <meta property="og:title" content="Iene Japonês Hoje" />

        </Head>
        <div className='container_principal'>
          <Conversor 
            cotacao={props.cotacao} 
            code={props.code} 
            last30days={props.cot30bids} 
            moedaName={'Iene Japonês'}
            flag={'/flags/jp.svg'} 
          />
        </div>
        <main className='mainContent'>
          <h1>Cotação do iene hoje</h1>
          <p>A cotação atual do iene japonês hoje é de R$ {props.cotacao} reais por unidade. Esta cotação pode variar diariamente e é importante ficar atento às flutuações do mercado para tomar decisões financeiras.</p>
          <Table cotacao={props.cotacao} moeda={'Iene'} code={props.code} />
          <h2>Sobre o iene japonês</h2>
          <p>O iene japonês é a moeda oficial do Japão e é utilizado em todo o país. Ele é uma das moedas mais fortes e estáveis do mundo, sendo amplamente utilizada em transações internacionais. Sua sigla é JPY e é dividido em 100 sen ou 1000 rin.</p><br/>
          <p>O Japão é conhecido por sua economia forte e estável, o que contribui para a estabilidade do iene. Além disso, o Japão é uma grande potência econômica e comercial, o que significa que o iene é amplamente utilizado em transações comerciais e investimentos internacionais.</p>
          <h2>Qual a diferença entre iene comercial e iene turismo?</h2>
          <p>O iene comercial é a moeda oficial do Japão e é usado para transações comerciais e financeiras no país. Já o iene turismo é uma taxa de câmbio alternativa que é oferecida aos turistas estrangeiros em alguns estabelecimentos turísticos e destinos de viagem. Em geral, a taxa de câmbio do iene turismo é ligeiramente desfavorável em relação ao iene comercial, o que significa que os turistas pagam mais do que os preços reais quando usam esta moeda.</p>
          <h2>Como posso converter iene japonês em real?</h2>
          <p>O nosso site XMOEDAS oferece uma ferramenta online para converter iene japonês em reais. Para usar essa ferramenta, você precisará inserir a quantidade de iene desejada e a cotação atual será exibida. Isso pode ser útil para quem viaja para o Japão ou precisa realizar transações comerciais com o país.</p>
          <h2>Observação sobre o conversor</h2>
          <p>Atenção: as cotações de moedas apresentadas neste conversor são meramente informativas e podem não ser 100% precisas. Antes de realizar qualquer transação financeira ou tomar uma decisão com base nas cotações apresentadas, recomenda-se consultar fontes especializadas para obter informações mais atualizadas e precisas.</p>
       </main>
      </>
  )
}
