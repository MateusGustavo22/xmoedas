import { useState, useEffect } from "react";

const Footer = () => {
  const [copyright, setCopyright] = useState(
    `Copyright ${new Date().getFullYear()} - Xmoedas`
  );

  useEffect(() => {
    setCopyright(` 2022 - ${new Date().getFullYear()} - Xmoedas`);
  }, []);

  return (
    <footer className='w-full flex flex-col p-4 relative justify-center bg-[var(--footer-color)]'>
      <div className='flex justify-center '>
        <a
          className='no-underline m-4 hover:underline text-white'
          href="mailto:contatomateuscode@gmail.com?subject=Xmoedas"
          rel="noopener"
        >
          Contato
        </a>
        <a className='no-underline m-4 hover:underline text-white' href="/sobre" rel="noopener">
          Sobre
        </a>
      </div>
      <div className='flex justify-center'>
        <a className='no-underline m-4 hover:underline text-white' href="/politicas">
          Política de privacidade
        </a>
        <a className='no-underline m-4 hover:underline text-white' href="/termos">
          Termos de uso
        </a>
      </div>
      <div className='text-gray-300 mt-4' align="center">
        &copy;{copyright}
      </div>
    </footer>
  );
};

export default Footer;
