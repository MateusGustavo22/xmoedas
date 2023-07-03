import { useState, useEffect } from 'react';
import Chart from 'components/Chart/Chart';

const Conversor = (props) => {
  const [input1Value, setInput1Value] = useState(1);
  const [input2Value, setInput2Value] = useState(props.currentQuote.toFixed(2));

  function handleInput1Change(e) {
    setInput1Value(e.target.value);
    setInput2Value((e.target.value * props.currentQuote).toFixed(2));
  }

  function handleInput2Change(e) {
    setInput2Value(e.target.value);
    setInput1Value((e.target.value / props.currentQuote).toFixed(2));
  }

  const [menuOptions, setOptions] = useState(props.currency);

  function selectChange(e) {
    setOptions(e.target.value);
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
  };

  useEffect(() => {
    if (menuOptions != props.currency) {
      window.location.href = currencyPages[menuOptions];
    }
  }, [menuOptions]);

  return (
    <div className=" h-max flex flex-row gap-4 shadow-3xl rounded-lg p-2 display1:flex-col ">
      <div className="max-w-md flex flex-col gap-2">
        <div className=" w-full flex flex-col">
          <span className="text-base text-gray-600">1 {props.currencyName} hoje = </span>
          <span className="font-medium text-gray-800 text-2xl">{props.currentQuote} Real Brasileiro</span>
        </div>
        <div className="w-full flex flex-col gap-1">
          <div className="gap-1 flex flex-row">
            <div className="w-44 flex p-1 items-center shrink-0 rounded-[4px] border-[1px] border-gray-400 ">
              <div>
                <img src={props.flag} width="32" height="25" alt="Bandeira da moeda" />
              </div>
              <select
                className="text-sm text-gray-800 outline-none bg-transparent"
                onChange={selectChange}
                value={props.code}
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
              className="w-full pr-2 h-11 text-right rounded-md border-[1px] bg-transparent border-gray-400 focus:border-blue-500 focus:border-[2px] focus:outline-none"
              name={props.code}
              type="number"
              value={input1Value}
              onChange={handleInput1Change}
            />
          </div>
          <div className="flex gap-1">
            <div className="w-44 h-11 flex p-1 gap-1 items-center shrink-0 rounded-[4px] border-[1px] border-gray-400">
              <div>
                <img src="/flags/br.svg" width="32" height="32" alt="Bandeira do Brasil" />
              </div>
              <span className="text-sm text-gray-800">Real Brasileiro</span>
            </div>
            <input
              className="w-full pr-2 h-11 text-right rounded-md border-[1px] bg-transparent border-gray-400 focus:border-blue-500 focus:border-[2px] focus:outline-none"
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
  );
};

export default Conversor;
