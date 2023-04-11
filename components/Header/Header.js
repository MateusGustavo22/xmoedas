import React, { useState, useContext } from 'react';
import MidiasLinks from 'components/SocialMidias/MidiasLinks';
import styles from './Header.module.scss';

const Header = () => {
  
  const [showMenu, setShowMenu] = useState('none');
  const [onButton, setOnButton] = useState('#1363DF')
  const [onFont, setOnFont] = useState('#ffff')
 
  
  function menuDisplay() {
    setShowMenu(showMenu === 'none' ? 'flex' : 'none');
    if (showMenu == 'flex') {
      setOnButton('#1363DF');
      setOnFont("#ffff")
    }else {
      setOnButton('');
      setOnFont("#000000")
    }
  }
 
  return (
    <div className={styles.div_area}>
      <div className={styles.header_size}>
              <div className={styles.icone} href="/">
              <a href="/">
                <img src="/icone.svg" width="120" height="50" alt="Ícone do site"/>
              </a>
              </div>
              <button className={styles.button_share} onClick={menuDisplay} style={{backgroundColor: onButton, color: onFont}}>Compartilhar</button>
          <MidiasLinks menuDisplay={showMenu}/>
      </div>
    </div>
  )
}

export default Header