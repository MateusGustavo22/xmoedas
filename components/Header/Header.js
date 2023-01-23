import { useState, useEffect } from 'react'
const Header = () => {

  const [showMenu, setShowMenu] = useState(false)
  
  useEffect(() => {
    if (window.innerHeight < 400) {
      const menu = document.getElementById("moedas")
      menu.style.height = "350px";
      menu.style.overflowY = 'scroll';
    }
  }, [])
  
  return (
    <>
    <header className="header">
         <div className="menu-area">
            <div className="botao-menu" onClick={() => setShowMenu(!showMenu)}>
               <div className="linha"></div>
               <div className="linha"></div>
               <div className="linha"></div>
            </div>
            <a href="/" className="icone">
            <img src="/icone.svg" alt="Icone do site"/>
            </a>
         </div>
         <div className="sobre-area">
            <a href="/sobre">Sobre</a>
         </div>
         
         <style jsx>{`
           .header {
              background: white;
              max-width: 1366px;
              height: 55px;
              margin: auto;
              display: flex;
              position: sticky; 
              top: 0;
              flex-direction: inline;
              box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
            }
            
            .menu-area, .sobre-area {
              width: 50%;
              height: 60px;
              padding-left: 20px;
              padding-right: 20px;
              display: flex;
              align-items: center;
            }
            
            .sobre-area {
              justify-content: right;
              align-items: center;
            }
            
            .sobre-area a {
              font-family: 'Inter', sans-serif;
              font-weight: normal;
              text-decoration: none;
              color: #3c3c3c;
            }
            
            .sobre-area a:hover {
             text-decoration: underline;
            }
            
            .botao-menu {
              width: 25px;
              cursor: pointer;
            }
            
            .linha {
              width: 100%;
              height: 3px;
              background-color: #3c3c3c;
              margin-bottom: 5px;
              border-radius: 2px;
            }
            
            .icone {
              width: 120px;
              height: 50px;
              display: flex;
              align-self: center;
              margin-left: 10px;
              margin-top: -5px;
              cursor: pointer;
            }
            
            .icone svg {
              width: 100%;
            }
            
         `}</style>
      </header>
    <nav id="moedas" style={{height: 'auto', overflow: 'none', display: showMenu ? 'block' : 'none', overflow: "scroll"}}>
         <ul>
         <li><a href="/">Dólar americano</a></li>
         <li><a href="/dolar-canadense">Dólar canadense</a></li>
         <li><a href="/dolar-australiano">Dólar australiano</a></li>
         <li><a href="/dolar-taiwanes">Dólar Taiwanês</a></li>
         <li><a href="/dolar-hongkong">Dólar Hong-Kong</a></li>
         <li><a href="/euro">Euro</a></li>
         <li><a href="/libra">Libra</a></li>
         <li><a href="/peso-argentino">Peso argentino</a></li>
         <li><a href="/peso-mexicano">Peso mexicano</a></li>
         <li><a href="/franco-suico">Franco Suíço</a></li>
         <li><a href="/yuan-chines">Yuan chinês</a></li>
         <li><a href="/iene-japones">Iene japonês</a></li>
         <li><a href="/rublo-russo">Rublo russo</a></li>
         </ul>
         
         <style jsx>{`
           #moedas {
            position: fixed;
            z-index: 2;
            width: 170px;
            padding: 10px;
            padding-left: 15px;
            padding-bottom: 5px;
            margin-top: 8px;
            background-color: white;
            border-radius: 4px;
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
          }
          
          #moedas li {
            list-style-type: none;
            margin-bottom: 15px;
          }
          
          #moedas a {
            font-family: 'Inter', sans-serif;
            font-weight: normal;
            font-size: 17px;
            text-decoration: none;
            color: #333333;
          }
          
          #moedas a:hover {
            text-decoration: underline;
          }
         `}</style>
    </nav>
    </>
  )
}

export default Header