import React, { useState, useContext, useEffect } from 'react';
import styled, { ThemeContext } from 'styled-components';
import MidiasLinks from 'components/SocialMidias/MidiasLinks';

const Div = styled.div`
    width: 100%;
    position: sticky;
    top: 0;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  `;
  
const HeaderSize = styled.header`
    background-color: ${props => props.theme.colors.primary};
    max-width: 1366px;
    margin-bottom: 10px;
  `;
  
  const HeaderDiv = styled.div`
    max-width: 100%;
    padding-left: 15px;
    padding-right: 15px;
    background-color: ${props => props.theme.colors.primary};
    height: 55px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: inline;
  `;
  
  const Icone = styled.a`
    display: flex;
    align-self: center;
    cursor: pointer;
  `;
  
  const Button = styled.button`
    background-color: ${props => props.theme.colors.iconColor};
    border: none;
    outline: none;
    font-size: 12px;
    padding: 10px;
    border-radius: 25px;
    cursor: pointer;
    color: white;
  `;
  
  
const Header = () => {

  const [showMenu, setShowMenu] = useState('none')
  
  function menuDisplay() {
    setShowMenu(showMenu === "none" ? "flex" : "none");
  }
  
  return (
    <Div>
    <HeaderSize>
        <HeaderDiv>
            <Icone href="/">
              <img src="/icone.svg" width="120" height="50" alt="Icone do site"/>
            </Icone>
            <Button onClick={menuDisplay}>Compartilhar</Button>
        </HeaderDiv>
        <MidiasLinks menuDisplay={showMenu} />
    </HeaderSize>   
    </Div>
  )
}

export default Header