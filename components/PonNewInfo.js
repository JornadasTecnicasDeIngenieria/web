import styled from "@emotion/styled";

export const DayOnePonen = () => {
  return (
    <TableContainer>
      <ScrollableTable>
        <tbody>
          <tr>
            <th></th>
            <TH_SUB_TITLE colSpan={2}>Aula 1.7</TH_SUB_TITLE>
            <TH_SUB_TITLE colSpan={2}>Aula 1.13</TH_SUB_TITLE>
          </tr>
          <tr>
            <TD>11:55</TD>
            <TDT>
              Realidad de los datos en las entidades públicas: datos públicos vs
              datos privados 
            </TDT>
            <TDT>
              NTT DATA
            </TDT>
            <TDT>Ingeniería y Mantenimiento en Grupo Bimbo - Metrotenerife</TDT>
            <TDT>
              Metrotenerife
            </TDT>
          </tr>
          <tr>
            <TD>12:30</TD>
            <TDT>
              De Estudiante a Profesional: Transforma tus soft Skills en tu
              Mejor Activo
            </TDT>
            <TDT>
              Codebay Innovation S.L.
            </TDT>
            <TDT>Empleabilidad en el sector Aeronáutico</TDT>
            <TDT>
              Binter
            </TDT>
          </tr>
          <tr>
            <TD>13:05</TD>
            <TDT>
              Implementación segura de ChatGPT en organizaciones con Azure
              OpenIA 
            </TDT>
            <TDT>
              Intelequia Technologies SL
            </TDT>
            <TDT>SERVICIOS COLEGIALES 4.0</TDT>
            <TDT>
              COITITF
            </TDT>
          </tr>

          <tr>
            <th></th>
            <TH_SUB_TITLE colSpan={4}>Aula 2.9</TH_SUB_TITLE>
          </tr>
          <tr>
            <TD>16:45</TD>
            <TDT colSpan={3}>
              Competencias personales y Tips para la realización de un buen CV
            </TDT>
            <TDT>
              Laberit Sistemas
            </TDT>
            
          </tr>
          <tr>
            <TD>17:20</TD>
            <TDT colSpan={3}>
              La Autoprotección y la Seguridad en Eventos,
              S.L.P.
            </TDT>
            <TDT>
              INSITECA INGENIEROS
            </TDT>
          </tr>
          <tr>
            <TD>17:55</TD>
            <TDT colSpan={3}>
              Acceso a los Cuerpos de Ingenieros de las Fuerzas Armadas
            </TDT>
            <TDT>
              Ejercito de Tierra
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
            <th></th>
            <TH_SUB_TITLE colSpan={2}>Aula 1.7</TH_SUB_TITLE>
            <TH_SUB_TITLE colSpan={2}>Aula 1.13</TH_SUB_TITLE>
          </tr>
          <tr>
            <TD>11:55</TD>
            <TDT>
              Aplicación de las últimas metodologias y stacks tecnológicos en
              proyectos de innovación 
            </TDT>
            <TDT>
              Acid Tango SL
            </TDT>
            <TDT>WORKSHOP INCABE 2024</TDT>
            <TDT>
              INCABE
            </TDT>
          </tr>
          <tr>
            <TD>12:30</TD>
            <TDT>
              Inteligencia artificial aplicada a la resolución de problemas
              complejos
            </TDT>
            <TDT>
              Kaizten Analytics S.L.
            </TDT>
            <TDT>Ingenieria del mantenimiento</TDT>
            <TDT>
              Metrotenerife
            </TDT>
          </tr>
          <tr>
            <TD>13:05</TD>
            <TDT>AgnosPCB: Moldeando una idea...</TDT>
            <TDT>
              AgnosPCB
            </TDT>
            <TDT>
              NUEVOS RETOS PARA 2024: DIGITALIZACIÓN y DESCARBONIZACIÓN
            </TDT>
            <TDT>
              BALTEN
            </TDT>
          </tr>

          <tr>
            <th></th>
            <TH_SUB_TITLE colSpan={4}>Aula 2.9</TH_SUB_TITLE>
          </tr>
          <tr>
            <TD>16:45</TD>
            <TDT colSpan={3}>
              Cómo desarrollar tu carrera profesional en los primeros años
            </TDT>
            <TDT>
              ARQUIMEA Research Center
            </TDT>
          </tr>
          <tr>
            <TD>17:20</TD>
            <TDT colSpan={3}>
              Futuros profesionales: Líderes de sus proyectos
            </TDT>
            <TDT>
              CEOE Tenerife
            </TDT>
          </tr>
          <tr>
            <TD>17:55</TD>
            <TDT colSpan={3}>
              Cómo ganar la olimpiada por empleo: Preparación para ingenieros
            </TDT>
            <TDT>
              Secret Source Technology S.L.
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
