import { Line } from 'react-chartjs-2'
import 'chart.js/auto'
import ChartButtons from './ChartButtons'
import { useState } from 'react'

export default function Chart({ currencyCode, last365days, last30days, last7days }) {
  const [lastCurrencyRates, setLastCurrencyRates] = useState(last30days.lastCurrencyRates)
  const [lastCurrencyRatesDates, setLastCurrencyRatesDates] = useState(last30days.lastCurrencyRatesDates)

  const grayLow = '#dedede'
  const grayDark = '#c8c6c6'

  const [buttonOn1, setButtonOn1] = useState(grayLow)
  const [buttonOn2, setButtonOn2] = useState(grayDark)
  const [buttonOn3, setButtonOn3] = useState(grayLow)

  async function select7days() {
    setLastCurrencyRates(last7days.lastCurrencyRates)
    setLastCurrencyRatesDates(last7days.lastCurrencyRatesDates)

    setButtonOn1(grayDark)
    setButtonOn2(grayLow)
    setButtonOn3(grayLow)
  }

  function select30days() {
    setLastCurrencyRates(last30days.lastCurrencyRates)
    setLastCurrencyRatesDates(last30days.lastCurrencyRatesDates)

    setButtonOn1(grayLow)
    setButtonOn2(grayDark)
    setButtonOn3(grayLow)
  }

  const select365days = async () => {
    setLastCurrencyRates(last365days.lastCurrencyRates)
    setLastCurrencyRatesDates(last365days.lastCurrencyRatesDates)

    setButtonOn1(grayLow)
    setButtonOn2(grayLow)
    setButtonOn3(grayDark)
  }

  const formatTimestampToDate = (timestamp) => {
    const date = new Date(timestamp * 1000)
    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0')
    return `${day}/${month}`
  }

  const labels = lastCurrencyRatesDates.map((timestamp) => formatTimestampToDate(timestamp))

  const data = {
    labels: labels,
    datasets: [
      {
        label: `${currencyCode} Para BRL`,
        data: lastCurrencyRates,
        fill: true,
        pointRadius: 0,
        backgroundColor: 'rgb(19, 98, 168, 0.2)',
        borderColor: '#1363DF',
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        mode: 'index',
        intersect: false,
      },
      legend: {
        position: 'top',
      },
    },
  }

  return (
    <div className="bg-transparent">
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
  )
}
