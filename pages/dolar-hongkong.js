import Head  from 'next/head';
import Conversor from 'components/Conversor/Conversor';
import axios from 'axios';
import Table from 'components/Table/Table';

//Pegar a cotação da moeda e passa como props
export async function getStaticProps() {
 
    const code = 'HKD'
    
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
          <meta name="description" content="Cotação atualizada do dólar de hong kong hoje em relação ao real. Conversor de moedas e gráfico do dólar de hong kong nos últimos dias."/>
          <meta name="keywords" content="Dólar de Hong Kong, Conversor, Cotação, Real, Câmbio, Hoje, Preço" />
          <title>Dólar de Hong Kong Hoje: Cotação Comercial, Gráfico e Tabela - Xmoedas</title>
          <meta property="og:title" content="Dólar De Hong Kong Hoje" />


        </Head>
        <div className='container_principal'>
          <Conversor 
          cotacao={props.cotacao} 
          code={props.code} 
          last30days={props.bid30days} 
          moedaName={'Dólar de Hong Kong'}
          flag={'/flags/hk.svg'} 
          />
        </div>
        <main className='mainContent'>
          <h1>Cotação do dólar de hong kong hoje</h1>
          <p>A cotação do dólar de Hong Kong hoje é de R$ {props.cotacao}. Isso significa que por cada dólar de Hong Kong, você pode obter R$ {props.cotacao} reais. É importante notar que as cotações podem mudar diariamente, então é importante verificar regularmente para obter as cotações atuais.</p>
          <Table cotacao={props.cotacao} moeda={'Dólar De Hong Kong'} code={props.code} />
          <h2>Sobre o dólar de hong kong</h2>
          <p>O dólar de Hong Kong é a moeda oficial de Hong Kong, um território da China. Ele é emitido pelo Banco da China de Hong Kong e é aceito em todo o território de Hong Kong. Ele é frequentemente usado para negociações comerciais e investimentos, e é visto como uma moeda estável e confiável. O dólar de Hong Kong também é usado como uma moeda de reserva internacional, com muitos investidores e bancos mantendo grandes quantidades de dólares de Hong Kong em suas reservas devido à sua estabilidade econômica.</p>
          <h2>Qual a diferença entre dólar de Hong kong comercial e turismo?</h2>
          <p>Existem duas principais diferenças entre o dólar de Hong Kong comercial e turismo:</p><br/>
          <p><strong>Taxas de câmbio:</strong> O dólar de Hong Kong comercial é geralmente usado para transações comerciais, como importação e exportação de bens e serviços. As taxas de câmbio para o dólar de Hong Kong comercial são determinadas pelos bancos e pelo mercado cambial, e geralmente oferecem taxas de câmbio mais favoráveis do que as do dólar de Hong Kong turismo.</p><br/>
          <p><strong>Finalidade de uso:</strong> O dólar de Hong Kong turismo é usado principalmente por turistas e viajantes internacionais para transações em Hong Kong, como compras e hospedagem em hotéis. Geralmente, o dólar de Hong Kong turismo é comprado com outras moedas estrangeiras em casas de câmbio ou bancos e as taxas de câmbio são geralmente menos favoráveis do que as do dólar de Hong Kong comercial.</p><br />
          <p>Em resumo, o dólar de Hong Kong comercial é usado para transações comerciais e tem taxas de câmbio mais favoráveis, enquanto o dólar de Hong Kong turismo é usado por viajantes internacionais para transações em Hong Kong, mas com taxas de câmbio menos favoráveis.</p>
          <h2>Como posso converter dólar de hong kong em real?</h2>
          <p>Se você deseja converter dólares de Hong Kong para reais, pode usar a ferramenta online do site XMOEDAS. Basta inserir a quantidade de dólares de Hong Kong que deseja converter e a ferramenta calculará automaticamente a quantidade correspondente em reais. Essa ferramenta é útil para quem viaja para Hong Kong, faz negócios comerciais ou investimentos no território, ou simplesmente gosta de acompanhar as cotações das moedas.</p>
          <h2>Observação sobre o conversor</h2>
          <p>Atenção: as cotações de moedas apresentadas neste conversor são meramente informativas e podem não ser 100% precisas. Antes de realizar qualquer transação financeira ou tomar uma decisão com base nas cotações apresentadas, recomenda-se consultar fontes especializadas para obter informações mais atualizadas e precisas.</p>
        </main>
      </>
  )
}
