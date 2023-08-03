import { useState, useEffect } from 'react'
import Chart from 'components/Chart/Chart'
import Image from 'next/image'

const Converter = (props) => {
  const [input1Value, setInput1Value] = useState(1)
  const [input2Value, setInput2Value] = useState(props.currencyRate.toFixed(2))

  function handleInput1Change(e) {
    setInput1Value(e.target.value)
    const value = e.target.value * props.currencyRate
    setInput2Value(value.toFixed(2))
  }

  function handleInput2Change(e) {
    setInput2Value(e.target.value)
    const value = e.target.value / props.currencyRate
    setInput1Value(value.toFixed(2))
  }

  const [menuOptions, setOptions] = useState(props.currencyCode)

  function selectChange(e) {
    setOptions(e.target.value)
  }

  const currencyPages = {
    USD: '/',
    CAD: '/dolar-canadense',
    AUD: '/dolar-australiano',
    HKD: '/dolar-hongkong',
    TWD: '/dolar-taiwanes',
    EUR: '/euro',
    GBP: '/libra',
    ARS: '/peso-argentino',
    MXN: '/peso-mexicano',
    CNY: '/yuan-chines',
    RUB: '/rublo-russo',
    CHF: '/franco-suico',
    JPY: '/iene-japones',
  }

  useEffect(() => {
    if (menuOptions !== props.currencyCode) {
      window.location.href = currencyPages[menuOptions]
    }
  })

  return (
    <div className="  h-max flex-row gap-4 rounded-lg p-2 shadow-3xl flex display1:flex-col ">
      <div className="flex max-w-md flex-col gap-2">
        <div className=" flex w-full flex-col">
          <span className="text-base text-gray-600">1 {props.currencyName} hoje = </span>
          <span className="text-2xl font-medium text-gray-800">{props.currencyRate.toFixed(2)} Real Brasileiro</span>
        </div>
        <div className="flex w-full flex-col gap-1">
          <div className="flex flex-row gap-1">
            <div className="flex w-44 shrink-0 items-center rounded-[4px] border-[1px] border-gray-400 p-1 ">
              <div>
                <Image src={props.flag} width="32" height="25" alt="Bandeira da moeda" />
              </div>
              <select
                className="bg-transparent text-sm text-gray-800 outline-none"
                onChange={selectChange}
                value={props.currencyCode}
              >
                <option value="USD">Dólar Americano</option>
                <option value="CAD">Dólar Canadense</option>
                <option value="AUD">Dólar Australiano</option>
                <option value="HKD">Dólar Hong Kong</option>
                <option value="TWD">Dólar Taiwanês</option>
                <option value="EUR">Euro</option>
                <option value="GBP">Libra</option>
                <option value="ARS">Peso Argentino</option>
                <option value="MXN">Peso Mexicano</option>
                <option value="CNY">Yuan Chinês</option>
                <option value="JPY">Iene Japonês</option>
                <option value="RUB">Rublo Russo</option>
                <option value="CHF">Franco Suíço</option>
              </select>
            </div>
            <input
              className="h-11 w-full rounded-md border-[1px] border-gray-400 bg-transparent pr-2 text-right focus:border-[2px] focus:border-blue-500 focus:outline-none"
              name={props.code}
              type="number"
              value={input1Value}
              onChange={handleInput1Change}
            />
          </div>
          <div className="flex gap-1">
            <div className="h-11 flex  w-44 shrink-0 items-center gap-1 rounded-[4px] border-[1px] border-gray-400 p-1">
              <div>
                <Image src="/flags/br.svg" width="32" height="32" alt="Bandeira do Brasil" />
              </div>
              <span className="text-sm text-gray-800">Real Brasileiro</span>
            </div>
            <input
              className="h-11 w-full rounded-md border-[1px] border-gray-400 bg-transparent pr-2 text-right focus:border-[2px] focus:border-blue-500 focus:outline-none"
              name="BRL"
              type="number"
              value={input2Value}
              onChange={handleInput2Change}
            />
          </div>
        </div>
      </div>
      <Chart
        currencyCode={props.currencyCode}
        last30days={props.last30days}
        last7days={props.last7days}
        last365days={props.last365days}
      />
    </div>
  )
}

export default Converter
