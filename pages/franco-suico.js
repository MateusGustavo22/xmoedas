import Head  from 'next/head';
import Conversor from 'components/Conversor/Conversor';
import Chart30days from 'components/Chart/Chart';
import axios from 'axios';
import Table from 'components/Table/Table';

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
          <title>Franco Suíço Hoje: Cotação Comercial, Gráfico e Tabela - Xmoedas</title>
          <meta property="og:title" content="Franco Suíço Hoje" />

        </Head>
        <div className='container_principal'>
          <Conversor 
            cotacao={props.cotacao} 
            code={props.code} 
            last30days={props.bid30days} 
            moedaName={'Franco Suíço'}
            flag={'/flags/ch.svg'} 
          />
        </div>
        <main className='mainContent'>
          <h1>Cotação do franco suíço hoje</h1>
          <p>A cotação do franco suíço hoje é de R$ {props.cotacao}. Isso significa que, para comprar um franco suíço, é necessário gastar R$ {props.cotacao} reais. O franco suíço é conhecido por ser uma moeda forte e estável, e é amplamente utilizado para investimentos financeiros e para fazer transferências internacionais. Além disso, a Suíça é um país economicamente forte, o que contribui para a solidez da sua moeda. No entanto, é importante lembrar que a cotação do franco suíço pode sofrer variações diariamente, portanto, é sempre recomendável manter-se atualizado sobre as flutuações do mercado financeiro.</p>
          <Table cotacao={props.cotacao} moeda={'Franco Suíço'} code={props.code} />
          <h2>Sobre o franco suíço</h2>
          <p>O franco suíço é a moeda oficial da Suíça e é utilizado em todo o país. Ele é dividido em 100 centavos, conhecidos como rappen na Suíça alemã, centimes na Suíça francesa e centesimi na Suíça italiana. O franco suíço é conhecido por sua estabilidade econômica e financeira, o que o torna uma moeda atrativa para investidores e bancos. A Suíça é considerada um dos países mais ricos e estáveis do mundo, e a sua economia é baseada em setores como a indústria de relógios, turismo e banca. Além disso, a Suíça é conhecida por sua política fiscal conservadora e neutralidade política, o que ajuda a manter a estabilidade do franco suíço.</p>
          <h2>Qual a diferença entre franco suíço comercial e franco suíço turismo?</h2>
          <p>O franco suíço comercial é a moeda oficial da Suíça e é usado para transações comerciais e financeiras no país. Já o franco suíço turismo é uma taxa de câmbio alternativa que é oferecida aos turistas estrangeiros em alguns estabelecimentos turísticos e destinos de viagem. Em geral, a taxa de câmbio do franco suíço turismo é ligeiramente desfavorável em relação ao franco suíço comercial, o que significa que os turistas pagam mais do que os preços reais quando usam esta moeda.</p>
          <h2>Como posso converter franco suíço em real?</h2>
          <p>Para converter franco suíço para real, você pode usar a ferramenta online disponível no site XMOEDAS. Basta inserir a quantidade de francos suíços que deseja converter e a ferramenta calculará automaticamente o valor equivalente em reais. Isso é útil para quem viaja para a Suíça ou precisa fazer transações comerciais com o país.</p>
          <h2>Observação sobre o conversor</h2>
          <p>Atenção: as cotações de moedas apresentadas neste conversor são meramente informativas e podem não ser 100% precisas. Antes de realizar qualquer transação financeira ou tomar uma decisão com base nas cotações apresentadas, recomenda-se consultar fontes especializadas para obter informações mais atualizadas e precisas.</p>
        </main>
      </>
  )
}
