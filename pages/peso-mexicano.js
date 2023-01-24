import Head  from 'next/head';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import Conversor from 'components/Conversor/Conversor';
import Chart30days from 'components/Chart/Chart';
import axios from 'axios';

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
          <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico"/>
          <meta name="description" content="Cotação atualizada do peso mexicano hoje em relação ao real. Conversor de moedas e gráfico do peso mexicano nos últimos dias."/>
          <meta name="keywords" content="Peso, Mexicano, Conversor, Cotação, Real, Câmbio, Hoje, Preço" />
          <title>Peso Mexicano Hoje: Converter para Real, Cotação Atualizada e Gráfico.</title>
          
          <meta property="og:title" content="moedashoje.com" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="http://dolaragora.com/" />
          <meta property="og:image" content="http://ia.media-imdb.com/rock.jpg" />
          <meta property="og:description" content="A group of U.S. Marines, under command of a renegade general, take over Alcatraz and threaten San Francisco Bay with biological weapons." />
          
        </Head>
        <Header />
        <div className='container_principal'>
          <Conversor cotacao={props.cotacao} currency={props.code} br={'BRL'} flag={'/flags/mx.svg'} />
          <Chart30days currency={props.code} last30days={props.bid30days} />
        </div>
        <main>
          <h2>Cotação do peso mexicano hoje</h2>
          <p>A cotação do peso mexicano hoje é de R$ {props.cotacao} para cada real brasileiro. Isso significa que, para comprar 1 peso mexicano, é necessário pagar R$ {props.cotacao} reais. É importante lembrar que as cotações podem variar ao longo do dia e que é sempre recomendado verificar a cotação atual antes de realizar qualquer operação com moedas estrangeiras.</p>
          <h2>Sobre o peso mexicano</h2>
          <p>O peso mexicano é a moeda oficial do México e é usado em todo o país. Ele é dividido em 100 centavos e é emitido pelo Banco Central do México. O símbolo para o peso mexicano é "$" e a abreviaturão é "MXN". O peso mexicano é uma das moedas emergentes mais negociadas no mundo e é considerado uma moeda de risco devido à volatilidade do país.</p>
          <h2>Converter peso mexicano para real</h2>
          <p>A ferramenta online X-MOEDAS oferece a possibilidade de converter peso mexicano em real. Para usar essa ferramenta, basta digitar o valor em pesos mexicanos e clicar em "converter". O site irá exibir o valor correspondente em reais. É uma ótima opção para quem precisa saber quanto dinheiro brasileiro corresponde a uma determinada quantidade de pesos mexicanos. O resultado pode variar de acordo com a cotação do dia.</p>
          
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
