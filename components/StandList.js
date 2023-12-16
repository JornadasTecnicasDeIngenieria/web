import styled from "@emotion/styled";
import Image from "next/image";

const SvgData = ({ ingenieria, value }) => {
  const si = `/images/stands/ingenierias/${ingenieria}.svg`;
  const no = `/images/stands/ingenierias/${ingenieria}_no.svg`;

  return <StyledImage src={value ? si : no} alt={ingenieria} />;
};

const Ingenieras = ({ data }) => {
  const divStyle = {
    position: "relative",
    width: "100%",
    height: "20px",
  };

  return (
    <td>
      {data.map((info) => (
        <SvgData
          ingenieria={info.ingenieria}
          value={info.value}
          key={info.ingenieria + info.value}
        />
      ))}
    </td>
  );
};

const Practicas = ({ prac }) => {
  return <TDH>{prac ? "Sí" : "No"}</TDH>;
};

export const FirstDayStandList = ({ content }) => {
  return (
    <TableContainer>
      <ScrollableTable>
        <tbody>
          <tr>
            <th></th>
            <TH colSpan={4}>Martes 6 de febrero</TH>
          </tr>
          <tr>
            <th></th>
            <TH style={{ width: "66%" }}>Empresa</TH>
            <TH style={{ width: "33%" }}>Ingenierías</TH>
            <TH style={{ width: "1%" }}> Prácticas</TH>
          </tr>
          <tr>
            <TD>S00</TD>
            <TDH colSpan={3}>STAND DE INFORMACIÓN</TDH>
          </tr>
          {content.map((d) => (
            <tr key={d.stand + d.d1}>
              <TD key={d.stand}>{d.stand}</TD>
              <TDH key={d.d1}>{d.d1}</TDH>
              <Ingenieras data={d.d1_ingenierias} />
              <Practicas prac={d.d1_practicas} />
            </tr>
          ))}
        </tbody>
      </ScrollableTable>
    </TableContainer>
  );
};

export const SecondDayStandList = ({ content }) => {
  return (
    <TableContainer>
      <ScrollableTable>
        <tbody>
          <tr>
            <th></th>
            <TH colSpan={4}>Miércoles 7 de febrero</TH>
          </tr>
          <tr>
            <th></th>
            <TH style={{ width: "66%" }}>Empresa</TH>
            <TH style={{ width: "33%" }}>Ingenierías</TH>
            <TH style={{ width: "1%" }}> Prácticas</TH>
          </tr>
          <tr>
            <TD>S00</TD>
            <TDH colSpan={3}>Stand de información</TDH>
          </tr>
          {content.map((d) => (
            <tr key={d.stand + d.d2}>
              <TD key={d.stand}>{d.stand}</TD>
              <TDH key={d.d2}>{d.d2}</TDH>
              <Ingenieras data={d.d2_ingenierias} />
              <Practicas prac={d.d2_practicas} />
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
  @media (max-width: 768px) {
    font-size: 1rem;
  }
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

  @media (max-width: 768px) {
    font-size: 1rem;
  }
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

  @media (max-width: 768px) {
    padding: 0.6rem;
    font-size: 0.9rem;
  }
`;

const ScrollableTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableContainer = styled.div`
  overflow-x: auto;
`;

const StyledImage = styled.img`
  width: 25%;
  height: auto;
  @media (max-width: 768px) {
    width: 50%;
    height: auto;
  }
`;
