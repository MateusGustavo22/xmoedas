import Head  from 'next/head';
import Conversor from 'components/Conversor/Conversor';
import Chart30days from 'components/Chart/Chart';
import axios from 'axios';
import Table from 'components/Table/Table';

//Pegar a cotação da moeda e passa como props
export async function getStaticProps() {
 
    const code = 'MXN';
    
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
          <meta name="description" content="Cotação atualizada do peso mexicano hoje em relação ao real. Conversor de moedas e gráfico do peso mexicano nos últimos dias."/>
          <meta name="keywords" content="Peso, Mexicano, Conversor, Cotação, Real, Câmbio, Hoje, Preço" />
          <title>Peso Mexicano Hoje: Cotação Comercial, Gráfico e Tabela - Xmoedas</title>
          <meta property="og:title" content="Peso Mexicano Hoje" />

        </Head>
        <div className='container_principal'>
          <Conversor cotacao={props.cotacao} currency={props.code} br={'BRL'} flag={'/flags/mx.svg'} />
          <Chart30days currency={props.code} last30days={props.bid30days} />
        </div>
        <main className='mainContent'>
          <h1>Cotação do peso mexicano hoje</h1>
          <p>A cotação do peso mexicano hoje é de R$ {props.cotacao} para cada real brasileiro. Isso significa que, para comprar 1 peso mexicano, é necessário pagar R$ {props.cotacao} reais. É importante lembrar que as cotações podem variar ao longo do dia e que é sempre recomendado verificar a cotação atual antes de realizar qualquer operação com moedas estrangeiras.</p>
          <Table cotacao={props.cotacao} moeda={'Peso Mexicano'} code={props.code} />
          <h2>Sobre o peso mexicano</h2>
          <p>O peso mexicano é a moeda oficial do México e é usado em todo o país. Ele é dividido em 100 centavos e é emitido pelo Banco Central do México. O símbolo para o peso mexicano é "$" e a abreviaturão é "MXN". O peso mexicano é uma das moedas emergentes mais negociadas no mundo e é considerado uma moeda de risco devido à volatilidade do país.</p>
          <h2>Qual a diferença entre peso mexicano comercial e peso mexicano turismo?</h2>
          <p>O peso mexicano comercial é a moeda oficial utilizada para transações comerciais e financeiras no México. Já o peso mexicano turismo é uma taxa de câmbio alternativa que é oferecida em alguns estabelecimentos turísticos e destinos de viagem, com o objetivo de oferecer preços mais competitivos aos turistas estrangeiros. Em geral, a taxa de câmbio do peso mexicano turismo é ligeiramente desfavorável em relação ao peso comercial, o que significa que os turistas pagam mais do que os preços reais quando usam esta moeda.</p>
          <h2>Como posso converter peso mexicano em real?</h2>
          <p>Se você deseja converter peso mexicano para real, você pode usar a ferramenta online XMOEDAS. Basta inserir a quantidade de pesos mexicano que você deseja converter e a ferramenta dará o valor equivalente em reais. É importante lembrar de verificar a cotação atual antes de fazer qualquer conversão, pois elas podem variar ao longo do tempo.</p>
          <h2>Observação sobre o conversor</h2>
          <p>Atenção: as cotações de moedas apresentadas neste conversor são meramente informativas e podem não ser 100% precisas. Antes de realizar qualquer transação financeira ou tomar uma decisão com base nas cotações apresentadas, recomenda-se consultar fontes especializadas para obter informações mais atualizadas e precisas.</p>
        </main>
      </>
  )
}
