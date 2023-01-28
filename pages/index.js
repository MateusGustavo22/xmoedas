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
    revalidate: 3600,
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
          <p>A cotação do dólar hoje é de R$ 5,10. Isso significa que o preço de compra e venda do dólar americano está em R$ {props.cotacao} no mercado. A cotação do dólar é importante para diversas transações comerciais e a variação pode afetar a economia do país.</p>
          <h2>Sobre o dólar americano</h2>
          <p>O dólar americano é a moeda oficial dos Estados Unidos e é amplamente utilizado em transações comerciais e financeiras internacionais. É considerada uma das principais moedas do mundo e é utilizada como referência em muitas transações cambiais. O dólar americano é emitido pelo Federal Reserve, o banco central dos Estados Unidos.</p>
          <h2>Qual a diferença entre dólar comercial e dólar turismo?</h2>
          <p>O dólar comercial é utilizado para transações comerciais enquanto o dólar turismo é utilizado para transações pessoais como viagens e compras no exterior. A cotação do dólar comercial é determinada pelo mercado, enquanto a cotação do dólar turismo é determinada pelo mercado e pela margem de lucro dos bancos.</p>
          <h2>Como o preço do dólar é influenciado hoje?</h2>
          <p>Política monetária: A política monetária do banco central americano (Federal Reserve) pode afetar a oferta de dólares e, consequentemente, a cotação do dólar. Por exemplo, se o Federal Reserve aumenta as taxas de juros, isso pode tornar o dólar mais atraente para os investidores, o que pode aumentar a cotação do dólar.</p><br/>
          <p>Situação econômica: A situação econômica dos Estados Unidos também pode afetar a cotação do dólar. Se a economia americana estiver se expandindo, isso pode aumentar a demanda por dólares e, consequentemente, aumentar a cotação do dólar.</p><br/>
          <p>Inflação: A inflação também pode afetar a cotação do dólar. Se a inflação estiver alta, isso pode diminuir o valor do dólar em relação às outras moedas.</p><br/>
          <p>Risco geopolítico: Eventos geopolíticos e riscos políticos globais, como guerras, crises políticas e mudanças na liderança de países importantes, podem afetar a cotação do dólar.</p><br/>
          <p>Investimentos estrangeiros: A entrada e saída de investimentos estrangeiros também podem afetar a cotação do dólar, pois quanto maior a oferta de dólares no mercado, menor será a cotação.</p><br/>
          <p>Dados econômicos: dados econômicos importantes, como o PIB, o desemprego, o índice de preços ao consumidor e o índice de preços ao produtor, também podem influenciar a cotação do dólar.</p><br/>
          <p>Expectativas de mercado: as expectativas do mercado, especialmente no que diz respeito a decisões políticas e econômicas futuras, também podem influenciar a cotação do dólar.</p>
          <h2>Como posso converter dólar para real?</h2>
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
