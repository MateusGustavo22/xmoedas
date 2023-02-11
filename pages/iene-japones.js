import Head  from 'next/head';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import Conversor from 'components/Conversor/Conversor';
import Chart30days from 'components/Chart/Chart';
import axios from 'axios';
import Table from 'components/Table/Table';

//Pegar a cotação da moeda e passa como props
export async function getStaticProps() {
 
    const code = 'JPY';
    
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
          <meta name="description" content="Cotação atualizada do iene japonês hoje em relação ao real. Conversor de moedas e gráfico do iene nos últimos dias."/>
          <meta name="keywords" content="Iene, Conversor, Cotação, Real, Câmbio, Hoje, Preço" />
          <title>Iene Japonês Hoje: Cotação Comercial Atual. Gráfico  e Tabela - XMOEDAS</title>
          <meta property="og:title" content="Iene Japonês Hoje" />

        </Head>
        <Header />
        <div className='container_principal'>
          <Conversor cotacao={props.cotacao} currency={props.code} br={'BRL'} flag={'/flags/jp.svg'} />
          <Chart30days currency={props.code} last30days={props.bid30days} />
        </div>
        <main>
          <h1>Cotação do iene hoje</h1>
          <p>A cotação atual do iene japonês hoje é de R$ {props.cotacao} reais por unidade. Esta cotação pode variar diariamente e é importante ficar atento às flutuações do mercado para tomar decisões financeiras.</p>
          <Table cotacao={props.cotacao} moeda={'Iene'} code={props.code} />
          <h2>Sobre o iene japonês</h2>
          <p>O iene japonês é a moeda oficial do Japão e é utilizado em todo o país. Ele é uma das moedas mais fortes e estáveis do mundo, sendo amplamente utilizada em transações internacionais. Sua sigla é JPY e é dividido em 100 sen ou 1000 rin.</p>
          <h2>Qual a diferença entre iene comercial e iene turismo?</h2>
          <p>O iene comercial é a moeda oficial do Japão e é usado para transações comerciais e financeiras no país. Já o iene turismo é uma taxa de câmbio alternativa que é oferecida aos turistas estrangeiros em alguns estabelecimentos turísticos e destinos de viagem. Em geral, a taxa de câmbio do iene turismo é ligeiramente desfavorável em relação ao iene comercial, o que significa que os turistas pagam mais do que os preços reais quando usam esta moeda.</p>
          <h2>Como posso converter iene japonês em real?</h2>
          <p>O nosso site XMOEDAS oferece uma ferramenta online para converter iene japonês em reais. Para usar essa ferramenta, você precisará inserir a quantidade de iene desejada e a cotação atual será exibida. Isso pode ser útil para quem viaja para o Japão ou precisa realizar transações comerciais com o país.</p>
       </main>
        <Footer/>
      </>
  )
}
