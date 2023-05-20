import Head from "next/head";
import Conversor from "components/Conversor/Conversor";
import Table from "components/Table/Table";

//Pegar a cotação da moeda e passa como props
export async function getStaticProps() {
  const code = "ARS";

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
          content="Cotação atualizada do peso argentino hoje em relação ao real. Conversor de moedas e gráfico do peso argentino nos últimos dias."
        />
        <meta
          name="keywords"
          content="Peso, Argentino, Conversor, Cotação, Real, Câmbio, Hoje, Preço"
        />
        <title>
          Peso Argentino Hoje: Cotação Comercial, Gráfico e Tabela - Xmoedas
        </title>
        <meta property="og:title" content="Peso Argentino Hoje" />
      </Head>
      <div className="container_principal">
        <Conversor
          cotacao={props.cotacao}
          code={props.code}
          last7days={props.last7days}
          last30days={props.last30days}
          last365days={props.last365days}
          moedaName={"Peso Argentino"}
          flag={"/flags/ar.svg"}
        />
      </div>
      <main className="mainContent">
        <h1>Cotação do peso argentino hoje</h1>
        <p>
          A cotação do peso argentino hoje é de $ {props.cotacao} pesos para
          cada real. Isso significa que, para comprar um peso argentino, é
          necessário gastar R$ {props.cotacao} reais. É importante destacar que
          a cotação do peso argentino pode mudar diariamente, portanto, é
          fundamental estar sempre atualizado para tomar decisões financeiras
          informadas e eficientes.
        </p>
        <Table
          cotacao={props.cotacao}
          moeda={"Peso Argentino"}
          code={props.code}
        />
        <h2>Sobre o peso argentino</h2>
        <p>
          O peso argentino (ARS) é a moeda oficial da Argentina, um país
          localizado na América do Sul. Ele foi introduzido em 1992 para
          substituir o austral, que havia sido a moeda anterior.
        </p>
        <br />
        <p>
          O peso argentino é subdividido em centavos e as moedas em circulação
          incluem 1, 2, 5, 10, 25 e 50 centavos, além de moedas de 1, 2, 5 e 10
          pesos. As notas em circulação incluem 20, 50, 100, 200, 500, 1.000 e
          2.000 pesos.
        </p>
        <br />
        <p>
          A taxa de câmbio do peso argentino é determinada pela oferta e demanda
          da moeda no mercado internacional de câmbio, e pode ser influenciada
          por uma série de fatores, como a política econômica do governo
          argentino, a situação econômica do país e as condições globais do
          mercado.
        </p>
        <br />
        <p>
          Nos últimos anos, a Argentina enfrentou instabilidade econômica e uma
          inflação elevada, o que afetou a taxa de câmbio do peso argentino.
          Como resultado, o governo argentino adotou medidas para controlar a
          inflação e estabilizar a economia, como a implementação de controles
          de câmbio e a negociação de empréstimos com o Fundo Monetário
          Internacional (FMI).
        </p>
        <br />
        <p>
          Para os turistas que visitam a Argentina, é importante lembrar que a
          taxa de câmbio do peso argentino pode flutuar significativamente, e
          que é recomendado trocar dinheiro em casas de câmbio oficiais ou
          bancos, em vez de recorrer a cambistas informais, que podem oferecer
          taxas de câmbio desfavoráveis ou notas falsificadas.
        </p>
        <h2>Qual a diferença entre peso argentino comercial e turismo?</h2>
        <p>
          Assim como ocorre com outras moedas, o peso argentino possui duas
          taxas de câmbio: a comercial e a turismo. A principal diferença entre
          as duas taxas de câmbio é o propósito para o qual elas são utilizadas.
        </p>
        <br />
        <p>
          A taxa de câmbio <strong>comercial</strong> é utilizada para
          transações internacionais entre empresas e governos. Ela é geralmente
          mais baixa do que a taxa de câmbio turismo e é usada para converter
          moeda estrangeira em pesos argentinos em transações de importação e
          exportação, por exemplo.
        </p>
        <br />
        <p>
          Já a taxa de câmbio <strong>turismo</strong> é utilizada por pessoas
          físicas que viajam para a Argentina e desejam comprar pesos argentinos
          para suas despesas pessoais. Ela é geralmente mais alta do que a taxa
          de câmbio comercial, já que inclui a margem de lucro de casas de
          câmbio e bancos, além de taxas adicionais, como o Imposto sobre o
          Valor Agregado (IVA).
        </p>
        <br />
        <p>
          Vale ressaltar que, na Argentina, há restrições para a compra de moeda
          estrangeira, e é comum que os turistas utilizem a taxa de câmbio
          turismo para comprar pesos argentinos. Contudo, é importante pesquisar
          e comparar as taxas de câmbio oferecidas por diferentes casas de
          câmbio e bancos, a fim de obter a melhor taxa possível e evitar
          possíveis golpes.
        </p>
        <h2>Como posso converter peso argentino em real?</h2>
        <p>
          Se você deseja converter peso argentino para real, você pode usar a
          ferramenta online XMOEDAS. Basta inserir a quantidade de pesos
          argentinos que você deseja converter e a ferramenta dará o valor
          equivalente em reais. É importante lembrar de verificar a cotação
          atual antes de fazer qualquer conversão, pois elas podem variar ao
          longo do tempo.
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
