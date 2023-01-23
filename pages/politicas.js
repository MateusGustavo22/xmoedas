import react from 'react';
import Head  from 'next/head';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import {useEffect} from 'react';

export default function sobre() {

  return (
    <>
    <Head>
      <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico"/>
      <title>Política de Privacidade</title>
    </Head>
    <Header />
    <main className="conteudo">
      <div className="sobre">
        <h1>Política de Privacidade</h1>
        <p>A privacidade dos nossos usuários é extremamente importante para nós. É política do nosso site respeitar a privacidade de todos os usuários ao utilizarem nossos serviços.</p>
        
        <h2>Coleta de informações</h2>
        <p>Não coletamos nenhuma informação pessoal dos usuários.</p>
        
        <h2>Controle de Informações Pessoais</h2>
        <p>Não armazenamos informações pessoais dos usuários.</p>
        
        <h2>Links de Terceiros</h2>
        <p>Não há links para sites externos em nosso site.</p>
        
        <h2>Contato</h2>
        <p>Se você tiver alguma dúvida sobre nossa política de privacidade, entre em contato conosco por e-mail.</p>
        
        <p>Ao utilizar nossos serviços, você concorda com essa política de privacidade.</p>

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
          margin-bottom: 15px;
        }
        
      `}</style>
    </main>
    <Footer />
    </>
  )
}