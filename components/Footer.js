import Link from 'next/link'
import { useState, useEffect } from 'react'

const Footer = () => {
  const [copyright, setCopyright] = useState(`Copyright ${new Date().getFullYear()} - Xmoedas`)

  useEffect(() => {
    setCopyright(` 2022 - ${new Date().getFullYear()} - Xmoedas`)
  }, [])

  return (
    <footer className="relative flex w-full flex-col justify-center bg-[var(--footer-color)] p-4">
      <div className="flex justify-center ">
        <Link
          className="m-4 text-white no-underline hover:underline"
          href="mailto:contatomateuscode@gmail.com?subject=Xmoedas"
          rel="noopener"
        >
          Contato
        </Link>
        <Link className="m-4 text-white no-underline hover:underline" href="/sobre" rel="noopener">
          Sobre
        </Link>
      </div>
      <div className="flex justify-center">
        <Link className="m-4 text-white no-underline hover:underline" href="/politicas">
          Política de privacidade
        </Link>
        <Link className="m-4 text-white no-underline hover:underline" href="/termos">
          Termos de uso
        </Link>
      </div>
      <div className="mt-4 text-gray-300" align="center">
        &copy;{copyright}
      </div>
    </footer>
  )
}

export default Footer
