import Head  from 'next/head';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import Conversor from 'components/Conversor/Conversor';
import Chart30days from 'components/Chart/Chart';
import axios from 'axios';

//Pegar a cotação da moeda e passa como props
export async function getStaticProps() {
 
    const code = 'CHF'
    
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
          <meta name="description" content="Cotação atualizada do franco suíço hoje em relação ao real. Conversor de moedas e gráfico do franco suíço nos últimos dias."/>
          <meta name="keywords" content="Franco suíço, Conversor, Cotação, Real, Câmbio, Hoje, Preço" />
          <title>Franco Suíço Hoje: Cotação Comercial Atual. Converter para Real e Gráfico - XMOEDAS</title>
          
        </Head>
        <Header />
        <div className='container_principal'>
          <Conversor cotacao={props.cotacao} currency={props.code} br={'BRL'} flag={'/flags/ch.svg'} />
          <Chart30days currency={props.code} last30days={props.bid30days} />
        </div>
        <main>
          <h2>Cotação do franco suíço hoje</h2>
          <p>A cotação do franco suíço hoje no site X-MOEDAS é de R$ {props.cotacao} reais por 1 franco suíço. Isso significa que, para comprar 1 franco suíço, é necessário pagar R$ {props.cotacao} reais.</p>
          <h2>Sobre o franco suíço</h2>
          <p>O franco suíço é a moeda oficial da Suíça e é considerada uma das moedas mais fortes e estáveis do mundo. Ela é emitida pelo Banco Nacional Suíço e é amplamente utilizada em transações internacionais. O franco suíço é dividido em 100 centavos.</p>
          <h2>Qual a diferença entre franco suíço comercial e franco suíço turismo?</h2>
          <p>O franco suíço comercial é a moeda oficial da Suíça e é usado para transações comerciais e financeiras no país. Já o franco suíço turismo é uma taxa de câmbio alternativa que é oferecida aos turistas estrangeiros em alguns estabelecimentos turísticos e destinos de viagem. Em geral, a taxa de câmbio do franco suíço turismo é ligeiramente desfavorável em relação ao franco suíço comercial, o que significa que os turistas pagam mais do que os preços reais quando usam esta moeda.</p>
          <h2>Converter franco suíço para real</h2>
          <p>Para converter franco suíço para real, você pode usar a ferramenta online disponível no site X-MOEDAS. Basta inserir a quantidade de francos suíços que deseja converter e a ferramenta calculará automaticamente o valor equivalente em reais. Isso é útil para quem viaja para a Suíça ou precisa fazer transações comerciais com o país.</p>
          
          <style jsx>{`
            main {
              max-width: 700px;
              padding: 20px;
              margin: auto;
              margin-bottom: 100px;
            }
            
            main h2, h3 {
              font-family: 'Inter', sans-serif;
              font-size: 22px;
              margin-bottom: 30px;
              margin-top: 30px;
              color: #333333;
            }
            
            main p {
              font-family: 'Inter', sans-serif;
              font-weight: normal;
              font-size: 17px;
              line-height: 1.5;
              color: #333333;
            }
          `}</style>
          
        </main>
        <Footer/>
      </>
  )
}
