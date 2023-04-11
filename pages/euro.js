import Head  from 'next/head';
import Conversor from 'components/Conversor/Conversor';
import Table from 'components/Table/Table';

//Pegar a cotação da moeda e passa como props
export async function getStaticProps() {
 
  const code = 'EUR'

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
          <meta name="description" content="Cotação atualizada do euro hoje em relação ao real. Conversor de moedas e gráfico do euro nos últimos dias."/>
          <meta name="keywords" content="Euro, Conversor, Cotação, Real, Câmbio, Hoje, Preço" />
          <title>Euro Hoje: Cotação Comercial, Gráfico e Tabela - Xmoedas</title>
          <meta property="og:title" content="Euro Hoje" />

        </Head>
        <div className='container_principal'>
          <Conversor 
            cotacao={props.cotacao} 
            code={props.code} 
            last7days={props.last7days}
            last30days={props.last30days} 
            last365days={props.last365days}
            moedaName={'Euro'}
            flag={'/flags/eu.svg'} 
          />
        </div>
        <main className='mainContent'>
          <h1>Cotação do euro hoje</h1>
          <p>A cotação do euro hoje é de R$ {props.cotacao} reais. Isso significa que por cada euro, você pode obter R$ {props.cotacao} reais. É importante notar que as cotações podem mudar diariamente, então é importante verificar regularmente para obter as cotações atuais.</p>
          <Table cotacao={props.cotacao} moeda={'Euro'} code={props.code} />
          <h2>Sobre o euro</h2>
          <p>O euro é a moeda oficial da zona do euro, que é composta por 19 países da União Europeia. A moeda foi introduzida em 1999 e foi adotada como moeda oficial em 2002. Atualmente, o euro é uma das moedas mais importantes do mundo e é amplamente utilizado como reserva de valor, meio de troca e unidade de conta.</p><br/>
          <p>O euro é emitido pelo Banco Central Europeu (BCE) e é utilizado por mais de 330 milhões de pessoas em todo o mundo. A cotação do euro em relação a outras moedas pode flutuar de acordo com vários fatores econômicos e políticos, incluindo as taxas de juros, a inflação, a estabilidade política e econômica dos países da zona do euro, a oferta e demanda de euro nos mercados globais, entre outros.</p><br/>
          <p>O euro é uma das moedas mais negociadas no mercado cambial, juntamente com o dólar americano, o iene japonês e a libra esterlina. Ele também é usado em vários mercados financeiros globais, como o mercado de ações, o mercado de títulos e o mercado de câmbio.</p><br/>
          <p>Além disso, a zona do euro é uma das maiores economias do mundo e tem grande influência nos mercados globais. Por isso, as flutuações no valor do euro podem ter um impacto significativo na economia global, especialmente nos países que têm forte relação comercial com a zona do euro.</p><br/>
          <p>Em resumo, o euro é a moeda oficial da zona do euro e é amplamente utilizado em todo o mundo como reserva de valor, meio de troca e unidade de conta. Sua cotação pode ser influenciada por diversos fatores econômicos e políticos e é uma das moedas mais negociadas nos mercados globais.</p>
          <h2>Qual a diferença entre euro comercial e turismo?</h2>
          <p>No Brasil, as casas de câmbio e bancos oferecem duas cotações para o euro: o euro comercial e o euro turismo.</p><br/>
          <p>O <strong>euro comercial</strong> é a cotação utilizada em operações de comércio exterior, ou seja, é a taxa de câmbio usada nas transações comerciais entre empresas brasileiras e europeias. Essa cotação é geralmente mais baixa do que a cotação do euro turismo.</p><br/>
          <p>Já o <strong>euro turismo</strong> é a cotação utilizada nas operações de câmbio para compra de moeda estrangeira para fins de turismo ou viagens internacionais. Essa cotação é geralmente mais alta do que a cotação comercial, pois inclui taxas adicionais cobradas pelas casas de câmbio e bancos para a compra da moeda estrangeira.</p><br/>
          <p>Por isso, é sempre importante comparar as cotações oferecidas por diferentes casas de câmbio e bancos antes de realizar uma operação de câmbio, especialmente se você estiver comprando euro para fins de viagem ou turismo.</p>
          <h2>Como posso converter euro em real?</h2>
          <p>Se você deseja converter euros para reais, pode usar a ferramenta online do site XMOEDAS. Basta inserir a quantidade de euros que deseja converter e a ferramenta calculará automaticamente a quantidade correspondente em reais. Essa ferramenta é útil para quem viaja para a Europa, faz negócios comerciais ou investimentos na região, ou simplesmente gosta de acompanhar as cotações das moedas. É importante lembrar que a taxa de câmbio pode variar de acordo com o banco ou casa de câmbio que você utiliza, por isso é importante sempre verificar as cotações antes de realizar qualquer transação.</p>
          <h2>Observação sobre o conversor</h2>
          <p>Atenção: as cotações de moedas apresentadas neste conversor são meramente informativas e podem não ser 100% precisas. Antes de realizar qualquer transação financeira ou tomar uma decisão com base nas cotações apresentadas, recomenda-se consultar fontes especializadas para obter informações mais atualizadas e precisas.</p>
        </main>
      </>
  )
}
