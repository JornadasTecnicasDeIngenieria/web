import styled from "@emotion/styled";

export const DayOnePonen = () => {
  return (
    <TableContainer>
      <ScrollableTable>
        <tbody>
          <tr>
            <TH_TITLE colSpan={3}>Martes 6</TH_TITLE>
          </tr>
          <tr>
            <th></th>
            <TH_SUB_TITLE>Aula 1.7</TH_SUB_TITLE>
            <TH_SUB_TITLE>Aula 1.13</TH_SUB_TITLE>
          </tr>
          <tr>
            <TD>11:55</TD>
            <TDT>
              Realidad de los datos en las entidades públicas: datos públicos vs
              datos privados
            </TDT>
            <TDT>Ingeniería y Mantenimiento en Grupo Bimbo</TDT>
          </tr>
          <tr>
            <TD>12:30</TD>
            <TDT>
              De Estudiante a Profesional: Transforma tus soft Skills en tu
              Mejor Activo
            </TDT>
            <TDT>Empleabilidad en el sector Aeronáutico</TDT>
          </tr>
          <tr>
            <TD>13:05</TD>
            <TDT>
              Implementación segura de ChatGPT en organizaciones con Azure
              OpenIA
            </TDT>
            <TDT>SERVICIOS COLEGIALES 4.0</TDT>
          </tr>

          <tr>
            <th></th>
            <TH_SUB_TITLE colSpan={3}>Aula 2.9</TH_SUB_TITLE>
          </tr>
          <tr>
            <TD>16:45</TD>
            <TDT colSpan={2}>
              Competencias personales y Tips para la realización de un buen CV
            </TDT>
          </tr>
          <tr>
            <TD>17:20</TD>
            <TDT colSpan={2}>La Autoprotección y la Seguridad en Eventos</TDT>
          </tr>
          <tr>
            <TD>17:55</TD>
            <TDT colSpan={2}>
              Acceso a los Cuerpos de Ingenieros de las Fuerzas
            </TDT>
          </tr>
        </tbody>
      </ScrollableTable>
    </TableContainer>
  );
};

export const DayTwoPonen = () => {
  return (
    <TableContainer>
      <ScrollableTable>
        <tbody>
          <tr>
            <TH_TITLE colSpan={3}>Miércoles 7</TH_TITLE>
          </tr>
          <tr>
            <th></th>
            <TH_SUB_TITLE>Aula 1.7</TH_SUB_TITLE>
            <TH_SUB_TITLE>Aula 1.13</TH_SUB_TITLE>
          </tr>
          <tr>
            <TD>11:55</TD>
            <TDT>
              Aplicación de las últimas metodologias y stacks tecnológicos en
              proyectos de innovación
            </TDT>
            <TDT>WORKSHOP INCABE 2024</TDT>
          </tr>
          <tr>
            <TD>12:30</TD>
            <TDT>
              Inteligencia artificial aplicada a la resolución de problemas
              complejos
            </TDT>
            <TDT>Ingenieria del mantenimiento</TDT>
          </tr>
          <tr>
            <TD>13:05</TD>
            <TDT>AgnosPCB</TDT>
            <TDT>NUEVOS RETOS PARA 2024: DIGITALIZACIÓN y DESCARBONIZACIÓN</TDT>
          </tr>

          <tr>
            <th></th>
            <TH_SUB_TITLE colSpan={3}>Aula 2.9</TH_SUB_TITLE>
          </tr>
          <tr>
            <TD>16:45</TD>
            <TDT colSpan={2}>
              Cómo desarrollar tu carrera profesional en los primeros
            </TDT>
          </tr>
          <tr>
            <TD>17:20</TD>
            <TDT colSpan={2}>
              Futuros profesionales: Líderes de sus proyectos
            </TDT>
          </tr>
          <tr>
            <TD>17:55</TD>
            <TDT colSpan={2}>
              Cómo ganar la olimpiada por empleo: Preparación para ingenieros
            </TDT>
          </tr>
        </tbody>
      </ScrollableTable>
    </TableContainer>
  );
};

const TH_TITLE = styled.th`
  padding: 1rem;
  text-align: center;
  background-color: #3c3c54;
  color: white;
  border: 3px solid #3c3c54;
  font-size: 1.9rem;
  @media (max-width: 800px) {
    font-size: 1rem;
  }
`;

const TH_SUB_TITLE = styled.th`
  padding: 1rem;
  text-align: center;
  background-color: #7454ae;
  color: white;
  border: 3px solid #3c3c54;
  font-size: 1.3rem;
  @media (max-width: 800px) {
    font-size: 1rem;
  }
`;

const TH = styled.th`
  padding: 1rem;
  text-align: center;
  background-color: #7454ae;
  color: white;
  border: 3px solid #3c3c54;
  font-size: 1.3rem;
`;

const ScrollableTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TD = styled.td`
  padding: 1rem;
  text-align: center;
  border: 3px solid #3c3c54;
  background: #7454ae;
  color: white;
  font-weight: bold;
  font-size: 1.1rem;
  @media (max-width: 800px) {
    font-size: 1rem;
  }
`;

const TDT = styled.td`
  padding: 1rem;
  text-align: center;
  border: 3px solid #3c3c54;
  background-color: #ffeb83;
  font-weight: bold;
  font-size: 1.1rem;
  min_width: 10%;
  color: #3c3c54;
  @media (max-width: 800px) {
    padding: 0.6rem;
    font-size: 0.9rem;
  }
`;

const TableContainer = styled.div`
  overflow-x: auto;
  width: 100%;
`;
