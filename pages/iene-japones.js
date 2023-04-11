import Head  from 'next/head';
import Conversor from 'components/Conversor/Conversor';
import Table from 'components/Table/Table';

//Pegar a cotação da moeda e passa como props
export async function getStaticProps() {
 
  const code = 'JPY'

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
          <meta name="description" content="Cotação atualizada do iene japonês hoje em relação ao real. Conversor de moedas e gráfico do iene nos últimos dias."/>
          <meta name="keywords" content="Iene, Conversor, Cotação, Real, Câmbio, Hoje, Preço" />
          <title>Iene Japonês Hoje: Cotação Comercial, Gráfico  e Tabela - Xmoedas</title>
          <meta property="og:title" content="Iene Japonês Hoje" />

        </Head>
        <div className='container_principal'>
          <Conversor 
            cotacao={props.cotacao} 
            code={props.code} 
            last7days={props.last7days}
            last30days={props.last30days} 
            last365days={props.last365days}
            moedaName={'Iene Japonês'}
            flag={'/flags/jp.svg'} 
          />
        </div>
        <main className='mainContent'>
          <h1>Cotação do iene hoje</h1>
          <p>Hoje, a cotação do iene japonês (JPY) em relação ao real brasileiro (BRL) está em torno de R$ {props.cotacao} reais. Isso significa que para comprar 1 JPY, é necessário desembolsar cerca de R$ {props.cotacao} reais.</p><br/>
          <p>A taxa de câmbio do JPY pode variar ao longo do dia, dependendo de diversos fatores, como a oferta e demanda da moeda no mercado internacional, a política monetária do Banco do Japão, a situação econômica do Japão e de outros países, entre outros.</p><br/>
          <p>Para quem está planejando uma viagem para o Japão ou para quem precisa realizar transações comerciais com parceiros japoneses, é importante acompanhar a cotação do JPY e realizar operações de câmbio no momento mais favorável, a fim de obter a melhor taxa possível.</p><br/>
          <p>Além disso, é recomendado pesquisar e comparar as taxas de câmbio oferecidas por diferentes casas de câmbio e bancos, a fim de evitar possíveis golpes e obter a melhor taxa de câmbio possível.</p><br/>
          <p>É importante lembrar que a cotação apresentada aqui é apenas uma referência e pode variar ao longo do dia, por isso é necessário consultar fontes confiáveis e atualizadas para obter informações precisas sobre a cotação do JPY.</p>
          <Table cotacao={props.cotacao} moeda={'Iene'} code={props.code} />
          <h2>Sobre o iene japonês</h2>
          <p>O iene japonês (JPY) é a moeda oficial do Japão, um país insular na Ásia Oriental. É emitido pelo Banco do Japão e é amplamente utilizado tanto no Japão quanto em transações internacionais.</p><br/>
          <p>O iene japonês é subdividido em 100 sen, embora as moedas de sen não estejam mais em circulação. As moedas em circulação incluem 1, 5, 10, 50, 100 e 500 ienes, enquanto as notas em circulação incluem 1.000, 2.000, 5.000 e 10.000 ienes.</p><br/>
          <p>O Japão tem uma das maiores economias do mundo, e o iene japonês é uma das moedas mais negociadas no mercado de câmbio global. A taxa de câmbio do iene japonês é determinada pela oferta e demanda da moeda no mercado internacional.</p><br/>
          <p>A política monetária do Banco do Japão é um importante fator que influencia a taxa de câmbio do iene japonês. Por exemplo, o Banco do Japão pode intervir no mercado de câmbio para comprar ou vender ienes, a fim de influenciar a taxa de câmbio em relação a outras moedas.</p><br/>
          <p>No Japão, a maioria das transações é feita eletronicamente, e os caixas eletrônicos estão amplamente disponíveis em todo o país para a retirada de dinheiro em ienes. Além disso, os cartões de crédito são amplamente aceitos em estabelecimentos comerciais em todo o Japão.</p><br/>
          <p>Para turistas que visitam o Japão, é importante notar que a maioria das lojas e restaurantes não aceita outras moedas além do iene japonês. É recomendado trocar dinheiro em casas de câmbio oficiais ou bancos, em vez de recorrer a cambistas informais, que podem oferecer taxas de câmbio desfavoráveis ou notas falsificadas.</p>
          <h2>Como posso converter iene japonês em real?</h2>
          <p>O nosso site XMOEDAS oferece uma ferramenta online para converter iene japonês em reais. Para usar essa ferramenta, você precisará inserir a quantidade de iene desejada e a cotação atual será exibida. Isso pode ser útil para quem viaja para o Japão ou precisa realizar transações comerciais com o país.</p>
          <h2>Observação sobre o conversor</h2>
          <p>Atenção: as cotações de moedas apresentadas neste conversor são meramente informativas e podem não ser 100% precisas. Antes de realizar qualquer transação financeira ou tomar uma decisão com base nas cotações apresentadas, recomenda-se consultar fontes especializadas para obter informações mais atualizadas e precisas.</p>
       </main>
      </>
  )
}
