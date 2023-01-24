import Head  from 'next/head';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
//import Conversor from 'components/Conversor/Conversor';
//import Chart30days from 'components/Chart/Chart';
//import axios from 'axios';

//Pegar a cotação da moeda e passa como props
/*export async function getStaticProps() {
 
    const code = 'EUR'
    
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
}*/

export default function Euro(props) {
return (
<>
<Head>
<title>Teste titulo</title>
</Head>
<Header />
<H1>Pagina do euro</h1>
</>

}
