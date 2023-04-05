import Head  from 'next/head';
import Conversor from 'components/Conversor/Conversor';
import Table from 'components/Table/Table';

//Pegar a cotação da moeda e passa como props
export async function getStaticProps() {
 
  const code = 'TWD'
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
          <meta name="description" content="Cotação atualizada do dólar taiwanês hoje em relação ao real. Conversor de moedas e gráfico do dólar taiwanês nos últimos dias."/>
          <meta name="keywords" content="Dólar Taiwanês, Conversor, Cotação, Real, Câmbio, Hoje, Preço" />
          <title>Dólar Taiwanês Hoje: Cotação Comercial, Gráfico e Tabela - Xmoedas</title>
          <meta property="og:title" content="Dólar Taiwanês Hoje" />

        </Head>
        <div className='container_principal'>
          <Conversor 
            cotacao={props.cotacao} 
            code={props.code} 
            last30days={props.cot30bids} 
            moedaName={'Dólar Taiwanês'}
            flag={'/flags/tw.svg'} 
          />
        </div>
        <main className='mainContent'>
          <h1>Cotação do dólar taiwanês hoje</h1>
          <p>A cotação do dólar taiwanês hoje é de R$ {props.cotacao}. Isso significa que por cada dólar taiwanês, você pode trocar por R$ {props.cotacao} reais. Essa cotação pode variar ao longo do dia e é atualizada em tempo real no site.</p>
          <Table cotacao={props.cotacao} moeda={'Dólar Taiwanês'} code={props.code} />
          <h2>Sobre o dólar taiwanês</h2>
          <p>O dólar taiwanês é a moeda oficial de Taiwan e é conhecido como "NT$" no mercado financeiro. É emitido pelo Banco Central de Taiwan e é usado como meio de pagamento nas transações comerciais e financeiras no país. Taiwan é uma economia desenvolvida e seus negócios internacionais têm uma grande importância para a economia global.</p>
          <h2>Qual a diferença entre dólar taiwanês comercial e dólar taiwanês turismo?</h2>
          <p>A diferença entre o dólar taiwanês comercial e o dólar taiwanês turismo é a mesma que existe entre qualquer outra moeda comercial e turística. O dólar taiwanês comercial é a moeda oficial utilizada para fins comerciais e financeiros na República da China (Taiwan), enquanto o dólar taiwanês turismo é utilizado apenas para fins turísticos, com taxas de câmbio geralmente mais elevadas que o dólar comercial. Em resumo, o dólar taiwanês comercial é usado para negociações e transações financeiras na Taiwan, enquanto o dólar taiwanês turismo é utilizado apenas para fins turísticos.</p>
          <h2>Como posso converter dólar taiwanês em real?</h2>
          <p>Para converter dólar taiwanês para real, você pode usar a ferramenta online do site XMOEDAS. Basta inserir a quantidade de dólar taiwanês que deseja converter e a ferramenta exibirá o valor equivalente em reais. Isso é útil para quem viaja para Taiwan ou realiza transações comerciais com o país. Lembre-se de sempre verificar a cotação atualizada antes de realizar a conversão.</p>
          <h2>Observação sobre o conversor</h2>
          <p>Atenção: as cotações de moedas apresentadas neste conversor são meramente informativas e podem não ser 100% precisas. Antes de realizar qualquer transação financeira ou tomar uma decisão com base nas cotações apresentadas, recomenda-se consultar fontes especializadas para obter informações mais atualizadas e precisas.</p>
        </main>
      </>
  )
}
