import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Select = styled.select`
    max-width: 180px;
    outline: none;
    border: none;
    margin-bottom: 8px;
    font-size: 18px;
    font-family: 'Inter', sans-serif;
    font-weight: bold;
    color: ${props => props.theme.colors.fontH};
    background-color: transparent;
    &:hover {
       text-decoration: underline
    }
  `;
  
  const InputArea = styled.div` 
    max-width: 700px;
    height: 70px;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    border-radius: 10px;
    border: ${props => props.theme.colors.border};
    flex-direction: inline;
    background-color: ${props => props.theme.colors.primary};
    cursor: pointer;
    &:hover {
      border: ${props => props.theme.colors.borderFocus};
    }
   
  `;
  
  const ConvertDiv = styled.div`
    max-width: 700px;
    margin: auto;
    padding-bottom: 5px;
  `;
  
  const Span = styled.span`
    margin-left: 5px;
    margin-right: 5px;
    color: ${props => props.theme.colors.fontH};
    font-weight: bold;
    font-family: 'Inter', sans-serif;
    font-size: 30px;
  `;
  
  const Input = styled.input`
    width: 100%;
    height: 60px;
    text-align: right;
    padding-right: 8px;
    font-size: 35px;
    color: ${props => props.theme.colors.fontH};
    outline: none;
    background-color: ${props => props.theme.colors.primary};
    border: none;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 18px;
    font-family: 'Inter', sans-serif;
    font-weight: bold;
  `;
  
  const FlagCode = styled.div`
    height: 100%;
    display: flex;
    padding-left: 8px;
    flex-direction: inline;
    border-bottom-left-radius: 8px;
    border-top-left-radius: 8px;
    align-items: center;
    background-color: ${props => props.theme.colors.primary};
  `;
  
  const MoedaIcon = styled.div`
    width: 52px;
    height: 40px;
    margin-top: 3px;
    display: flex;
    align-items: center;
  `;
  
  
const Conversor = (props) => {
  
  const [input1Value, setInput1Value] = useState(1);
  const [input2Value, setInput2Value] = useState(props.cotacao);
  
  const [cotacao, setCotacao] = useState(props.cotacao)
  
  //Atualiza os inputs 
  function handleInput1Change(e) {
    setInput1Value(e.target.value);
    setInput2Value((e.target.value * cotacao).toFixed(2));
  }

  function handleInput2Change(e) {
    setInput2Value(e.target.value);
    setInput1Value((e.target.value / cotacao).toFixed(2));
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
       <ConvertDiv>
         <Select onChange={selectChange} value={props.currency}>
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
          </Select>
          <InputArea>
             <FlagCode>
                <MoedaIcon>
                   <img src={props.flag} width="52" height="45" alt="Bandeira da moeda" />
                </MoedaIcon>
                <Span>{props.currency}</Span>
             </FlagCode>
              <Input name={props.currency} type="number" value={input1Value} onChange={handleInput1Change} />
          </InputArea>
          <InputArea>
             <FlagCode>
               <MoedaIcon>
                  <img src='/flags/br.svg'  width="52" height="45" alt="Bandeira do Brasil"/>
               </MoedaIcon>
               <Span>BRL</Span>
             </FlagCode>
             <Input name={props.br} type="number" value={input2Value} onChange={handleInput2Change} />
          </InputArea>
      </ConvertDiv>
    </article>
  )  
} 

export default Conversor 