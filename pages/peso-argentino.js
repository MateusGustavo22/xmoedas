import Head  from 'next/head';
import Conversor from 'components/Conversor/Conversor';
import Table from 'components/Table/Table';

//Pegar a cotação da moeda e passa como props
export async function getStaticProps() {
 
  const code = 'ARS'
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
          <meta name="description" content="Cotação atualizada do peso argentino hoje em relação ao real. Conversor de moedas e gráfico do peso argentino nos últimos dias."/>
          <meta name="keywords" content="Peso, Argentino, Conversor, Cotação, Real, Câmbio, Hoje, Preço" />
          <title>Peso Argentino Hoje: Cotação Comercial, Gráfico e Tabela - Xmoedas</title>
          <meta property="og:title" content="Peso Argentino Hoje" />

        </Head>
        <div className='container_principal'>
          <Conversor 
            cotacao={props.cotacao} 
            code={props.code} 
            last30days={props.cot30bids} 
            moedaName={'Peso Argentino'}
            flag={'/flags/ar.svg'} 
          />
        </div>
        <main className='mainContent'>
          <h1>Cotação do peso argentino hoje</h1>
          <p>A cotação do peso argentino hoje é de R$ {props.cotacao} para cada real. Isso significa que, para comprar um peso argentino, é necessário gastar R$ {props.cotacao} reais. É importante destacar que a cotação do peso argentino pode mudar diariamente, portanto, é fundamental estar sempre atualizado para tomar decisões financeiras informadas e eficientes.</p>
          <Table cotacao={props.cotacao} moeda={'Peso Argentino'} code={props.code} />
          <h2>Sobre o peso argentino</h2>
          <p>O peso argentino é a moeda oficial da Argentina e foi adotado como tal em 1992, substituindo o austral. Ele é dividido em 100 centavos e é emitido pelo Banco Central da Argentina. O peso argentino é frequentemente afetado pela economia do país, que tem enfrentado problemas econômicos e políticos nos últimos anos.</p>
          <h2>Qual a diferença entre peso argentino comercial e peso argentino turismo?</h2>
          <p>A diferença entre o peso argentino comercial e o peso argentino turismo é que a primeira é usada para transações comerciais e financeiras, enquanto a segunda é aplicada para trocas de moeda por turistas que visitam a Argentina. A taxa comercial é determinada pelo mercado de câmbio e a taxa turismo é ligeiramente diferente, refletindo as flutuações do mercado.</p>
          <h2>Como posso converter peso argentino em real?</h2>
          <p>Se você deseja converter peso argentino para real, você pode usar a ferramenta online XMOEDAS. Basta inserir a quantidade de pesos argentinos que você deseja converter e a ferramenta dará o valor equivalente em reais. É importante lembrar de verificar a cotação atual antes de fazer qualquer conversão, pois elas podem variar ao longo do tempo.</p>
          <h2>Observação sobre o conversor</h2>
          <p>Atenção: as cotações de moedas apresentadas neste conversor são meramente informativas e podem não ser 100% precisas. Antes de realizar qualquer transação financeira ou tomar uma decisão com base nas cotações apresentadas, recomenda-se consultar fontes especializadas para obter informações mais atualizadas e precisas.</p>
        </main>
      </>
  )
}
