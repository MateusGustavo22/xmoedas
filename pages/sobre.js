import Head  from 'next/head';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import {useEffect} from 'react';
import styled from 'styled-components';

const Sobre = styled.main`
    max-width: 1366px;
    margin: auto;
    border-radius: 3px;
    margin-top: 0px;
    margin-bottom: 100px;
`;

const Conteudo = styled.div`
    max-width: 600px;
    margin: auto;
    min-height: 100vh;
    &media only screen and (max-height: 723px) {
      height: 100%;
    }
`;

const Link = styled.a`
  font-family: inter;
  font-size: 22px;
  margin-bottom: 30px;
  color: ${props => props.theme.colors.fontP};
`;

export default function sobre() {
  
  return (
    <>
    <Head>
      <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico"/>
      <title>Sobre nós</title>
    </Head>
    <Header />
      <Sobre>
        <Conteudo>
           <h1>Sobre nós</h1>
           <p>O site Xmoedas.com.br é um conversor de moedas que permite aos usuários ver as taxas de câmbio atuais para algumas moedas em relação ao real brasileiro. O usuário pode selecionar a moeda desejada na lista de opções disponíveis e inserir o valor que deseja converter. O site exibirá o valor correspondente em reais brasileiros. Além disso, o site também exibe gráficos com o histórico das taxas de câmbio para ajudar os usuários a entender as tendências de câmbio. É uma ferramenta útil para pessoas que viajam para o exterior e precisam saber quanto vale o dinheiro em reais ou para pessoas que desejam acompanhar a cotação de moedas estrangeiras em relação ao real.</p><br/>
           <p>Por <Link href="https://www.instagram.com/m4tteuzx/">Mateus Gustavo</Link></p>
        </Conteudo>
      </Sobre>
    <Footer />
    </>
  )
}