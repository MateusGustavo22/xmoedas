import { Line } from 'react-chartjs-2';
import chart from 'chart.js/auto';
import styles from './Chart.module.scss';
import ChartButtons from '../chartButtons/ChartButtons';
import { useState } from 'react'

export default function Chart30days(props) {

  const bid30days = props.last30days.bid
  const datesFormated = props.last30days.timestamp.map(data => new Date(data * 1000).toLocaleDateString("pt-BR", { month: '2-digit', day: '2-digit' }))
  
  bid30days.reverse()
  datesFormated.reverse()

  const [cotPeriodo, setCotPeriodo] = useState(bid30days)
  const [cotDate, setCotDate] = useState(datesFormated)

  const [buttonOn1, setButtonOn1] = useState('#f2f2f2')
  const [buttonOn2, setButtonOn2] = useState('#cfcfcf')
  const [buttonOn3, setButtonOn3] = useState('#f2f2f2')

  const fetchData = async (url) => {
    const response = await fetch(url)
    const responseData = await response.json()

    const cot = responseData.map(data =>  {
      let value = parseFloat(data.bid)
      return value < 1 ? value.toFixed(3) : value.toFixed(2)
    })

    const cotDate = responseData.map(data => new Date(data.timestamp * 1000).toLocaleDateString("pt-BR", { month: '2-digit', day: '2-digit' }))

    cot.reverse()
    cotDate.reverse()

    setCotPeriodo(cot)
    setCotDate(cotDate)

  }

  async function select7days() {
    fetchData(`https://economia.awesomeapi.com.br/json/daily/${props.code}-BRL/7`)

    setButtonOn1('#cfcfcf')
    setButtonOn2('#f2f2f2')
    setButtonOn3('#f2f2f2')
  }

  function select30days() {
    setCotPeriodo(bid30days)
    setCotDate(datesFormated)

    setButtonOn1('#f2f2f2')
    setButtonOn2('#cfcfcf')
    setButtonOn3('#f2f2f2')
  }

  const select365days = async () => {
    fetchData(`https://economia.awesomeapi.com.br/json/daily/${props.code}-BRL/365`)

    setButtonOn1('#f2f2f2')
    setButtonOn2('#f2f2f2')
    setButtonOn3('#cfcfcf')
  }
 
const data = {
    labels: cotDate,
    datasets: [
      {
        label: `${props.code} Para BRL`,
        data: cotPeriodo,
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
        <ChartButtons 
          select7days={select7days}
          select30days={select30days}
          select365days={select365days}
          buttonOn1={buttonOn1}
          buttonOn2={buttonOn2} 
          buttonOn3={buttonOn3} 
        />
        <Line data={data} options={options} width="320" height="200" />
      </div>
    </div>
  )
}
