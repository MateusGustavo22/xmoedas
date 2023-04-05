import Head  from 'next/head';
import Conversor from 'components/Conversor/Conversor';
import Table from 'components/Table/Table';

//Pegar a cotação da moeda e passa como props
export async function getStaticProps() {
 
  const code = 'GBP'
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
          <meta name="description" content="Cotação atualizada da Libra esterlina hoje em relação ao real. Conversor de moedas e gráfico da libra nos últimos dias."/>
          <meta name="keywords" content="Libra, Conversor, Cotação, Real, Câmbio, Hoje, Preço" />
          <title>Libra Esterlina Hoje: Cotação Comercial, Gráfico e Tabela - Xmoedas</title>
          <meta property="og:title" content="Libra Esterlina Hoje" />

        </Head>
        <div className='container_principal'>
          <Conversor 
            cotacao={props.cotacao} 
            code={props.code} 
            last30days={props.cot30bids} 
            moedaName={'Libra Esterlina'}
            flag={'/flags/gb.svg'} 
          />
        </div>
        <main className='mainContent'>
          <h1>Cotação da libra hoje</h1>
          <p>A cotação da libra esterlina hoje é de R$ {props.cotacao}. Isso significa que por cada libra esterlina, você pode obter R$ {props.cotacao} reais. É importante notar que as cotações podem mudar diariamente, então é importante verificar regularmente para obter as cotações atuais.</p>
          <Table cotacao={props.cotacao} moeda={'Libra'} code={props.code} />
          <h2>Sobre a libra esterlina</h2>
          <p>A libra esterlina é a moeda oficial do Reino Unido e é comumente conhecida como "libra" ou "sterling". Ela é emitida e regulada pelo Banco da Inglaterra e é aceita em todo o território do Reino Unido. A libra é vista como uma moeda estável e confiável e é usada para facilitar o comércio e os investimentos internacionais. A libra é a quarta moeda mais negociada no mercado cambial mundial e é usada como uma moeda de reserva internacional.</p>
          <h2>Qual a diferença entre libra comercial e libra turismo?</h2>
          <p>A libra comercial é o preço da libra esterlina em relação a outras moedas em operações de comércio, investimento e outras transações financeiras. Este preço é determinado pelo mercado e é usado por empresas, governos e outros participantes do mercado financeiro para fins comerciais e financeiros.</p><br/>
          <p>Já a libra turismo é o preço da libra esterlina para turistas e viajantes que compram moedas estrangeiras para viagens internacionais. Este preço geralmente é mais elevado do que o preço da libra comercial, pois inclui uma margem de lucro para as casas de câmbio e bancos que vendem moedas estrangeiras aos turistas.</p><br/>
          <p>Em resumo, a libra comercial é usada para fins comerciais e financeiros, enquanto a libra turismo é usada para fins de viagem e turismo. Embora ambas possam ser influenciadas pelos mesmos fatores econômicos e políticos, o preço da libra turismo pode ser mais elevado do que o preço da libra comercial.</p>
          <h2>Como posso converter libra em real?</h2>
          <p>Se você deseja converter libras esterlinas para reais, pode usar a ferramenta online do site XMOEDAS. Basta inserir a quantidade de libras esterlinas que deseja converter e a ferramenta calculará automaticamente a quantidade correspondente em reais. Essa ferramenta é útil para quem viaja para o Reino Unido, faz negócios comerciais ou investimentos no país, ou simplesmente gosta de acompanhar as cotações das moedas. É importante lembrar que a taxa de câmbio pode variar de acordo com o banco ou casa de câmbio que você utiliza, por isso é importante sempre verificar as cotações antes de realizar qualquer transação.</p>
          <h2>Observação sobre o conversor</h2>
          <p>Atenção: as cotações de moedas apresentadas neste conversor são meramente informativas e podem não ser 100% precisas. Antes de realizar qualquer transação financeira ou tomar uma decisão com base nas cotações apresentadas, recomenda-se consultar fontes especializadas para obter informações mais atualizadas e precisas.</p>
        </main>
      </>
  )
}
