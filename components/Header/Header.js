import { useState, useEffect } from 'react'
const Header = () => {

  const [showMenu, setShowMenu] = useState(false)
  
  return (
    <>
    <div className="headerSize">
      <header className="header">
           <div className="menu-area">
              <a href="/" className="icone">
              <img src="/icone.svg" width="180" height="50" alt="Icone do site"/>
              </a>
           </div>
           <div className="sobre-area">
              <a href="/sobre">Sobre</a>
           </div>
        </header>
      <style jsx>
      {`
        .headerSize {
          background-color: white;
          width: 100%;
          height: 55px;
          box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
          position: sticky;
          top: 0;
        }
        
        .header {
          max-width: 1366px;
          height: 55px;
          margin: auto;
          display: flex;
          flex-direction: inline;
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
        
        .icone {
          display: flex;
          align-self: center;
          margin-top: -5px;
          cursor: pointer;
        }
        
        .icone svg {
          width: 100%;
        }
    
      `}
      </style>
    </div>
    </>
  )
}

export default Header