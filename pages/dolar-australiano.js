import Head from "next/head";
import Conversor from "components/Conversor/Conversor";
import Table from "components/Table/Table";

//Pegar a cotação da moeda e passa como props
export async function getStaticProps() {
  const code = "AUD";

  const fetchData = async (url) => {
    const response = await fetch(url);
    const responseData = await response.json();
    const cotacaoAtual = parseFloat(responseData[code + "BRL"].bid).toFixed(2);

    return cotacaoAtual;
  };

  const fetchDataChart = async (url) => {
    const response = await fetch(url);
    const responseData = await response.json();

    const cot = responseData.map((data) => {
      let value = parseFloat(data.bid);
      return value < 1 ? value.toFixed(3) : value.toFixed(2);
    });

    const cotDate = responseData.map((data) =>
      new Date(data.timestamp * 1000).toLocaleDateString("pt-BR", {
        month: "2-digit",
        day: "2-digit",
      })
    );
    cot.reverse();
    cotDate.reverse();

    return { cot, cotDate };
  };

  const cotacao = await fetchData(
    `https://economia.awesomeapi.com.br/json/last/${code}-BRL`
  );
  const last7days = await fetchDataChart(
    `https://economia.awesomeapi.com.br/json/daily/${code}-BRL/7`
  );
  const last30days = await fetchDataChart(
    `https://economia.awesomeapi.com.br/json/daily/${code}-BRL/30`
  );
  const last365days = await fetchDataChart(
    `https://economia.awesomeapi.com.br/json/daily/${code}-BRL/365`
  );

  return {
    props: {
      cotacao,
      code,
      last7days,
      last30days,
      last365days,
    },
    revalidate: 3600,
  };
}

export default function Home(props) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Cotação atualizada do dólar australiano hoje em relação ao real. Conversor de moedas e gráfico do dólar australiano nos últimos dias."
        />
        <meta
          name="keywords"
          content="Dólar australiano, Conversor, Cotação, Real, Câmbio, Hoje, Preço"
        />
        <title>
          Dólar Australiano Hoje: Cotação Comercial, Gráfico e Tabela - Xmoedas
        </title>
        <meta property="og:title" content="Dólar Australiano Hoje" />
      </Head>
      <div className="container_principal">
        <Conversor
          cotacao={props.cotacao}
          code={props.code}
          last7days={props.last7days}
          last30days={props.last30days}
          last365days={props.last365days}
          moedaName={"Dólar Australiano"}
          flag={"/flags/au.svg"}
        />
      </div>
      <main className="mainContent">
        <h1>Cotação do dólar australiano hoje</h1>
        <p>
          A cotação do dólar australiano hoje é de R$ {props.cotacao} reais.
          Isso significa que para comprar 1 dólar australiano, é necessário
          pagar R$ {props.cotacao} reais. A cotação do dólar australiano pode
          variar diariamente devido a diversos fatores econômicos e políticos.
        </p>
        <Table
          cotacao={props.cotacao}
          moeda={"Dólar Austráliano"}
          code={props.code}
        />
        <h2>Sobre o dólar australiano</h2>
        <p>
          O dólar australiano (AUD) é a moeda oficial da Austrália, um país
          localizado na Oceania. Ele também é usado como moeda corrente em
          outras regiões do Pacífico Sul, incluindo a Ilha Norfolk, as Ilhas
          Cocos (Keeling), as Ilhas Christmas e as Ilhas Heard e McDonald.
        </p>
        <br />
        <p>
          O dólar australiano é considerado uma das moedas mais negociadas no
          mercado de câmbio global, e é frequentemente usado como um proxy para
          o desempenho da economia chinesa, já que a Austrália é um grande
          exportador de commodities para a China. Além disso, o AUD é
          frequentemente usado como uma moeda de reserva por muitos bancos
          centrais em todo o mundo.
        </p>
        <br />
        <p>
          O valor do dólar australiano é afetado por uma variedade de fatores
          econômicos e políticos, incluindo as taxas de juros do Banco Central
          da Austrália, a inflação, o desempenho das exportações e importações,
          bem como os acontecimentos internacionais, como tensões comerciais e
          geopolíticas. Em relação a outras moedas, como o dólar americano e o
          euro, o valor do AUD pode flutuar significativamente em períodos
          curtos de tempo.
        </p>
        <br />
        <p>
          Devido à natureza volátil do mercado de câmbio, o valor do dólar
          australiano pode mudar rapidamente. Se você planeja viajar para a
          Austrália ou negociar em AUD, é importante estar ciente das últimas
          tendências do mercado e considerar o uso de ferramentas de
          gerenciamento de risco cambial para proteger seus investimentos.
        </p>
        <h2>Qual a diferença entre dólar australiano comercial e turismo?</h2>
        <p>
          O dólar australiano comercial e turismo são duas formas diferentes de
          se obter a moeda australiana, e há algumas diferenças entre elas.
        </p>
        <br />
        <p>
          O <strong>dólar australiano comercial</strong> é utilizado para
          transações de importação e exportação entre empresas, e é cotado no
          mercado interbancário. O preço do dólar comercial é definido pelo
          mercado de câmbio, e é influenciado por fatores como a oferta e
          demanda da moeda, as condições econômicas e políticas do país e as
          taxas de juros praticadas pelo Banco Central da Austrália.
        </p>
        <br />
        <p>
          Por outro lado, o <strong>dólar australiano turismo</strong> é
          destinado a pessoas físicas que estão viajando para a Austrália e
          desejam comprar a moeda local. Geralmente, as casas de câmbio oferecem
          essa modalidade de compra e venda de moedas, e o preço do dólar
          turismo é determinado por essas empresas, que acrescentam uma margem
          de lucro sobre a cotação do dólar comercial.
        </p>
        <br />
        <p>
          Em geral, o dólar turismo é mais caro que o dólar comercial, devido à
          margem de lucro adicionada pelas casas de câmbio e também porque as
          transações de câmbio em pequenas quantidades podem envolver custos
          operacionais maiores do que as transações comerciais em grande escala.
        </p>
        <br />
        <p>
          Portanto, se você estiver planejando uma viagem para a Austrália, é
          importante verificar as cotações tanto do dólar comercial quanto do
          dólar turismo para decidir a melhor forma de adquirir a moeda local,
          levando em conta as taxas de câmbio e as taxas cobradas pelas casas de
          câmbio.
        </p>
        <h2>Como posso converter dólar australiano em real?</h2>
        <p>
          A ferramenta online XMOEDAS oferece a possibilidade de converter dólar
          australiano para real. Para fazer a conversão, basta inserir a
          quantidade desejada de dólares australianos e a ferramenta calculará
          automaticamente o valor equivalente em reais, de acordo com a cotação
          atual. Essa ferramenta é útil para quem viaja para a Austrália ou
          precisa realizar transações comerciais com o país, pois permite saber
          quanto dinheiro será necessário e ajuda a planejar as finanças.
        </p>
        <h2>Observação sobre o conversor</h2>
        <p>
          Atenção: as cotações de moedas apresentadas neste conversor são
          meramente informativas e podem não ser 100% precisas. Antes de
          realizar qualquer transação financeira ou tomar uma decisão com base
          nas cotações apresentadas, recomenda-se consultar fontes
          especializadas para obter informações mais atualizadas e precisas.
        </p>
      </main>
    </>
  );
}
