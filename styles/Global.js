import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${props => props.theme.colors.secundary};
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }
  
  .container_principal {
    min-height: 100vh;
    padding: 15px;
  }
  
  main {
    max-width: 700px;
    margin: auto;
    padding: 15px;
    margin-bottom: 100px;
  }
  
  h1, h2, h3 {
    font-family: 'Inter', sans-serif;
    font-size: 22px;
    margin-bottom: 30px;
    margin-top: 30px;
    color: ${props => props.theme.colors.fontH};
  }
 
  p {
    font-family: 'Inter', sans-serif;
    font-weight: normal;
    font-size: 17px;
    line-height: 1.5;
    color: ${props => props.theme.colors.fontP};
  }
  
`;