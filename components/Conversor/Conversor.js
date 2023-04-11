import { useState, useEffect } from 'react';
import Chart from 'components/Chart/Chart';
import style from './Conversor.module.scss';


const Conversor = (props) => {
  
  const [input1Value, setInput1Value] = useState(1);
  const [input2Value, setInput2Value] = useState(props.cotacao);

  //Atualiza os inputs 
  function handleInput1Change(e) {
    setInput1Value(e.target.value);
    setInput2Value((e.target.value * props.cotacao).toFixed(2));
  }

  function handleInput2Change(e) {
    setInput2Value(e.target.value);
    setInput1Value((e.target.value / props.cotacao).toFixed(2));
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
    JPY: '/iene-japones'
  };
  
  useEffect(() => {
    if (menuOptions != props.currency) {
       window.location.href = currencyPages[menuOptions];
    }
  }, [menuOptions])
  
  
  return (
    <div className={style.convert_area}>
       <div className={style.convert_div}>
          <div className={style.moeda_valor}>
            <span className={style.moeda_nome}>1 {props.moedaName} hoje = </span>
            <span className={style.moeda_brl}>{props.cotacao} Real Brasileiro</span>
          </div>
          <div className={style.input_area}>
             <div className={style.flag_code}>
                <div className={style.moeda_icon}>
                   <img src={props.flag} width="32" height="25" alt="Bandeira da moeda"/>
                </div>
                 <select id={style.select} onChange={selectChange} value={props.code}>
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
              <input id={style.input_1} name={props.code} type="number" value={input1Value} onChange={handleInput1Change} />
          </div>
          <div className={style.input_area}>
             <div className={style.flag_code}>
               <div className={style.moeda_icon}>
                  <img src='/flags/br.svg'  width="32" height="32" alt="Bandeira do Brasil"/>
               </div>
                <span className={style.span_brl}>Real Brasileiro</span>
              </div>
             <input id={style.input_2} name="BRL" type="number" value={input2Value} onChange={handleInput2Change} />
          </div>
      </div>
      <Chart code={props.code} 
      last30days={props.last30days} 
      last7days={props.last7days} 
      last365days={props.last365days} 
      />
    </div>
  )  
} 

export default Conversor 