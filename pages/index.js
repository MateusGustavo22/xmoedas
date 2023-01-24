import Head  from 'next/head';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import Conversor from 'components/Conversor/Conversor';
import Chart30days from 'components/Chart/Chart';
import axios from 'axios';

//Pegar a cotação da moeda e passa como props
export async function getStaticProps() {
 
    const code = 'USD'
    
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
    revalidate: 1,
  };
}

export default function Home(props) {
  
  return (
      <>
        <Head>
          <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico"/>
          <meta name="description" content="Cotação atualizada do dólar americano hoje em relação ao real. Conversor de moedas e gráfico do dólar nos últimos dias."/>
          <meta name="keywords" content="Dólar, Americano, Conversor, Cotação, Real, Câmbio, Hoje, Preço" />
          <title>Dólar Hoje: Converter Dólar para Real, Cotação Atualizada e Gráfico.</title>
          
          <meta property="og:title" content="moedashoje.com" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="http://dolaragora.com/" />
          <meta property="og:image" content="http://ia.media-imdb.com/rock.jpg" />
          <meta property="og:description" content="A group of U.S. Marines, under command of a renegade general, take over Alcatraz and threaten San Francisco Bay with biological weapons." />
          
        </Head>
        <Header />
        <div className='container_principal'>
          <Conversor cotacao={props.cotacao} currency={props.code} br={'BRL'} flag={'/flags/us.svg'} />
          <Chart30days currency={props.code} last30days={props.bid30days} />
        </div>
        <main>
          <h2>Cotação do dólar hoje</h2>
          <p>A cotação do dólar hoje é de R$ {props.cotacao} Isso significa que cada dólar americano está sendo negociado por R$ {props.cotacao} no mercado financeiro. Este valor pode variar diariamente devido a vários fatores, como a economia dos EUA e do Brasil, as notícias políticas e internacionais, entre outros. É importante ficar atento às variações da cotação do dólar, especialmente se você tem investimentos em dólar ou se planeja viajar para o exterior. Acompanhar a cotação diariamente pode ajudá-lo a tomar decisões financeiras mais informadas.</p>
          <h2>Sobre o dólar</h2>
          <p>O dólar americano é a moeda oficial dos Estados Unidos e é amplamente utilizado em todo o mundo como uma moeda de reserva e de troca. É emitido pelo Federal Reserve (Fed), o banco central dos Estados Unidos, e é composto por cédulas de papel e moedas de metal. O valor do dólar americano é determinado pelas leis da oferta e da procura no mercado cambial global.</p>
          <h2>Qual a diferença entre dólar comercial e dólar turismo?</h2>
          <p>A diferença entre o dólar comercial e o dólar turismo é que o dólar comercial é usado para transações comerciais, como importação e exportação de mercadorias, enquanto o dólar turismo é usado para transações relacionadas ao turismo, como compra de passagens aéreas e reserva de hotéis. O dólar turismo geralmente é cotado a um preço mais alto do que o dólar comercial devido às taxas de câmbio mais elevadas.</p>
          <h2>Converter dólar para real</h2>
          <p>O site X-MOEDAS é uma ferramenta prática e fácil de usar para converter valores em dólar para real. Basta inserir o valor em dólar que deseja converter e o nosso conversor fará o cálculo em tempo real, exibindo o valor em real equivalente. O site também permite que você compare as taxas de câmbio atuais do dólar com o real para que você possa tomar decisões informadas sobre suas transações financeiras. Aproveite a nossa ferramenta confiável e fácil de usar hoje mesmo no X-MOEDAS!</p>
          
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
