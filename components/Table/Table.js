import styled from 'styled-components';

const Div = styled.div`
      max-width: 500px;
  `;
  
  const Tablle = styled.table`
    width: 100%;
    border-collapse: collapse;
  `;
  
  const TableTr = styled.tr`
    &:nth-child(even) {
    background-color: ${props => props.theme.colors.tableLine};
  }
  `;
  
  const Th = styled.th`
    padding: 10px;
    text-align: left;
    background-color: ${props => props.theme.colors.iconColor};
    border: 1px solid ${props => props.theme.colors.tableBorder};
    color: white;
  `;
  
  const Td = styled.td`
    border: 1px solid ${props => props.theme.colors.tableBorder};
    padding: 10px;
    color: ${props => props.theme.colors.fontP};
  `;
  
export default function Table({ cotacao, moeda, code }) {
  
  return (
    <Div>
      <h2>Tabela de conversão {moeda} / Real</h2>
      <Tablle>
      <tbody>
        <TableTr>
          <Th>{moeda}</Th>
          <Th>Real</Th>
        </TableTr>
        <TableTr>
          <Td>{(1).toLocaleString("pt-BR", {style:"currency", currency:code})}</Td>
          <Td>{(cotacao * 1).toLocaleString("pt-BR", {style:"currency", currency:"BRL"})}</Td>
        </TableTr>
         <TableTr>
          <Td>{(5).toLocaleString("pt-BR", {style:"currency", currency:code})}</Td>
          <Td> {(cotacao * 5).toLocaleString("pt-BR", {style:"currency", currency:"BRL"})}</Td>
        </TableTr>
        <TableTr>
          <Td>{(10).toLocaleString("pt-BR", {style:"currency", currency:code})}</Td>
          <Td>{(cotacao * 10).toLocaleString("pt-BR", {style:"currency", currency:"BRL"})}</Td>
        </TableTr>
        <TableTr>
          <Td>{(25).toLocaleString("pt-BR", {style:"currency", currency:code})}</Td>
          <Td>{(cotacao * 25).toLocaleString("pt-BR", {style:"currency", currency:"BRL"})} </Td>
        </TableTr>
        <TableTr>
          <Td>{(50).toLocaleString("pt-BR", {style:"currency", currency:code})}</Td>
          <Td>{(cotacao * 50).toLocaleString("pt-BR", {style:"currency", currency:"BRL"})}</Td>
        </TableTr>
        <TableTr>
          <Td>{(100).toLocaleString("pt-BR", {style:"currency", currency:code})}</Td>
          <Td>{(cotacao * 100).toLocaleString("pt-BR", {style:"currency", currency:"BRL"})}</Td>
        </TableTr>
        <TableTr>
          <Td>{(150).toLocaleString("pt-BR", {style:"currency", currency:code})}</Td>
          <Td>{(cotacao * 150).toLocaleString("pt-BR", {style:"currency", currency:"BRL"})}</Td>
        </TableTr>
        <TableTr>
          <Td>{(500).toLocaleString("pt-BR", {style:"currency", currency:code})}</Td>
          <Td>{(cotacao * 500).toLocaleString("pt-BR", {style:"currency", currency:"BRL"})}</Td>
        </TableTr>
        <TableTr>
          <Td>{(1000).toLocaleString("pt-BR", {style:"currency", currency:code})}</Td>
          <Td>{(cotacao * 1000).toLocaleString("pt-BR", {style:"currency", currency:"BRL"})}</Td>
        </TableTr>
        <TableTr>
          <Td>{(1500).toLocaleString("pt-BR", {style:"currency", currency:code})}</Td>
          <Td>{(cotacao * 1500).toLocaleString("pt-BR", {style:"currency", currency:"BRL"})}</Td>
        </TableTr>
        </tbody>
      </Tablle>
    </Div>
  )
}