import Head  from 'next/head';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import Conversor from 'components/Conversor/Conversor';
import Chart30days from 'components/Chart/Chart';
import axios from 'axios';

//Pegar a cotação da moeda e passa como props
export async function getStaticProps() {
 
    const code = 'RUB'
    
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
          <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico"/>
          <meta name="description" content="Cotação atualizada do rublo hoje em relação ao real. Conversor de moedas e gráfico do rublo nos últimos dias."/>
          <meta name="keywords" content="Rublo, Russo, Conversor, Cotação, Real, Câmbio, Hoje, Preço" />
          <title>Rublo Russo Hoje: Converter para Real, Cotação Atualizada e Gráfico.</title>
          
          <meta property="og:title" content="moedashoje.com" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="http://dolaragora.com/" />
          <meta property="og:image" content="http://ia.media-imdb.com/rock.jpg" />
          <meta property="og:description" content="A group of U.S. Marines, under command of a renegade general, take over Alcatraz and threaten San Francisco Bay with biological weapons." />
          
        </Head>
        <Header />
        <div className='container_principal'>
          <Conversor cotacao={props.cotacao} currency={props.code} br={'BRL'} flag={'/flags/ru.svg'} />
          <Chart30days currency={props.code} last30days={props.bid30days} />
        </div>
        <main>
          <h2>Cotação do rublo hoje</h2>
          <p>A cotação atual do rublo russo é de R$ {props.cotacao} reais por unidade. Esta cotação pode variar diariamente e é importante ficar atento às flutuações do mercado para tomar decisões financeiras.</p>
          <h2>Sobre o rublo russo</h2>
          <p>O rublo é a moeda oficial da Rússia e é utilizado em todo o país. Ele é emitido pelo Banco Central da Rússia e é dividido em 100 kopeks. O rublo tem uma história longa e conturbada, tendo passado por várias reformas monetárias ao longo dos anos. A partir de 2000, o Banco Central da Rússia tem mantido uma política cambial flutuante, permitindo que o valor do rublo seja determinado pelo mercado.</p>
          <h2>Converter rublo para real</h2>
          <p>O site X-MOEDAS oferece uma ferramenta online para converter rublos em reais. Para usar essa ferramenta, você precisará inserir a quantidade de rublos desejada e a cotação atual será exibida. Isso pode ser útil para quem viaja para a Rússia ou precisa realizar transações comerciais com o país. É importante lembrar que a cotação do rublo pode variar diariamente, então é importante verificar a cotação atual antes de fazer qualquer transação.</p>
          
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
