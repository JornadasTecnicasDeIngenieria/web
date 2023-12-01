import styled from "@emotion/styled";
import { AlignedDiv } from "./StyledComponents";

export const StandList14 = ({ content }) => {
  return (
    <TableContainer>
      <ScrollableTable>
        <tbody>
          <tr>
            <th></th>
            <TH>Martes 14</TH>
          </tr>
          {content.map((d) => (
            <tr key={d.stand + d.d1}>
              <TD key={d.stand}>{d.stand}</TD>
              <TDH key={d.d1}>{d.d1}</TDH>
            </tr>
          ))}
        </tbody>
      </ScrollableTable>
    </TableContainer>
  );
};

export const StandList15 = ({ content }) => {
  return (
    <TableContainer>
      <ScrollableTable>
        <tbody>
          <tr>
            <THForSmallScreens></THForSmallScreens>
            <TH>Miércoles 15</TH>
          </tr>
          {content.map((d) => (
            <tr key={d.stand + d.d2}>
              <TDForSmallScreens key={d.stand}> {d.stand}</TDForSmallScreens>
              <TDH key={d.d2}>{d.d2}</TDH>
            </tr>
          ))}
        </tbody>
      </ScrollableTable>
    </TableContainer>
  );
};

const TH = styled.th`
  padding: 1rem;
  text-align: center;
  min-width: 10%;
  background-color: #7454ae;
  color: white;
  border: 5px solid #3c3c54;
  font-size: 1.3rem;
`;

const TD = styled.td`
  padding: 1rem;
  text-align: center;
  min-width: 10%;
  border: 5px solid #3c3c54;
  background: #7454ae;
  color: white;
  font-weight: bold;
  font-size: 1.1rem;
`;

const TDH = styled.td`
  padding: 1rem 4rem;
  text-align: center;
  min-width: 10%;
  border: 5px solid #3c3c54;
  background-color: #ffeb83;
  font-weight: bold;
  font-size: 1.1rem;
  color: #3c3c54;
`;

const ScrollableTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableContainer = styled.div`
  overflow-x: auto;
`;

const TDForSmallScreens = styled(TD)`
  display: none;
  @media (max-width: 600px) {
    display: table-cell;
  }
`;

const THForSmallScreens = styled(TH)`
  display: none;
  @media (max-width: 600px) {
    display: table-cell;
    opacity: 0;
  }
`;
