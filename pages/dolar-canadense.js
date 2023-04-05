import Head  from 'next/head';
import Conversor from 'components/Conversor/Conversor';
import Table from 'components/Table/Table';

//Pegar a cotação da moeda e passa como props
export async function getStaticProps() {
 
  const code = 'CAD'
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
          <meta name="description" content="Cotação atualizada do dólar canadense hoje em relação ao real. Conversor de moedas e gráfico do dólar canadense nos últimos dias."/>
          <meta name="keywords" content="Dólar canadense, Conversor, Cotação, Real, Câmbio, Hoje, Preço" />
          <title>Dólar Canadense Hoje: Cotação Comercial, Gráfico e Tabela - Xmoedas</title>
          <meta property="og:title" content="Dólar Canadense Hoje" />

        </Head>
        <div className='container_principal'>
          <Conversor 
            cotacao={props.cotacao} 
            code={props.code} 
            last30days={props.cot30bids} 
            moedaName={'Dólar Canadense'}
            flag={'/flags/ca.svg'} 
          />
        </div>
        <main className='mainContent'>
          <h1>Cotação do dólar canadense hoje</h1>
          <p>A cotação do dólar canadense (CAD) hoje é de R$ {props.cotacao} reais. Isso significa que cada dólar canadense está sendo negociado ao preço de R$ {props.cotacao} reais. A cotação do dólar canadense pode ser influenciada por uma variedade de fatores, incluindo a economia dos Estados Unidos e do Canadá, as taxas de juros, as expectativas de inflação e a demanda por recursos naturais do Canadá. Como investidor ou viajante, é importante estar ciente da cotação do dólar canadense e como ela pode afetar suas decisões.</p>
          <Table cotacao={props.cotacao} moeda={'Dólar Canadense'} code={props.code} />
          <h2>Sobre o dólar canadense</h2>
          <p>O dólar canadense (CAD) é a moeda oficial do Canadá. Ele é emitido pelo Banco do Canadá e é utilizado em todo o país, incluindo as províncias e territórios. O símbolo usado para representar o dólar canadense é "C$" ou "CAD".<br/><br/> O dólar canadense é uma moeda flutuante, ou seja, seu valor é determinado pelo mercado e pode ser influenciado por diversos fatores, como a taxa de juros, a balança comercial, a política monetária e a situação econômica global.</p>
          <h2>Qual a diferença entre dólar canadense comercial e dólar canadense turismo?</h2>
          <p>O dólar canadense é a moeda oficial do Canado e pode ser encontrado em duas taxas diferentes: a taxa comercial e a taxa turística. A diferença entre as duas é a seguinte:</p><br/>
          <p><strong>Taxa comercial:</strong> É a taxa utilizada para transações comerciais e financeiras, como a compra e venda de bens e serviços. Ela reflete a força econômica do Canado e é determinada pelo mercado financeiro.</p><br/>
          <p><strong>Taxa turística:</strong> É a taxa utilizada para viagens e turismo. Ela é mais alta do que a taxa comercial e inclui uma margem adicional para cobrir os custos dos intermediários financeiros, como bancos e casas de câmbio.Em resumo, a taxa comercial é mais adequada para transações comerciais, enquanto a taxa turística é mais adequada para viagens e transações turísticas. É importante lembrar que as taxas de câmbio são flutuantes e mudam diariamente.</p>
          <h2>Como posso converter dólar canadense em real?</h2>
          <p>O site XMOEDAS é uma ferramenta prática e fácil de usar para converter valores em dólar para real. Basta inserir o valor em dólar que deseja converter e o nosso conversor fará o cálculo em tempo real, exibindo o valor em real equivalente. O site também permite que você compare as taxas de câmbio atuais do dólar com o real para que você possa tomar decisões informadas sobre suas transações financeiras. Aproveite a nossa ferramenta confiável e fácil de usar hoje mesmo no XMOEDAS!</p>
          <h2>Observação sobre o conversor</h2>
          <p>Atenção: as cotações de moedas apresentadas neste conversor são meramente informativas e podem não ser 100% precisas. Antes de realizar qualquer transação financeira ou tomar uma decisão com base nas cotações apresentadas, recomenda-se consultar fontes especializadas para obter informações mais atualizadas e precisas.</p>
        </main>
      </>
  )
}
