import React, { useState, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import MidiasLinks from 'components/SocialMidias/MidiasLinks';
import { menuContext } from 'components/Layout/Layout';

const Div = styled.div`
    width: 100%;
    position: sticky;
    background-color: ${props => props.theme.colors.primary};
    margin: auto;
    top: 0;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  `;
  
const HeaderSize = styled.header`
    max-width: 1366px;
    position: relative;
    padding-left: 15px;
    padding-right: 15px;
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
    border: none;
    outline: none;
    font-size: 12px;
    padding: 10px;
    border-radius: 25px;
    cursor: pointer;
    color: white;
  `;
  
  
const Header = () => {
  
  const [showMenu, setShowMenu] = useState('none');
  const [onButton, setOnButton] = useState('#1363DF')
 
  
  function menuDisplay() {
    setShowMenu(showMenu === 'none' ? 'flex' : 'none');
    if (showMenu == 'flex') {
      setOnButton('#1363DF');
    }else {
      setOnButton('#0a367a');
    }
  }
 
  return (
    <Div>
      <HeaderSize>
              <Icone href="/">
                <img src="/icone.svg" width="120" height="50" alt="Ícone do site"/>
              </Icone>
              <Button onClick={menuDisplay} style={{backgroundColor: onButton}}>Compartilhar</Button>
          <MidiasLinks menuDisplay={showMenu}/>
      </HeaderSize>
    </Div>
  )
}

export default Header