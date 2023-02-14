import Head from 'next/head';

const NotFoundPage = () => {
  
  return (
    <>
      <Head>
        <title>404 - Página não encontrada</title>
      </Head>
      <div className="content">
        <h1>404 - Página não encontrada</h1>
        <p>Desculpe, a página que você está procurando não foi encontrada.</p>
        
        <style jsx>{`
          .content {
            padding: 15px;
            display: flex;
            heigth: 100vh;
            flex-direction: column;
            align-items: center;
          }
          
          h1 {
            font-size: 32px;
            margin: 15px;
            font-family: 'Roboto', san serif;
          }
          
          p {
            font-size: 17px;
            margin: 15px;
            font-family: 'Roboto', san serif;
          }
          
        `}</style>
      </div>
    </>
  )
}

NotFoundPage.noLayout = true;
export default NotFoundPage
