import Head  from 'next/head';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import Conversor from 'components/Conversor/Conversor';
import Chart30days from 'components/Chart/Chart';
import axios from 'axios';

//Pegar a cotação da moeda e passa como props
export async function getStaticProps() {
 
    const code = 'CAD'
    
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
    let bid30days = {};
    await axios.get(last30day)
    .then(response => {
      const res30days = response.data
      bid30days = res30days
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
          <html lang="pt-BR" />
          <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico"/>
          <meta name="description" content="Cotação atualizada do dólar canadense hoje em relação ao real. Conversor de moedas e gráfico do dólar canadense nos últimos dias."/>
          <meta name="keywords" content="Dólar canadense, Conversor, Cotação, Real, Câmbio, Hoje, Preço" />
          <title>Dólar Canadense Hoje: Converter para Real, Cotação Atualizada e Gráfico.</title>
          
          <meta property="og:title" content="moedashoje.com" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="http://dolaragora.com/" />
          <meta property="og:image" content="http://ia.media-imdb.com/rock.jpg" />
          <meta property="og:description" content="A group of U.S. Marines, under command of a renegade general, take over Alcatraz and threaten San Francisco Bay with biological weapons." />
          
        </Head>
        <Header />
        <div className='container_principal'>
          <Conversor cotacao={props.cotacao} currency={props.code} br={'BRL'} flag={'/flags/ca.svg'} />
          <Chart30days currency={props.code} last30days={props.bid30days} />
        </div>
        <main>
          <h2>Cotação do dólar canadense hoje</h2>
          <p>A cotação do dólar canadense (CAD) hoje é de R$ {props.cotacao} reais. Isso significa que cada dólar canadense está sendo negociado ao preço de R$ {props.cotacao} reais. A cotação do dólar canadense pode ser influenciada por uma variedade de fatores, incluindo a economia dos Estados Unidos e do Canadá, as taxas de juros, as expectativas de inflação e a demanda por recursos naturais do Canadá. Como investidor ou viajante, é importante estar ciente da cotação do dólar canadense e como ela pode afetar suas decisões.</p>
          <h2>Sobre o dólar canadense</h2>
          <p>O dólar canadense (CAD) é a moeda oficial do Canadá. Ele é emitido pelo Banco do Canadá e é utilizado em todo o país, incluindo as províncias e territórios. O símbolo usado para representar o dólar canadense é "C$" ou "CAD".<br/><br/> O dólar canadense é uma moeda flutuante, ou seja, seu valor é determinado pelo mercado e pode ser influenciado por diversos fatores, como a taxa de juros, a balança comercial, a política monetária e a situação econômica global.</p>
          <h2>Converter dólar canadense para real</h2>
          <p>X-MOEDAS é um conversor de moedas fácil de usar que permite que você converta dólar canadense (CAD) para real (BRL) em questão de segundos. Com taxas de câmbio atualizadas diariamente, você pode ter certeza de que está sempre obtendo o melhor preço possível.</p>
          
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
