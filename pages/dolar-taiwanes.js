import Head  from 'next/head';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import Conversor from 'components/Conversor/Conversor';
import Chart30days from 'components/Chart/Chart';
import axios from 'axios';

//Pegar a cotação da moeda e passa como props
export async function getStaticProps() {
 
    const code = 'TWD'
    
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
          <meta name="description" content="Cotação atualizada do dólar taiwanês hoje em relação ao real. Conversor de moedas e gráfico do dólar taiwanês nos últimos dias."/>
          <meta name="keywords" content="Dólar Taiwanês, Conversor, Cotação, Real, Câmbio, Hoje, Preço" />
          <title>Dólar Taiwanês Hoje: Converter para Real, Cotação Atualizada e Gráfico.</title>
          
          <meta property="og:title" content="moedashoje.com" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="http://dolaragora.com/" />
          <meta property="og:image" content="http://ia.media-imdb.com/rock.jpg" />
          <meta property="og:description" content="A group of U.S. Marines, under command of a renegade general, take over Alcatraz and threaten San Francisco Bay with biological weapons." />
          
        </Head>
        <Header />
        <div className='container_principal'>
          <Conversor cotacao={props.cotacao} currency={props.code} br={'BRL'} flag={'/flags/tw.svg'} />
          <Chart30days currency={props.code} last30days={props.bid30days} />
        </div>
        <main>
          <h2>Cotação do dólar taiwanês hoje</h2>
          <p>A cotação do dólar taiwanês hoje é de R$ {props.cotacao}. Isso significa que por cada dólar taiwanês, você pode trocar por R$ {props.cotacao} reais. Essa cotação pode variar ao longo do dia e é atualizada em tempo real no site.</p>
          <h2>Sobre o dólar taiwanês</h2>
          <p>O dólar taiwanês é a moeda oficial de Taiwan e é conhecido como "NT$" no mercado financeiro. É emitido pelo Banco Central de Taiwan e é usado como meio de pagamento nas transações comerciais e financeiras no país. Taiwan é uma economia desenvolvida e seus negócios internacionais têm uma grande importância para a economia global.</p>
          <h2>Converter dólar taiwanês para real</h2>
          <p>Para converter dólar taiwanês para real, você pode usar a ferramenta online do site X-MOEDAS. Basta inserir a quantidade de dólar taiwanês que deseja converter e a ferramenta exibirá o valor equivalente em reais. Isso é útil para quem viaja para Taiwan ou realiza transações comerciais com o país. Lembre-se de sempre verificar a cotação atualizada antes de realizar a conversão.</p>
          
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
