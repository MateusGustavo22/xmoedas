import React, { useState, useContext } from 'react';
import MidiasLinks from 'components/SocialMidias/MidiasLinks';
import { menuContext } from 'components/Layout/Layout';
import styles from './Header.module.scss';

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
    <div className={styles.div_area}>
      <div className={styles.header_size}>
              <div className={styles.icone} href="/">
              <a href="/">
                <img src="/icone.svg" width="120" height="50" alt="Ícone do site"/>
              </a>
              </div>
              <button className={styles.button_share} onClick={menuDisplay} style={{backgroundColor: onButton}}>Compartilhar</button>
          <MidiasLinks menuDisplay={showMenu}/>
      </div>
    </div>
  )
}

export default Header