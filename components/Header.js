import React, { useState } from 'react'
import MidiasLinks from 'components/MidiasLinks'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  const [showMenu, setShowMenu] = useState('none')

  function menuDisplay() {
    setShowMenu(showMenu === 'none' ? 'flex' : 'none')
    if (showMenu == 'flex') {
    } else {
    }
  }

  return (
    <div className="sticky top-0 mb-4 w-full bg-white shadow-3xl">
      <div className="relative m-auto flex h-[55px] w-full max-w-[1366px] items-center justify-between pl-4 pr-4">
        <div className="flex" href="/">
          <Link href="/">
            <Image src="/icone.svg" width="120" height="50" alt="Ícone do site" />
          </Link>
        </div>
        <button className="rounded-md bg-[var(--logo)] p-2 text-xs text-white  outline-none" onClick={menuDisplay}>
          Compartilhar
        </button>
        <MidiasLinks menuDisplay={showMenu} />
      </div>
    </div>
  )
}

export default Header
