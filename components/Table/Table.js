import styles from './Table.module.scss';

export default function Table({ cotacao, moeda, code }) {
  
  return (
    <div className={styles.div_area}>
      <h2>Tabela de conversão {moeda} / Real</h2>
      <table className={styles.html_table}>
      <tbody>
        <tr className={styles.html_tr}>
          <th className={styles.html_th}>{moeda}</th>
          <th className={styles.html_th}>Real</th>
        </tr>
        <tr className={styles.html_tr}>
          <td className={styles.html_td}>{(1).toLocaleString("pt-BR", {style:"currency", currency:code})}</td>
          <td className={styles.html_td}>{(cotacao * 1).toLocaleString("pt-BR", {style:"currency", currency:"BRL"})}</td>
        </tr>
         <tr className={styles.html_tr}>
          <td className={styles.html_td}>{(5).toLocaleString("pt-BR", {style:"currency", currency:code})}</td>
          <td className={styles.html_td}> {(cotacao * 5).toLocaleString("pt-BR", {style:"currency", currency:"BRL"})}</td>
        </tr>
        <tr className={styles.html_tr}>
          <td className={styles.html_td}>{(10).toLocaleString("pt-BR", {style:"currency", currency:code})}</td>
          <td className={styles.html_td}>{(cotacao * 10).toLocaleString("pt-BR", {style:"currency", currency:"BRL"})}</td>
        </tr>
        <tr className={styles.html_tr}>
          <td className={styles.html_td}>{(25).toLocaleString("pt-BR", {style:"currency", currency:code})}</td>
          <td className={styles.html_td}>{(cotacao * 25).toLocaleString("pt-BR", {style:"currency", currency:"BRL"})}</td>
        </tr>
        <tr className={styles.html_tr}>
          <td className={styles.html_td}>{(50).toLocaleString("pt-BR", {style:"currency", currency:code})}</td>
          <td className={styles.html_td}>{(cotacao * 50).toLocaleString("pt-BR", {style:"currency", currency:"BRL"})}</td>
       </tr>
        <tr className={styles.html_tr}>
          <td className={styles.html_td}>{(100).toLocaleString("pt-BR", {style:"currency", currency:code})}</td>
          <td className={styles.html_td}>{(cotacao * 100).toLocaleString("pt-BR", {style:"currency", currency:"BRL"})}</td>
       </tr>
        <tr className={styles.html_tr}>
          <td className={styles.html_td}>{(150).toLocaleString("pt-BR", {style:"currency", currency:code})}</td>
          <td className={styles.html_td}>{(cotacao * 150).toLocaleString("pt-BR", {style:"currency", currency:"BRL"})}</td>
       </tr>
        <tr className={styles.html_tr}>
          <td className={styles.html_td}>{(500).toLocaleString("pt-BR", {style:"currency", currency:code})}</td>
          <td className={styles.html_td}>{(cotacao * 500).toLocaleString("pt-BR", {style:"currency", currency:"BRL"})}</td>
       </tr>
        <tr className={styles.html_tr}>
          <td className={styles.html_td}>{(1000).toLocaleString("pt-BR", {style:"currency", currency:code})}</td>
          <td className={styles.html_td}>{(cotacao * 1000).toLocaleString("pt-BR", {style:"currency", currency:"BRL"})}</td>
       </tr>
        <tr className={styles.html_tr}>
          <td className={styles.html_td}>{(1500).toLocaleString("pt-BR", {style:"currency", currency:code})}</td>
          <td className={styles.html_td}>{(cotacao * 1500).toLocaleString("pt-BR", {style:"currency", currency:"BRL"})}</td>
       </tr>
        </tbody>
      </table>
    </div>
  )
}