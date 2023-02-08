import styled from "@emotion/styled";
import { Container } from "@mui/material";
import { AlignedDiv } from "./StyledComponents";

export const StandList15 = ({ content }) => {
  return (
    <TableContainer>
      <AlignedDiv>
      <ScrollableTable>
        <tr>
          <TH colSpan={2}>Martes 15</TH>
        </tr>
        {content.map(d => (
          <tr key={d.stand+d.d1}>
            <TD key={d.stand}>{d.stand}</TD>
            <TDH key={d.d1}>{d.d1}</TDH>
          </tr>
        )
        )}
      </ScrollableTable>
      </AlignedDiv>
    </TableContainer>
  )
}

export const StandList16 = ({ content }) => {
  return (
    <TableContainer>
      <AlignedDiv>
      <ScrollableTable>
        <tr>
          <TH colSpan={2}>Miércoles 16</TH>
        </tr>
        {content.map(d => (
          <tr key={d.stand+d.d2}>
            <TD key={d.stand}>{d.stand}</TD>
            <TDH key={d.d2}>{d.d2}</TDH>
          </tr>
        )
        )}
      </ScrollableTable>
      </AlignedDiv>
    </TableContainer>
  )
}

const TH = styled.th`
padding: 2rem;
text-align: center;
min-width: 10%;
background-color: #83DEFF;
border: 1px solid #000;
border-collapse: collapse;
`;

const TD = styled.td`
padding: 1rem;
text-align: center;
min-width: 10%;
border: 1px solid #000;
background: #633CAE;
border-collapse: collapse;
color: white;
`;

const TDH = styled.td`
padding: 1rem;
text-align: center;
min-width: 10%;
border: 1px solid #000;
background-color: #FF645F;
border-collapse: collapse;
font-weight: bold;
`;

const ScrollableTable = styled.table`

border-collapse: collapse;
`;

const TableContainer = styled.div`
overflow-x: auto;
`;