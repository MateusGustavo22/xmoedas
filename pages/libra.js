import Head  from 'next/head';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import Conversor from 'components/Conversor/Conversor';
import Chart30days from 'components/Chart/Chart';
import axios from 'axios';

//Pegar a cotação da moeda e passa como props
export async function getStaticProps() {
 
    const code = 'GBP';
    
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
          <meta name="description" content="Cotação atualizada da Libra esterlina hoje em relação ao real. Conversor de moedas e gráfico da libra nos últimos dias."/>
          <meta name="keywords" content="Libra, Conversor, Cotação, Real, Câmbio, Hoje, Preço" />
          <title>Libra Esterlina Hoje: Cotação Comercial Atual. Converter para Real e Gráfico - XMOEDAS</title>
          
        </Head>
        <Header />
        <div className='container_principal'>
          <Conversor cotacao={props.cotacao} currency={props.code} br={'BRL'} flag={'/flags/gb.svg'} />
          <Chart30days currency={props.code} last30days={props.bid30days} />
        </div>
        <main>
          <h2>Cotação da libra hoje</h2>
          <p>A cotação da libra esterlina hoje é de R$ {props.cotacao}. Isso significa que por cada libra esterlina, você pode obter R$ {props.cotacao} reais. É importante notar que as cotações podem mudar diariamente, então é importante verificar regularmente para obter as cotações atuais.</p>
          <h2>Sobre a libra esterlina</h2>
          <p>A libra esterlina é a moeda oficial do Reino Unido e é comumente conhecida como "libra" ou "sterling". Ela é emitida e regulada pelo Banco da Inglaterra e é aceita em todo o território do Reino Unido. A libra é vista como uma moeda estável e confiável e é usada para facilitar o comércio e os investimentos internacionais. A libra é a quarta moeda mais negociada no mercado cambial mundial e é usada como uma moeda de reserva internacional.</p>
          <h2>Qual a diferença entre libra comercial e libra turismo</h2>
          <p>A libra comercial é o valor oficial da libra esterlina utilizado para transações comerciais e financeiras. Já a libra turismo é a taxa de câmbio aplicada pelos estabelecimentos financeiros para a compra de libras por outra moeda, geralmente utilizada pelos turistas que viajam para o Reino Unido. Em geral, a taxa de câmbio da libra turismo é ligeiramente diferente da taxa comercial, refletindo as flutuações do mercado de câmbio.</p>
          <h2>Converter libra para real</h2>
          <p>Se você deseja converter libras esterlinas para reais, pode usar a ferramenta online do site X-MOEDAS. Basta inserir a quantidade de libras esterlinas que deseja converter e a ferramenta calculará automaticamente a quantidade correspondente em reais. Essa ferramenta é útil para quem viaja para o Reino Unido, faz negócios comerciais ou investimentos no país, ou simplesmente gosta de acompanhar as cotações das moedas. É importante lembrar que a taxa de câmbio pode variar de acordo com o banco ou casa de câmbio que você utiliza, por isso é importante sempre verificar as cotações antes de realizar qualquer transação.</p>
          
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
