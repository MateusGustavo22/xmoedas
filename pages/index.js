import Head from 'next/head';
import Converter from 'components/Converter';
import Table from 'components/Table/Table';
import { getCurrencyRate } from '@/utils/getCurrencyRate';
import { fetchDataChart } from '@/utils/getChartData';

export async function getStaticProps() {
  const currencyCode = 'USD';

  const currencyRate = await getCurrencyRate(currencyCode);

  const last7days = await fetchDataChart(`https://economia.awesomeapi.com.br/json/daily/${currencyCode}-BRL/7`);
  const last30days = await fetchDataChart(`https://economia.awesomeapi.com.br/json/daily/${currencyCode}-BRL/30`);
  const last365days = await fetchDataChart(`https://economia.awesomeapi.com.br/json/daily/${currencyCode}-BRL/365`);

  return {
    props: {
      currencyCode,
      currencyRate,
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
          content="Cotação atualizada do dólar americano hoje em relação ao real. Conversor de moedas e gráfico do dólar nos últimos dias."
        />
        <meta name="keywords" content="Dólar, Americano, Conversor, Cotação, Real, Câmbio, Hoje, Preço" />
        <title>Dólar Hoje: Cotação Comercial, Gráfico e Tabela - Xmoedas</title>
        <meta property="og:title" content="Dólar Hoje" />
        <meta name="google-site-verification" content="yOKnx3oxxmpkcnd2KOv9ndtdRhhVU9MliabO_I5YzhU" />
        <meta name="msvalidate.01" content="C4F3CA81734FA841E2051A26792AAEDA" />

         {/* Google tag (gtag.js) */}
         <script async src="https://www.googletagmanager.com/gtag/js?id=G-LWHWX85ZP8"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());

          gtag('config', 'G-LWHWX85ZP8');
        </script>
        
      </Head>
      <div className="container_principal">
        <Converter
          currencyRate={props.currencyRate}
          currencyCode={props.currencyCode}
          last7days={props.last7days}
          last30days={props.last30days}
          last365days={props.last365days}
          currencyName={'Dólar Americano'}
          flag={'/flags/us.svg'}
        />
      </div>
      <main className="mainContent">
        <h1>Cotação do dólar hoje</h1>
        <p>
          A cotação do dólar hoje é de R$ {props.currencyRate.toFixed(2)} reais. Isso significa que o preço de compra e
          venda do dólar americano está em R$ {props.currencyRate.toFixed(2)} no mercado. A cotação do dólar é
          importante para diversas transações comerciais e a variação pode afetar a economia do país. Por isso, é
          importante estar sempre atento às mudanças na cotação do dólar para tomar decisões financeiras informadas.
        </p>
        <Table currencyRate={props.currencyRate} currencyName={'Dólar Americano'} currencyCode={props.currencyCode} />
        <h2>Sobre o dólar americano</h2>
        <p>
          O dólar americano é a moeda oficial dos Estados Unidos da América e também é a moeda de reserva mais
          amplamente utilizada em todo o mundo. O símbolo da moeda é "$" e o código ISO 4217 é "USD".
        </p>
        <br />
        <p>
          O dólar americano é emitido pelo Federal Reserve System, que é o banco central dos Estados Unidos. O Federal
          Reserve é responsável por definir a política monetária do país e controlar a oferta de dinheiro em circulação.
          O dólar americano é amplamente aceito em todo o mundo e é usado em transações comerciais internacionais,
          comércio e finanças.
        </p>
        <br />
        <p>
          A taxa de câmbio do dólar americano em relação a outras moedas é determinada pela oferta e demanda nos
          mercados cambiais. A força do dólar pode ser influenciada por vários fatores, como a saúde da economia
          americana, a política monetária do Federal Reserve, as condições econômicas globais e a política
          internacional.
        </p>
        <br />
        <p>
          Embora o dólar americano seja amplamente utilizado e respeitado em todo o mundo, também enfrenta alguns
          desafios. A inflação, a crescente dívida pública e a incerteza política podem afetar a força da moeda. Além
          disso, outras moedas, como o euro e o iene japonês, têm aumentado em popularidade nos últimos anos, desafiando
          a posição dominante do dólar americano como a principal moeda de reserva.
        </p>
        <br />
        <h2>Qual a diferença entre dólar comercial e dólar turismo?</h2>
        <p>
          O dólar comercial e o dólar turismo são dois tipos diferentes de cotação da moeda norte-americana em relação à
          moeda nacional de um país, como o Real brasileiro.
        </p>
        <br />
        <p>
          O <strong>dólar comercial</strong> é utilizado em transações comerciais entre empresas de diferentes países,
          como importações e exportações de bens e serviços. Essa cotação é definida pelo mercado financeiro e é
          influenciada por diversos fatores, como a oferta e demanda de dólares no mercado internacional, a taxa de
          juros dos países envolvidos na transação e as políticas econômicas adotadas pelos governos.
        </p>
        <br />
        <p>
          Já o <strong>dólar turismo</strong> é utilizado em transações de pessoas físicas em viagens ao exterior, como
          compras em lojas estrangeiras, pagamento de serviços turísticos, como hotéis e passeios, e saques em caixas
          eletrônicos no exterior. A cotação do dólar turismo é geralmente mais alta do que a do dólar comercial, já que
          inclui outras taxas, como a taxa de câmbio, impostos e tarifas de serviços bancários.
        </p>
        <br />
        <p>
          Em resumo, enquanto o dólar comercial é usado em transações entre empresas de diferentes países, o dólar
          turismo é usado em transações de pessoas físicas em viagens internacionais. A cotação do dólar turismo
          geralmente é mais alta do que a do dólar comercial, devido a taxas adicionais incluídas no preço final.
        </p>
        <h2>Como posso ganhar em dólar?</h2>
        <p>Há várias maneiras de ganhar dinheiro em dólar, aqui estão algumas opções:</p>
        <br />
        <ul>
          <li>
            Trabalhar remotamente para uma empresa estrangeira que pague em dólar. Você pode encontrar empregos remotos
            em plataformas de trabalho freelancer como Upwork e Freelancer.com.
          </li>
          <li>
            Vender produtos ou serviços online em sites de comércio eletrônico, como Amazon e eBay, e receber pagamento
            em dólar.
          </li>
          <li>
            Investir em ações, títulos ou fundos negociados em bolsa (ETFs) em empresas internacionais que pagam
            dividendos em dólar.
          </li>
          <li>
            Realizar trabalhos freelance ou consultoria para clientes internacionais, como tradução de documentos ou
            desenvolvimento de software.
          </li>
          <li>
            Participar de programas de afiliados e marketing de conteúdo, promovendo produtos de empresas estrangeiras e
            recebendo comissões em dólar por vendas realizadas.
          </li>
        </ul>
        <br />
        <p>
          Lembre-se de que, ao ganhar em dólar, você também precisará considerar questões relacionadas a impostos e
          câmbio de moeda. É importante pesquisar e entender as implicações fiscais de ganhar em moeda estrangeira em
          seu país.
        </p>
        <h2>Como o preço do dólar é influenciado hoje?</h2>
        <p>
          <strong>Política monetária:</strong> A política monetária do banco central americano (Federal Reserve) pode
          afetar a oferta de dólares e, consequentemente, a cotação do dólar. Por exemplo, se o Federal Reserve aumenta
          as taxas de juros, isso pode tornar o dólar mais atraente para os investidores, o que pode aumentar a cotação
          do dólar.
        </p>
        <br />
        <p>
          <strong>Situação econômica:</strong> A situação econômica dos Estados Unidos também pode afetar a cotação do
          dólar. Se a economia americana estiver se expandindo, isso pode aumentar a demanda por dólares e,
          consequentemente, aumentar a cotação do dólar.
        </p>
        <br />
        <p>
          <strong>Inflação:</strong> A inflação também pode afetar a cotação do dólar. Se a inflação estiver alta, isso
          pode diminuir o valor do dólar em relação às outras moedas.
        </p>
        <br />
        <p>
          <strong>Risco geopolítico:</strong> Eventos geopolíticos e riscos políticos globais, como guerras, crises
          políticas e mudanças na liderança de países importantes, podem afetar a cotação do dólar.
        </p>
        <br />
        <p>
          <strong>Investimentos estrangeiros:</strong> A entrada e saída de investimentos estrangeiros também podem
          afetar a cotação do dólar, pois quanto maior a oferta de dólares no mercado, menor será a cotação.
        </p>
        <br />
        <p>
          <strong>Dados econômicos:</strong> dados econômicos importantes, como o PIB, o desemprego, o índice de preços
          ao consumidor e o índice de preços ao produtor, também podem influenciar a cotação do dólar.
        </p>
        <br />
        <p>
          <strong>Expectativas de mercado:</strong> as expectativas do mercado, especialmente no que diz respeito a
          decisões políticas e econômicas futuras, também podem influenciar a cotação do dólar.
        </p>
        <br />
        <h2>Como posso converter dólar em real?</h2>
        <p>
          O site XMOEDAS é uma ferramenta prática e fácil de usar para converter valores em dólar para real. Basta
          inserir o valor em dólar que deseja converter e o nosso conversor fará o cálculo em tempo real, exibindo o
          valor em real equivalente. O site também permite que você compare as taxas de câmbio atuais do dólar com o
          real para que você possa tomar decisões informadas sobre suas transações financeiras. Aproveite a nossa
          ferramenta confiável e fácil de usar hoje mesmo no XMOEDAS!
        </p>
        <h2>Observação sobre o conversor</h2>
        <p>
          Atenção: as cotações de moedas apresentadas neste conversor são meramente informativas e podem não ser 100%
          precisas. Antes de realizar qualquer transação financeira ou tomar uma decisão com base nas cotações
          apresentadas, recomenda-se consultar fontes especializadas para obter informações mais atualizadas e precisas.
        </p>
      </main>
    </>
  );
}
