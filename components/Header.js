import React, { useState } from 'react';
import MidiasLinks from 'components/MidiasLinks';

const Header = () => {
  const [showMenu, setShowMenu] = useState('none');

  function menuDisplay() {
    setShowMenu(showMenu === 'none' ? 'flex' : 'none');
    if (showMenu == 'flex') {
    } else {
    }
  }

  return (
    <div className="w-full sticky bg-white shadow-3xl top-0">
      <div className="max-w-[1366px] h-[55px] w-full flex items-center justify-between m-auto relative pl-4 pr-4">
        <div className="flex" href="/">
          <a href="/">
            <img src="/icone.svg" width="120" height="50" alt="Ícone do site" />
          </a>
        </div>
        <button
          className="outline-none bg-[var(--logo)] text-white p-2 rounded-md  text-xs"
          onClick={menuDisplay}
        >
          Compartilhar
        </button>
        <MidiasLinks menuDisplay={showMenu} />
      </div>
    </div>
  );
};

export default Header;
