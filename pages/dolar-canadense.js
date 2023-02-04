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
          <meta name="description" content="Cotação atualizada do dólar canadense hoje em relação ao real. Conversor de moedas e gráfico do dólar canadense nos últimos dias."/>
          <meta name="keywords" content="Dólar canadense, Conversor, Cotação, Real, Câmbio, Hoje, Preço" />
          <title>Dólar Canadense Hoje: Cotação Comercial Atual. Converter para Real e Gráfico - XMOEDAS</title>
          <meta property="og:title" content="Dólar Canadense Hoje" />

        </Head>
        <Header />
        <div className='container_principal'>
          <Conversor cotacao={props.cotacao} currency={props.code} br={'BRL'} flag={'/flags/ca.svg'} />
          <Chart30days currency={props.code} last30days={props.bid30days} />
        </div>
        <main>
          <h1>Cotação do dólar canadense hoje</h1>
          <p>A cotação do dólar canadense (CAD) hoje é de R$ {props.cotacao} reais. Isso significa que cada dólar canadense está sendo negociado ao preço de R$ {props.cotacao} reais. A cotação do dólar canadense pode ser influenciada por uma variedade de fatores, incluindo a economia dos Estados Unidos e do Canadá, as taxas de juros, as expectativas de inflação e a demanda por recursos naturais do Canadá. Como investidor ou viajante, é importante estar ciente da cotação do dólar canadense e como ela pode afetar suas decisões.</p>
          <h2>Sobre o dólar canadense</h2>
          <p>O dólar canadense (CAD) é a moeda oficial do Canadá. Ele é emitido pelo Banco do Canadá e é utilizado em todo o país, incluindo as províncias e territórios. O símbolo usado para representar o dólar canadense é "C$" ou "CAD".<br/><br/> O dólar canadense é uma moeda flutuante, ou seja, seu valor é determinado pelo mercado e pode ser influenciado por diversos fatores, como a taxa de juros, a balança comercial, a política monetária e a situação econômica global.</p>
          <h2>Qual a diferença entre dólar canadense comercial e dólar canadense turismo?</h2>
          <p>O dólar canadense é a moeda oficial do Canado e pode ser encontrado em duas taxas diferentes: a taxa comercial e a taxa turística. A diferença entre as duas é a seguinte:</p>
          <p>Taxa comercial: É a taxa utilizada para transações comerciais e financeiras, como a compra e venda de bens e serviços. Ela reflete a força econômica do Canado e é determinada pelo mercado financeiro.</p>
          <p>Taxa turística: É a taxa utilizada para viagens e turismo. Ela é mais alta do que a taxa comercial e inclui uma margem adicional para cobrir os custos dos intermediários financeiros, como bancos e casas de câmbio.</p>
          <p>Em resumo, a taxa comercial é mais adequada para transações comerciais, enquanto a taxa turística é mais adequada para viagens e transações turísticas. É importante lembrar que as taxas de câmbio são flutuantes e mudam diariamente.</p>
          <h2>Converter dólar canadense para real</h2>
          <p>O site X-MOEDAS é uma ferramenta prática e fácil de usar para converter valores em dólar para real. Basta inserir o valor em dólar que deseja converter e o nosso conversor fará o cálculo em tempo real, exibindo o valor em real equivalente. O site também permite que você compare as taxas de câmbio atuais do dólar com o real para que você possa tomar decisões informadas sobre suas transações financeiras. Aproveite a nossa ferramenta confiável e fácil de usar hoje mesmo no X-MOEDAS!</p>
          
          <style jsx>{`
            main {
              max-width: 700px;
              padding: 20px;
              margin: auto;
              margin-bottom: 100px;
            }
            
            main h1, h2, h3 {
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
