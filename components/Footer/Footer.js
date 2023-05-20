import { useState, useEffect } from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  const [copyright, setCopyright] = useState(
    `Copyright ${new Date().getFullYear()} - Xmoedas`
  );

  useEffect(() => {
    setCopyright(` 2022 - ${new Date().getFullYear()} - Xmoedas`);
  }, []);

  return (
    <footer className={styles.html_footer}>
      <div className={styles.html_div}>
        <a
          id={styles.contato}
          href="mailto:contatomateuscode@gmail.com?subject=Xmoedas"
          rel="noopener"
        >
          Contato
        </a>
        <a id={styles.sobre} href="/sobre" rel="noopener">
          Sobre
        </a>
      </div>
      <div className={styles.html_div}>
        <a id={styles.politicas} href="/politicas">
          Política de privacidade
        </a>
        <a id={styles.termos} href="/termos">
          Termos de uso
        </a>
      </div>
      <div className={styles.copyright} align="center">
        &copy;{copyright}
      </div>
    </footer>
  );
};

export default Footer;
