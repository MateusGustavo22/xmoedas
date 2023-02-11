import Head  from 'next/head';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import Conversor from 'components/Conversor/Conversor';
import Chart30days from 'components/Chart/Chart';
import axios from 'axios';
import Table from 'components/Table/Table';

//Pegar a cotação da moeda e passa como props
export async function getStaticProps() {
 
    const code = 'EUR'
    
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
          <meta name="description" content="Cotação atualizada do euro hoje em relação ao real. Conversor de moedas e gráfico do euro nos últimos dias."/>
          <meta name="keywords" content="Euro, Conversor, Cotação, Real, Câmbio, Hoje, Preço" />
          <title>Euro Hoje: Cotação Comercial Atual. Gráfico e Tabela - XMOEDAS</title>
          <meta property="og:title" content="Euro Hoje" />

        </Head>
        <Header />
        <div className='container_principal'>
          <Conversor cotacao={props.cotacao} currency={props.code} br={'BRL'} flag={'/flags/eu.svg'} />
          <Chart30days currency={props.code} last30days={props.bid30days} />
        </div>
        <main>
          <h1>Cotação do euro hoje</h1>
          <p>A cotação do euro hoje é de R$ {props.cotacao}. Isso significa que por cada euro, você pode obter R$ {props.cotacao} reais. É importante notar que as cotações podem mudar diariamente, então é importante verificar regularmente para obter as cotações atuais.</p>
          <Table cotacao={props.cotacao} moeda={'Euro'} code={props.code} />
          <h2>Sobre o euro</h2>
          <p>O euro é a moeda oficial da União Europeia e é usada por 19 dos 27 países membros da UE. Ele foi introduzido em 1999 como uma moeda eletrônica e em 2002 começou a ser usado como moeda física. O euro é a segunda moeda de reserva mais utilizada e a segunda moeda mais negociada no mercado cambial mundial. Ele é visto como uma moeda estável e confiável e é usado para facilitar o comércio e os investimentos entre os países membros da UE.</p>
          <h2>Qual a diferença entre euro comercial e euro turismo?</h2>
          <p>O euro comercial é o valor oficial do euro utilizado para transações comerciais e financeiras. Já o euro turismo é a taxa de câmbio aplicada pelos estabelecimentos financeiros para a compra de euros por outra moeda, geralmente utilizada pelos turistas que viajam para países da União Europeia. Em geral, a taxa de câmbio do euro turismo é ligeiramente diferente da taxa comercial, refletindo as flutuações do mercado de câmbio.</p>
          <h2>Como posso converter euro em real?</h2>
          <p>Se você deseja converter euros para reais, pode usar a ferramenta online do site XMOEDAS. Basta inserir a quantidade de euros que deseja converter e a ferramenta calculará automaticamente a quantidade correspondente em reais. Essa ferramenta é útil para quem viaja para a Europa, faz negócios comerciais ou investimentos na região, ou simplesmente gosta de acompanhar as cotações das moedas. É importante lembrar que a taxa de câmbio pode variar de acordo com o banco ou casa de câmbio que você utiliza, por isso é importante sempre verificar as cotações antes de realizar qualquer transação.</p>
        </main>
        <Footer/>
      </>
  )
}
