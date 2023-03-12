import { Line } from 'react-chartjs-2';
import chart from 'chart.js/auto';
import styles from './Chart.module.scss';

export default function Chart30days(props) {
  
  const resObj = props.last30days;
  const lastCots = [];
  const lastDates = [];
  
  //Prenche os arrays com as cotações e datas
  for (let i = 0; i < 29; i++) {
    //Preenche os arrays das cotações e das data
    if (parseFloat(resObj.bid[i]) < 1) {
      lastCots.push(parseFloat(resObj.bid[i]).toFixed(3));
    } else {
      lastCots.push(parseFloat(resObj.bid[i]).toFixed(2));
    }
    //lastCots.push(parseFloat(resObj.bid[i]).toFixed(2));
    let timeStamp = resObj.timestamp[i];
    let date = new Date(timeStamp * 1000);
    var optionsDate = { month: '2-digit', day: '2-digit'};
    lastDates.push(date.toLocaleDateString("pt-BR", optionsDate));
  }
  
  lastDates.reverse()
  lastCots.reverse()
 
 const data = {
    labels: lastDates,
    datasets: [
      {
        label: `${props.code} Para BRL`,
        data: lastCots,
        fill: true,
        pointRadius: 0,
        backgroundColor: 'rgb(19, 99, 223, 0.3)',
        borderColor: '#1363DF',
      },
    ],
}

const options = {
    interaction: {
      intersect: false,
      mode: 'index',
    },
}
  
  return (
    <div className={styles.chart_area}>
      <div className={styles.chart_div}>
        <span className={styles.chart_span}>Gráfico ({props.code}) nos últimos 30 dias</span>
        <Line data={data} options={options} width="320" height="200" />
      </div>
    </div>
  )
}
