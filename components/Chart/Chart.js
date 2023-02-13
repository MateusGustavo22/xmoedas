import { Line } from 'react-chartjs-2';
import chart from 'chart.js/auto';
import styled from 'styled-components';


const ChartArea = styled.section`
    max-width: 700px;
    background-color: ${props => props.theme.colors.primary};
    border-radius: 10px;
    margin: auto;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: right;
 `;
 
 const ChartDiv = styled.div`
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 10px;
    padding-top: 12px;
    padding-bottom: 8px;
    display: flex;
    justify-content: center;
    flex-direction: column;
 `;
  
  const Span = styled.span`
    text-align: center;
    font-family: 'Inter', sans-serif;
    font-weight: normal;
    color: ${props => props.theme.colors.fontP};
    font-size: 15px;
    margin-top: 0px;
    margin-bottom: 0px;
  `;
  
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
        label: `${props.currency}/BRL `,
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
    <ChartArea>
      <ChartDiv>
        <Span>Gráfico ({props.currency}) nos últimos 30 dias</Span>
        <Line data={data} options={options} height="160" />
      </ChartDiv>
    </ChartArea>
  )
}
