import { useState, useEffect } from 'react';

const  Footer = () => {
  
  const [copyright, setCopyright] = useState(`Copyright ${new Date().getFullYear()} - Xmoedas`)
  
  useEffect(() => {
    setCopyright(` 2022 - ${new Date().getFullYear()} - Xmoedas`)
  },[])
  
  return (
    
    <footer className="footer">
      <a href="mailto:contatodolaragora@gmail.com?subject=DólarAgora" rel="noopener">Contato</a>
      <a href="/politicas">Política de privacidade</a>
      <a href="/termos">Termos de uso</a>
      <div id="copyright" align="center">&copy;{copyright}</div>
       <style jsx>{`
        .footer {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: #191919;
          padding-top: 15px;
          padding-bottom: 15px;
          position: relative;
          bottom: 0;
          margin: auto;
        }
        
        .footer a, #copyright {
          font-family: 'Inter', sans-serif;
          font-weight: normal;
          text-decoration: none;
          margin: 16px;
          color: white;
        }
        
        .footer a:hover {
          text-decoration: underline;
        }
       `}</style>
    </footer>
  )
}

export default Footer