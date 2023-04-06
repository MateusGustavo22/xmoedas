import Head  from 'next/head';

export default function sobre() {
  
  return (
    <>
    <Head>
      <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico"/>
      <title>Sobre nós</title>
    </Head>
   <div className='container_principal'>
    <main className='mainContent'>
       <h1>Sobre nós</h1>
       <p>O site Xmoedas.com.br é um conversor de moedas que permite aos usuários ver as taxas de câmbio atuais para algumas moedas em relação ao real brasileiro. O usuário pode selecionar a moeda desejada na lista de opções disponíveis e inserir o valor que deseja converter. O site exibirá o valor correspondente em reais brasileiros. Além disso, o site também exibe gráficos com o histórico das taxas de câmbio para ajudar os usuários a entender as tendências de câmbio. É uma ferramenta útil para pessoas que viajam para o exterior e precisam saber quanto vale o dinheiro em reais ou para pessoas que desejam acompanhar a cotação de moedas estrangeiras em relação ao real.</p><br/>
       <h2>Observação sobre o conversor</h2>
       <p>Atenção: as cotações de moedas apresentadas neste conversor são meramente informativas e podem não ser 100% precisas. Antes de realizar qualquer transação financeira ou tomar uma decisão com base nas cotações apresentadas, recomenda-se consultar fontes especializadas para obter informações mais atualizadas e precisas.</p>
       <p id="html_p" >Por <a href="https://www.instagram.com/m4tteuzx/">Mateus Gustavo</a></p>
    </main>
   </div>
   <style jsx>
   {`
     .container_principal {
       font-family: inter;
       font-size: 22px;
       color: ${props => props.theme.colors.fontP};
     }
     
     #html_p {
       font-size: 19px;
       margin-top: 15px;
     }
   `}
   </style>
    </>
  )
}