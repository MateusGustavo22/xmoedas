import { useState, useEffect } from 'react';
import axios from 'axios';

const Conversor = (props) => {
  
  const [input1Value, setInput1Value] = useState(1);
  const [input2Value, setInput2Value] = useState(props.cotacao);
  
  const [cotacao, setCotacao] = useState(props.cotacao)
  
  //Atualiza os inputs 
  function handleInput1Change(e) {
    setInput1Value(e.target.value)
    setInput2Value((e.target.value * cotacao).toFixed(2))
  }

  function handleInput2Change(e) {
    setInput2Value(e.target.value)
    setInput1Value((e.target.value / cotacao).toFixed(2))
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
    <article>
         <div className="input_area">
           <div className="moedas_input">
             <select id="currency_options" onChange={selectChange} value={props.currency}>
                 <option value="USD">Dólar Americano</option>
                 <option value="CAD">Dólar Canadense</option>
                 <option value="AUD">Dólar Australiano</option>
                 <option value="HKD">Dólar De Hong Kong</option>
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
              <div id="input_1" style={{border: '2px solid #a4a4a4', borderRight: 'none'}}>
                 <div className="input_1">
                    <div className="moeda_icon">
                       <img src={props.flag} width="52" height="45" alt="Bandeira"/>
                    </div>
                    <span>{props.currency}</span>
                 </div>
                 <div className="input_div">
                    <input id="entrada_1" name={props.currency} type="number" value={input1Value} onChange={handleInput1Change} style={{border: '2px solid #A4A4A4', borderLeft: 'none'}}/>
                 </div>
              </div>
              <div className="input_2" style={{border: '2px solid #a4a4a4', borderRight: 'none'}}>
                 <div className="moeda_icon">
                    <img src='/flags/br.svg'  width="52" height="45" alt="Bandeira do Brasil"/>
                 </div>
                 <span>BRL</span>
                 <div className="input_div">
                    <input id="entrada_2" name={props.br} type="number" value={input2Value} onChange={handleInput2Change} style={{border: '2px solid #a4a4a4', borderLeft: 'none'}}/>
                 </div>
              </div>
            </div>
          </div>
          <style jsx>{`
          .input_area {
            max-width: 700px;
            margin: auto;
            padding: 10px;
            padding-top: 0px;
            padding-bottom: 0px;
          }
          
          .moedas_input {
            max-width: 700px;
            padding: 10px;
            margin: auto;
            display: flex;
            flex-direction: column;
            justify-content: right;
          }
          #input_1, .input_2 {
            max-width: 100%;
            height: 70px;
            margin-bottom: 18px;
            display: flex;
            border-radius: 8px;
            flex-direction: inline;
            background-color: white;
            padding-left: 5px;
            cursor: pointer;
          }
          
          #input_2 {
            align-items: center;
            margin-bottom: 8px;
          }
          
          .input_1, .input_2 {
            display: flex;
            flex-direction: inline;
            align-items: center;
            background-color: white;
          }
          
          .input_1 span, .input_2 span {
            margin-left: 5px;
            margin-right: 5px;
            color: #5c5c61;
            font-weight: bold;
            font-family: 'Inter', sans-serif;
            font-size: 30px;
          }
          
          #currency_options {
            max-width: 180px;
            outline: none;
            border: none;
            margin-bottom: 5px;
            font-size: 16px;
            font-family: 'Inter', sans-serif;
            font-weight: bold;
            color: #5c5c61;
            background-color: transparent;
          }
          .moeda_icon {
            width: 52px;
            height: 40px;
            margin-top: 3px;
            display: flex;
            align-items: center;
          }
          .input_div {
            width: 100%;
            display: flex;
            justify-content: right;
            align-items: center;
          }
          input {
            width: 100%;
            height: 68px;
            text-align: right;
            padding-right: 8px;
            font-size: 35px;
            color: #5c5c61;
            outline: none;
            border-top-right-radius: 8px;
            border-bottom-right-radius: 8px;
            font-family: 'Inter', sans-serif;
            font-weight: bold;
          }
        
       `}</style>
      </article>
  )  
} 

export default Conversor 