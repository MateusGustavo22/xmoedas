import Head  from 'next/head';
import Conversor from 'components/Conversor/Conversor';
import Table from 'components/Table/Table';

//Pegar a cotação da moeda e passa como props
export async function getStaticProps() {
 
  const code = 'CNY'
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
          <meta name="description" content="Cotação atualizada do yuan chinês hoje em relação ao real. Conversor de moedas e gráfico do yuan nos últimos dias."/>
          <meta name="keywords" content="Yuan, Conversor, Cotação, Real, Câmbio, Hoje, Preço" />
          <title>Yuan Chinês Hoje: Cotação Comercial, Gráfico e Tabela - Xmoedas</title>
          <meta property="og:title" content="Yuan Chinês Hoje" />

        </Head>
        <div className='container_principal'>
          <Conversor 
            cotacao={props.cotacao} 
            code={props.code} 
            last30days={props.cot30bids} 
            moedaName={'Yuan Chinês'}
            flag={'/flags/cn.svg'} 
          />
        </div>
        <main className='mainContent'>
          <h1>Cotação do yuan chinês hoje</h1>
          <p>A cotação do yuan chinês hoje é de R$ {props.cotacao} para cada real brasileiro. Isso significa que, para comprar 1 yuan chinês, é necessário pagar R$ {props.cotacao} reais. É importante lembrar que as cotações podem variar ao longo do dia e que é sempre recomendado verificar a cotação atual antes de realizar qualquer operação com moedas estrangeiras.</p>
          <Table cotacao={props.cotacao} moeda={'Yuan'} code={props.code} />
          <h2>Sobre o yuan chinês</h2>
          <p>O yuan chinês é a moeda oficial da China e é usado em todo o país. Ele é dividido em 10 jiao e 100 fen e é emitido pelo Banco Central da China. O símbolo para o yuan chinês é "¥" e a abreviatura é "CNY". O yuan chinês é uma das moedas mais negociadas no mundo e tem uma grande importância na economia global. A China é a segunda maior economia do mundo e o yuan tem um papel importante na estabilidade financeira global.</p>
          <h2>Qual a diferença entre yuan comercial e yuan turismo?</h2>
          <p>O yuan comercial é a moeda oficial da China e é usado para transações comerciais e financeiras no país. Já o yuan turismo é uma taxa de câmbio alternativa que é oferecida aos turistas estrangeiros em alguns estabelecimentos turísticos e destinos de viagem. Em geral, a taxa de câmbio do yuan turismo é ligeiramente desfavorável em relação ao yuan comercial, o que significa que os turistas pagam mais do que os preços reais quando usam esta moeda.</p>
          <h2>Como posso converter yuan em real?</h2>
          <p>A ferramenta online XMOEDAS oferece a possibilidade de converter yuan em real. Para usar essa ferramenta, basta digitar o valor em yuan e o site irá exibir o valor correspondente em reais. É uma ótima opção para quem precisa saber quanto dinheiro brasileiro corresponde a uma determinada quantidade de yuan. O resultado pode variar de acordo com a cotação do dia. É importante lembrar que a conversão de moedas estrangeiras pode estar sujeita a taxas de câmbio e impostos, então é sempre importante verificar esses detalhes antes de realizar qualquer transação.</p>
          <h2>Observação sobre o conversor</h2>
          <p>Atenção: as cotações de moedas apresentadas neste conversor são meramente informativas e podem não ser 100% precisas. Antes de realizar qualquer transação financeira ou tomar uma decisão com base nas cotações apresentadas, recomenda-se consultar fontes especializadas para obter informações mais atualizadas e precisas.</p>
        </main>
      </>
  )
}
