import Head  from 'next/head';
import Conversor from 'components/Conversor/Conversor';
import Table from 'components/Table/Table';

//Pegar a cotação da moeda e passa como props
export async function getStaticProps() {

  const code = 'USD'
  let cotacao = 0

  const fetFetch1 = async () => {
    const responseApi = await fetch(`https://economia.awesomeapi.com.br/json/last/${code}-BRL`)
    if (responseApi.ok) {
      const apiData = await responseApi.json()
      cotacao = parseFloat(apiData[code+'BRL'].bid).toFixed(2)
    }
  }

  const cot30bids = {
    bid: [],
    timestamp: []
  }

  const fetFetch2 = async () => {
    const responseApi = await fetch(`https://economia.awesomeapi.com.br/json/daily/${code}-BRL/30`)
    if (responseApi.ok) {
      const apiData = await responseApi.json()
      const responseBid = apiData.map(data => {
        let value = parseFloat(data.bid)
        return value < 1 ? value.toFixed(3) : value.toFixed(2)
      })
      const responseDate = apiData.map(data => data.timestamp)

      cot30bids.bid = responseBid
      cot30bids.timestamp = responseDate
    }
  }
  
  await fetFetch1()
  await fetFetch2()

  return {
    props: {
      cotacao,
      code,
      cot30bids //objeto contendo propriedade bid e timestamp
    },
    revalidate: 3600,
  };

}

export default function Home(props) {
 
  return (
      <>
        <Head>
          <meta name="description" content="Cotação atualizada do dólar americano hoje em relação ao real. Conversor de moedas e gráfico do dólar nos últimos dias."/>
          <meta name="keywords" content="Dólar, Americano, Conversor, Cotação, Real, Câmbio, Hoje, Preço" />
          <title>Dólar Hoje: Cotação Comercial, Gráfico e Tabela - Xmoedas</title>
          <meta property="og:title" content="Dólar Hoje" />
          <meta name="google-site-verification" content="yOKnx3oxxmpkcnd2KOv9ndtdRhhVU9MliabO_I5YzhU" />
          <meta name="msvalidate.01" content="C4F3CA81734FA841E2051A26792AAEDA" />
        </Head>
        <div className='container_principal'>
        <Conversor 
          cotacao={props.cotacao} 
          code={props.code} 
          last30days={props.cot30bids} 
          moedaName={'Dólar Americano'}
          flag={'/flags/us.svg'} 
        />
        </div>
        <main className='mainContent'>
          <h1>Cotação do dólar hoje</h1>
          <p>A cotação do dólar hoje é de R$ {props.cotacao}. Isso significa que o preço de compra e venda do dólar americano está em R$ {props.cotacao} no mercado. A cotação do dólar é importante para diversas transações comerciais e a variação pode afetar a economia do país. Por isso, é importante estar sempre atento às mudanças na cotação do dólar para tomar decisões financeiras informadas.</p>
          <Table cotacao={props.cotacao} moeda={'Dólar'} code={props.code} />
          <h2>Sobre o dólar americano</h2>
          <p>O dólar americano é a moeda oficial dos Estados Unidos e é amplamente utilizado em transações comerciais e financeiras internacionais. É considerada uma das principais moedas do mundo e é utilizada como referência em muitas transações cambiais. O dólar americano é emitido pelo Federal Reserve, o banco central dos Estados Unidos.</p>
          <h2>Qual a diferença entre dólar comercial e dólar turismo?</h2>
          <p>A diferença entre o dólar comercial e o dólar turismo é o tipo de transação que está sendo feita. O dólar comercial é utilizado para transações comerciais, como compras e vendas de bens e serviços entre empresas, enquanto o dólar turismo é utilizado para transações de viagem, como compras de bens e serviços por turistas.</p><br/>
          <p>A taxa de câmbio do dólar comercial tende a ser mais estável e é influenciada pelas condições econômicas e financeiras do mercado, enquanto a taxa de câmbio do dólar turismo tende a flutuar mais e é influenciada pelas condições do mercado, bem como pela oferta e demanda de dólares para viagens. Em geral, a taxa de câmbio do dólar turismo é geralmente um pouco mais elevada do que a taxa de câmbio do dólar comercial.</p>
          <h2>Como posso investir em dólar?</h2>
          <p>Existem diversas formas de investir em dólar. Aqui estão algumas opções:</p><br/>
          <p><strong>Compra de moeda física:</strong> A maneira mais tradicional de investir em dólar é comprando a moeda física em casas de câmbio. É importante lembrar que essa opção pode envolver taxas de câmbio e de compra, além do risco de perda ou roubo da moeda.</p><br/>
          <p><strong>Fundos cambiais:</strong> Os fundos cambiais são uma opção mais prática para investir em dólar. Eles funcionam como um fundo de investimento comum, mas ao invés de investir em ações ou títulos de renda fixa, eles investem em moedas estrangeiras, como o dólar. Esses fundos podem ter taxas de administração e de performance, e o investidor pode comprar ou vender suas cotas a qualquer momento.</p><br/>
          <p><strong>ETFs:</strong> Os ETFs (Exchange Traded Funds) são fundos de investimento que são negociados na bolsa de valores. Existem ETFs que investem em moedas estrangeiras, como o dólar, e permitem ao investidor comprar ou vender suas cotas a qualquer momento.</p><br/>
          <p><strong>Derivativos cambiais:</strong> Os derivativos cambiais são contratos financeiros que permitem ao investidor apostar na variação do câmbio. Alguns exemplos são os contratos futuros de dólar, que permitem comprar ou vender a moeda a um preço acordado no futuro, e as opções de dólar, que permitem comprar ou vender a moeda a um preço acordado em um período específico.</p><br/>
          <p>É importante lembrar que investir em dólar envolve riscos e é importante entender bem as características de cada opção de investimento antes de tomar uma decisão. Além disso, é sempre recomendável buscar a ajuda de um profissional qualificado para tomar uma decisão de investimento.</p>
          <h2>Como o preço do dólar é influenciado hoje?</h2>
          <p><strong>Política monetária:</strong> A política monetária do banco central americano (Federal Reserve) pode afetar a oferta de dólares e, consequentemente, a cotação do dólar. Por exemplo, se o Federal Reserve aumenta as taxas de juros, isso pode tornar o dólar mais atraente para os investidores, o que pode aumentar a cotação do dólar.</p><br/>
          <p><strong>Situação econômica:</strong> A situação econômica dos Estados Unidos também pode afetar a cotação do dólar. Se a economia americana estiver se expandindo, isso pode aumentar a demanda por dólares e, consequentemente, aumentar a cotação do dólar.</p><br/>
          <p><strong>Inflação:</strong> A inflação também pode afetar a cotação do dólar. Se a inflação estiver alta, isso pode diminuir o valor do dólar em relação às outras moedas.</p><br/>
          <p><strong>Risco geopolítico:</strong> Eventos geopolíticos e riscos políticos globais, como guerras, crises políticas e mudanças na liderança de países importantes, podem afetar a cotação do dólar.</p><br/>
          <p><strong>Investimentos estrangeiros:</strong> A entrada e saída de investimentos estrangeiros também podem afetar a cotação do dólar, pois quanto maior a oferta de dólares no mercado, menor será a cotação.</p><br/>
          <p><strong>Dados econômicos:</strong> dados econômicos importantes, como o PIB, o desemprego, o índice de preços ao consumidor e o índice de preços ao produtor, também podem influenciar a cotação do dólar.</p><br/>
          <p><strong>Expectativas de mercado:</strong> as expectativas do mercado, especialmente no que diz respeito a decisões políticas e econômicas futuras, também podem influenciar a cotação do dólar.</p><br/>
          <h2>Como posso converter dólar em real?</h2>
          <p>O site XMOEDAS é uma ferramenta prática e fácil de usar para converter valores em dólar para real. Basta inserir o valor em dólar que deseja converter e o nosso conversor fará o cálculo em tempo real, exibindo o valor em real equivalente. O site também permite que você compare as taxas de câmbio atuais do dólar com o real para que você possa tomar decisões informadas sobre suas transações financeiras. Aproveite a nossa ferramenta confiável e fácil de usar hoje mesmo no XMOEDAS!</p>
          <h2>Observação sobre o conversor</h2>
          <p>Atenção: as cotações de moedas apresentadas neste conversor são meramente informativas e podem não ser 100% precisas. Antes de realizar qualquer transação financeira ou tomar uma decisão com base nas cotações apresentadas, recomenda-se consultar fontes especializadas para obter informações mais atualizadas e precisas.</p>
        </main>
  </>
  )
}
