import Head  from 'next/head';
import Conversor from 'components/Conversor/Conversor';
import Table from 'components/Table/Table';

//Pegar a cotação da moeda e passa como props
export async function getStaticProps() {
 
  const code = 'CHF'

  const fetchData = async (url) => {
    const response = await fetch(url)
    const responseData = await response.json()
    const cotacaoAtual = parseFloat(responseData[code+'BRL'].bid).toFixed(2)
    
    return cotacaoAtual
  }

  const fetchDataChart = async (url) => {
    const response = await fetch(url)
    const responseData = await response.json()

    const cot = responseData.map(data =>  {
      let value = parseFloat(data.bid)
      return value < 1 ? value.toFixed(3) : value.toFixed(2)
    })

    const cotDate = responseData.map(data => new Date(data.timestamp * 1000).toLocaleDateString("pt-BR", { month: '2-digit', day: '2-digit' }))
    cot.reverse()
    cotDate.reverse()
    
    return {cot, cotDate}

  }

  const cotacao = await fetchData(`https://economia.awesomeapi.com.br/json/last/${code}-BRL`)
  const last7days = await fetchDataChart(`https://economia.awesomeapi.com.br/json/daily/${code}-BRL/7`)
  const last30days = await fetchDataChart(`https://economia.awesomeapi.com.br/json/daily/${code}-BRL/30`)
  const last365days = await fetchDataChart(`https://economia.awesomeapi.com.br/json/daily/${code}-BRL/365`)

  return {
    props: {
      cotacao,
      code,
      last7days,
      last30days,
      last365days 
    },
    revalidate: 3600,
  };

}

export default function Home(props) {
  
  return (
      <>
        <Head>
          <meta name="description" content="Cotação atualizada do franco suíço hoje em relação ao real. Conversor de moedas e gráfico do franco suíço nos últimos dias."/>
          <meta name="keywords" content="Franco suíço, Conversor, Cotação, Real, Câmbio, Hoje, Preço" />
          <title>Franco Suíço Hoje: Cotação Comercial, Gráfico e Tabela - Xmoedas</title>
          <meta property="og:title" content="Franco Suíço Hoje" />

        </Head>
        <div className='container_principal'>
          <Conversor 
            cotacao={props.cotacao} 
            code={props.code} 
            last7days={props.last7days}
            last30days={props.last30days} 
            last365days={props.last365days}
            moedaName={'Franco Suíço'}
            flag={'/flags/ch.svg'} 
          />
        </div>
        <main className='mainContent'>
          <h1>Cotação do franco suíço hoje</h1>
          <p>A cotação do franco suíço hoje é de R$ {props.cotacao} reais. Isso significa que, para comprar um franco suíço, é necessário gastar R$ {props.cotacao} reais. O franco suíço é conhecido por ser uma moeda forte e estável, e é amplamente utilizado para investimentos financeiros e para fazer transferências internacionais. Além disso, a Suíça é um país economicamente forte, o que contribui para a solidez da sua moeda. No entanto, é importante lembrar que a cotação do franco suíço pode sofrer variações diariamente, portanto, é sempre recomendável manter-se atualizado sobre as flutuações do mercado financeiro.</p>
          <Table cotacao={props.cotacao} moeda={'Franco Suíço'} code={props.code} />
          <h2>Sobre o franco suíço</h2>
          <p>O franco suíço (CHF) é a moeda oficial da Suíça e do Liechtenstein. Ele é emitido pelo Banco Nacional Suíço e é amplamente utilizado em toda a Suíça como meio de troca para transações comerciais, bem como para o pagamento de serviços e impostos.</p><br/>
          <p>O franco suíço é considerado uma das moedas mais seguras e estáveis do mundo, devido à economia estável da Suíça e à política monetária conservadora do Banco Nacional Suíço. Isso significa que a taxa de câmbio do CHF é geralmente menos volátil do que outras moedas.</p><br/>
          <p>O franco suíço é usado não apenas na Suíça e no Liechtenstein, mas também em algumas regiões da Itália, França e Alemanha que fazem fronteira com a Suíça. Além disso, o CHF é amplamente aceito em transações comerciais internacionais em todo o mundo.</p><br/>
          <p>Devido à sua estabilidade e segurança, o franco suíço é considerado uma moeda de refúgio seguro em momentos de incerteza econômica global. Por exemplo, durante a crise financeira de 2008, o CHF foi bastante procurado pelos investidores como uma alternativa mais segura ao dólar americano e ao euro.</p><br/>
          <p>Para quem está planejando uma viagem para a Suíça ou para quem precisa realizar transações comerciais com parceiros suíços, é importante acompanhar a cotação do CHF e realizar operações de câmbio no momento mais favorável, a fim de obter a melhor taxa possível.</p>
          <h2>Como posso converter franco suíço em real?</h2>
          <p>Para converter franco suíço para real, você pode usar a ferramenta online disponível no site XMOEDAS. Basta inserir a quantidade de francos suíços que deseja converter e a ferramenta calculará automaticamente o valor equivalente em reais. Isso é útil para quem viaja para a Suíça ou precisa fazer transações comerciais com o país.</p>
          <h2>Observação sobre o conversor</h2>
          <p>Atenção: as cotações de moedas apresentadas neste conversor são meramente informativas e podem não ser 100% precisas. Antes de realizar qualquer transação financeira ou tomar uma decisão com base nas cotações apresentadas, recomenda-se consultar fontes especializadas para obter informações mais atualizadas e precisas.</p>
        </main>
      </>
  )
}
