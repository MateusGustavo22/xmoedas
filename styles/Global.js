import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
  
  body {
    background-color: ${props => props.theme.colors.secundary};
  }
  
  .container_principal {
    min-height: 100vh;
  }
  
  main {
    max-width: 700px;
    margin: auto;
    padding: 15px;
  }
  
  .mainContent {
    margin-bottom: 100px;
    padding: 0px;
  }
  
  h1, h2, h3 {
    font-size: 22px;
    margin-bottom: 30px;
    margin-top: 30px;
    color: ${props => props.theme.colors.fontH};
  }
 
  p {
    font-weight: normal;
    font-size: 17px;
    line-height: 1.5;
    color: ${props => props.theme.colors.fontP};
  }
  
`;