import Head  from 'next/head';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import {useEffect} from 'react';

export default function sobre() {
  
  return (
    <>
    <Head>
      <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico"/>
      <title>Sobre</title>
    </Head>
    <Header />
    <main className="conteudo">
      <div className="sobre">
         <h1>Sobre nós</h1>
         <p>O site "dolaragora.online" é um conversor de moedas que permite aos usuários ver as taxas de câmbio atuais para algumas moedas em relação ao real brasileiro. O usuário pode selecionar a moeda desejada na lista de opções disponíveis e inserir o valor que deseja converter. O site exibirá o valor correspondente em reais brasileiros. Além disso, o site também exibe gráficos com o histórico das taxas de câmbio para ajudar os usuários a entender as tendências de câmbio. É uma ferramenta útil para pessoas que viajam para o exterior e precisam saber quanto vale o dinheiro em reais ou para pessoas que desejam acompanhar a cotação de moedas estrangeiras em relação ao real.</p><br/>
         <p>Por <a href="https://www.instagram.com/m4tteuzx/">Mateus Gustavo</a></p>
      </div>
      <style>{`
        .conteudo {
          max-width: 500px;
          margin: auto;
          min-height: 100vh;
          padding: 15px;
        }
    
        .conteudo h1, h2 {
          font-size: 25px;
          margin-bottom: 15px;
        }
        
        .conteudo a {
          font-family: inter;
          font-size: 22px;
          margin-bottom: 30px;
          color: black;
        }
        .sobre {
          max-width: 1366px;
          margin: auto;
          border-radius: 3px;
          margin-top: 30px;
          padding: 10px;
        }
        
        .sobre p {
          font-family: inter;
          line-height: 1.5;
          font-size: 18px;
        }
        
        @media only screen and (max-height: 723px) {
          .conteudo {
            height: 100%;
          }
        }
      `}</style>
    </main>
    <Footer />
    </>
  )
}