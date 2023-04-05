import Head  from 'next/head';
import Conversor from 'components/Conversor/Conversor';
import Table from 'components/Table/Table';

//Pegar a cotação da moeda e passa como props
export async function getStaticProps() {
 
  const code = 'RUB'
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
          <meta name="description" content="Cotação atualizada do rublo russo hoje em relação ao real. Conversor de moedas e gráfico do rublo nos últimos dias."/>
          <meta name="keywords" content="Rublo, Russo, Conversor, Cotação, Real, Câmbio, Hoje, Preço" />
          <title>Rublo Russo Hoje: Cotação Comercial, Gráfico e Tabela - Xmoedas</title>
          <meta property="og:title" content="Rublo Russo Hoje" />

        </Head>
        <div className='container_principal'>
          <Conversor 
            cotacao={props.cotacao} 
            code={props.code} 
            last30days={props.cot30bids} 
            moedaName={'Rublo Russo'}
            flag={'/flags/ru.svg'} 
          />
        </div>
        <main className='mainContent'>
          <h1>Cotação do rublo russo hoje</h1>
          <p>A cotação atual do rublo russo é de R$ {props.cotacao} reais por unidade. Esta cotação pode variar diariamente e é importante ficar atento às flutuações do mercado para tomar decisões financeiras.</p>
          <Table cotacao={props.cotacao} moeda={'Rublo'} code={props.code} />
          <h2>Sobre o rublo russo</h2>
          <p>O rublo é a moeda oficial da Rússia e é utilizado em todo o país. Ele é emitido pelo Banco Central da Rússia e é dividido em 100 kopeks. O rublo tem uma história longa e conturbada, tendo passado por várias reformas monetárias ao longo dos anos. A partir de 2000, o Banco Central da Rússia tem mantido uma política cambial flutuante, permitindo que o valor do rublo seja determinado pelo mercado.</p>
          <h2>Como posso converter rublo para real?</h2>
          <p>O site XMOEDAS oferece uma ferramenta online para converter rublos em reais. Para usar essa ferramenta, você precisará inserir a quantidade de rublos desejada e a cotação atual será exibida. Isso pode ser útil para quem viaja para a Rússia ou precisa realizar transações comerciais com o país. É importante lembrar que a cotação do rublo pode variar diariamente, então é importante verificar a cotação atual antes de fazer qualquer transação.</p>
          <h2>Observação sobre o conversor</h2>
          <p>Atenção: as cotações de moedas apresentadas neste conversor são meramente informativas e podem não ser 100% precisas. Antes de realizar qualquer transação financeira ou tomar uma decisão com base nas cotações apresentadas, recomenda-se consultar fontes especializadas para obter informações mais atualizadas e precisas.</p>
        </main>
      </>
  )
}
