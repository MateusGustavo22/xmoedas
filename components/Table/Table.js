import styles from './Table.module.css';

export default function Table({ currencyRate, currencyName, currencyCode }) {
  return (
    <div className={styles.div_area}>
      <h2>Tabela de conversão {currencyName} / Real</h2>
      <table className={styles.html_table}>
        <tbody>
          <tr className={styles.html_tr}>
            <th className={styles.html_th}>{currencyName}</th>
            <th className={styles.html_th}>Real Brasileiro</th>
          </tr>
          <tr className={styles.html_tr}>
            <td className={styles.html_td}>
              {(1).toLocaleString('pt-BR', {
                style: 'currency',
                currency: currencyCode,
              })}
            </td>
            <td className={styles.html_td}>
              {(currencyRate * 1).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </td>
          </tr>
          <tr className={styles.html_tr}>
            <td className={styles.html_td}>
              {(5).toLocaleString('pt-BR', {
                style: 'currency',
                currency: currencyCode,
              })}
            </td>
            <td className={styles.html_td}>
              {' '}
              {(currencyRate * 5).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </td>
          </tr>
          <tr className={styles.html_tr}>
            <td className={styles.html_td}>
              {(10).toLocaleString('pt-BR', {
                style: 'currency',
                currency: currencyCode,
              })}
            </td>
            <td className={styles.html_td}>
              {(currencyRate * 10).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </td>
          </tr>
          <tr className={styles.html_tr}>
            <td className={styles.html_td}>
              {(25).toLocaleString('pt-BR', {
                style: 'currency',
                currency: currencyCode,
              })}
            </td>
            <td className={styles.html_td}>
              {(currencyRate * 25).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </td>
          </tr>
          <tr className={styles.html_tr}>
            <td className={styles.html_td}>
              {(50).toLocaleString('pt-BR', {
                style: 'currency',
                currency: currencyCode,
              })}
            </td>
            <td className={styles.html_td}>
              {(currencyRate * 50).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </td>
          </tr>
          <tr className={styles.html_tr}>
            <td className={styles.html_td}>
              {(100).toLocaleString('pt-BR', {
                style: 'currency',
                currency: currencyCode,
              })}
            </td>
            <td className={styles.html_td}>
              {(currencyRate * 100).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </td>
          </tr>
          <tr className={styles.html_tr}>
            <td className={styles.html_td}>
              {(150).toLocaleString('pt-BR', {
                style: 'currency',
                currency: currencyCode,
              })}
            </td>
            <td className={styles.html_td}>
              {(currencyRate * 150).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </td>
          </tr>
          <tr className={styles.html_tr}>
            <td className={styles.html_td}>
              {(500).toLocaleString('pt-BR', {
                style: 'currency',
                currency: currencyCode,
              })}
            </td>
            <td className={styles.html_td}>
              {(currencyRate * 500).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </td>
          </tr>
          <tr className={styles.html_tr}>
            <td className={styles.html_td}>
              {(1000).toLocaleString('pt-BR', {
                style: 'currency',
                currency: currencyCode,
              })}
            </td>
            <td className={styles.html_td}>
              {(currencyRate * 1000).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </td>
          </tr>
          <tr className={styles.html_tr}>
            <td className={styles.html_td}>
              {(1500).toLocaleString('pt-BR', {
                style: 'currency',
                currency: currencyCode,
              })}
            </td>
            <td className={styles.html_td}>
              {(currencyRate * 1500).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
