import { useState, useEffect } from 'react';
import styled from 'styled-components';

const Div = styled.div`
  flex-direction: inline;
  margin-top: 15px;
  margin-bottom: 15px;
`;

const Footter = styled.footer`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.colors.footerColor};
    padding-top: 15px;
    padding-bottom: 15px;
    position: relative;
    bottom: 0;
    margin: auto;
  `;
  
  const Link = styled.a`
    font-family: 'Inter', sans-serif;
    font-weight: normal;
    text-decoration: none;
    margin: 16px;
    color: ${props => props.theme.colors.footerLink};
    &:hover {
      text-decoration: underline;
    }
  `;
  
 const Copyright = styled.div`
  font-family: 'Inter', sans-serif;
  font-weight: normal;
  text-decoration: none;
  margin: 16px;
  color: ${props => props.theme.colors.footerLink};
 `;
 
const Footer = () => {
  const [copyright, setCopyright] = useState(`Copyright ${new Date().getFullYear()} - Xmoedas`)
  
  useEffect(() => {
    setCopyright(` 2022 - ${new Date().getFullYear()} - Xmoedas`)
  },[])
  
  return (
    <Footter>
      <Div>
        <Link href="mailto:contatodolaragora@gmail.com?subject=Dólaragora" rel="noopener">Contato</Link>
        <Link href="/sobre" rel="noopener">Sobre</Link>
      </Div>
      <Div>
        <Link href="/politicas">Política de privacidade</Link>
        <Link href="/termos">Termos de uso</Link>
      </Div>
      <Copyright align="center">&copy;{copyright}</Copyright>
    </Footter>
  )
}

export default Footer