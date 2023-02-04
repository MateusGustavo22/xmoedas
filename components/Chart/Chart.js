import { Line } from 'react-chartjs-2';
import chart from 'chart.js/auto';

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
        label: `${props.currency}/BRL`,
        data: lastCots,
        fill: true,
        pointRadius: 0,
        backgroundColor: 'rgb(136,175,229, 0.3)',
        borderColor: '#1260CC',
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
    <section className="chart_area">
      <div className="chart">
        <h2>Gráfico ({props.currency}) nos últimos 30 dias</h2>
        <Line data={data} options={options} height="160" />
      </div>
      <style jsx>{`
        .chart_area {
          max-width: 700px;
          padding-left: 20px;
          padding-right: 20px;
          margin: auto;
          display: flex;
          justify-content: center;
          align-items: right;
        }
        .chart {
          width: 100%;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px 2px;
          border-radius: 3px;
          padding-top: 12px;
          padding-bottom: 8px;
        }
        
        section h2 {
          text-align: center;
          font-family: 'Inter', sans-serif;
          font-weight: normal;
          color: #5c5c61;
          font-size: 15px;
          margin-top: 0px;
          margin-bottom: 0px;
        }
      `}</style>
    </section>
  )
}
