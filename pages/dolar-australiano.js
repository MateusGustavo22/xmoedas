import Head  from 'next/head';
import Conversor from 'components/Conversor/Conversor';
import Chart30days from 'components/Chart/Chart';
import axios from 'axios';
import Table from 'components/Table/Table';

//Pegar a cotação da moeda e passa como props
export async function getStaticProps() {
 
    const code = 'AUD'
    
    //Pega a cotação da moeda
    const apiLink = `https://economia.awesomeapi.com.br/json/last/${code}-BRL`
    let cotacao = 0;
    await axios.get(apiLink)
    .then(response => {
      const resJson = response.data
      const strForNum = parseFloat(resJson[code+'BRL'].bid)
      cotacao = strForNum.toFixed(2)
    })
    .catch(err => {
      console.log(err)
    });
    
    //Pega as ultimas cotações da moeda e passa para o componente Chart
    const last30day = `https://economia.awesomeapi.com.br/json/daily/${code}-BRL/30`
    let bid30days = {
      bid: [],
      timestamp: []
    };
    
    await axios.get(last30day)
    .then(response => {
      const res30days = response.data
      for (let i = 0; i < 30; i++) {
        bid30days.bid.push(res30days[i].bid)
        bid30days.timestamp.push(res30days[i].timestamp)
      }
    })
    .catch(err => {
      console.log(err)
    });

  return {
    props: {
      cotacao,
      code,
      bid30days,
    },
    revalidate: 3600,
  };
}

export default function Home(props) {
  
  return (
      <>
        <Head>
          <meta name="description" content="Cotação atualizada do dólar australiano hoje em relação ao real. Conversor de moedas e gráfico do dólar australiano nos últimos dias."/>
          <meta name="keywords" content="Dólar australiano, Conversor, Cotação, Real, Câmbio, Hoje, Preço" />
          <title>Dólar Australiano Hoje: Cotação Comercial, Gráfico e Tabela - Xmoedas</title>
          <meta property="og:title" content="Dólar Australiano Hoje" />
          
        </Head>
        <div className='container_principal'>
          <Conversor cotacao={props.cotacao} currency={props.code} br={'BRL'} flag={'/flags/au.svg'} />
          <Chart30days currency={props.code} last30days={props.bid30days} />
        </div>
        <main className='mainContent'>
          <h1>Cotação do dólar australiano hoje</h1>
          <p>A cotação do dólar australiano hoje é de R$ {props.cotacao} reais. Isso significa que para comprar 1 dólar australiano, é necessário pagar R$ {props.cotacao} reais. A cotação do dólar australiano pode variar diariamente devido a diversos fatores econômicos e políticos.</p>
          <Table cotacao={props.cotacao} moeda={'Dólar Austráliano'} code={props.code} />
          <h2>Sobre o dólar australiano</h2>
          <p>O dólar australiano é a moeda oficial da Austrália e é utilizado em todo o território australiano. Ele é emitido e controlado pelo Banco da Austrália e é considerado uma das moedas mais estáveis e fortes do mundo. A economia australiana é altamente dependente das exportações de recursos naturais, o que pode afetar o valor do dólar australiano em relação às outras moedas.</p>
          <h2>Qual a diferença entre dólar australiano comercial e dólar australiano turismo?</h2>
          <p>O Dólar Australiano Comercial é usado para transações comerciais, como importação e exportação de bens e serviços. Já o Dólar Australiano de Turismo é usado para fins turísticos, como compras de produtos e pagamentos de hospedagem e alimentação. Embora ambos sejam denominados em dólares australianos, as taxas de câmbio podem variar devido a fatores como a demanda do mercado e as condições econômicas locais. Por isso, é importante verificar as taxas de câmbio antes de realizar transações em moeda estrangeira.</p>
          <h2>Como posso converter dólar australiano em real?</h2>
          <p>A ferramenta online XMOEDAS oferece a possibilidade de converter dólar australiano para real. Para fazer a conversão, basta inserir a quantidade desejada de dólares australianos e a ferramenta calculará automaticamente o valor equivalente em reais, de acordo com a cotação atual. Essa ferramenta é útil para quem viaja para a Austrália ou precisa realizar transações comerciais com o país, pois permite saber quanto dinheiro será necessário e ajuda a planejar as finanças.</p>
          <h2>Observação sobre o conversor</h2>
          <p>Atenção: as cotações de moedas apresentadas neste conversor são meramente informativas e podem não ser 100% precisas. Antes de realizar qualquer transação financeira ou tomar uma decisão com base nas cotações apresentadas, recomenda-se consultar fontes especializadas para obter informações mais atualizadas e precisas.</p>
        </main>
      </>
  )
}
