import styled from "@emotion/styled";

export const TableSorteoLogros = () => {
  return (
    <TableContainer>
      <ScrollableTable>
        <tbody>
          <tr>
            <TableTitle colSpan={4}>Premios del Sorteo por Logros</TableTitle>
          </tr>

          <tr>
            <TableHeader colSpan={2}>6 de febrero</TableHeader>
            <TableHeader colSpan={2}>7 de febrero</TableHeader>
          </tr>

          <tr>
            <TableItem colSpan={2}>Por determinar</TableItem>
            <TableItem colSpan={2}>Por determinar</TableItem>
          </tr>
        </tbody>
      </ScrollableTable>
    </TableContainer>
  );
};

export const TableSorteoStands = () => {
  return (
    <TableContainer>
      <ScrollableTable>
        <tbody>
          <tr>
            <TableTitle colSpan={4}>Premios del Sorteo por Stands</TableTitle>
          </tr>

          <tr>
            <TableHeader colSpan={2}>6 de febrero</TableHeader>
            <TableHeader colSpan={2}>7 de febrero</TableHeader>
          </tr>

          <tr>
            <TableItem colSpan={2}>Por determinar</TableItem>
            <TableItem colSpan={2}>Por determinar</TableItem>
          </tr>
        </tbody>
      </ScrollableTable>
    </TableContainer>
  );
};

export const TableSorteoRedesSociales = () => {
  return (
    <TableContainer>
      <ScrollableTable>
        <tbody>
          <tr>
            <TableTitle colSpan={4}>
              Premios del Sorteo por Redes Sociales
            </TableTitle>
          </tr>

          <tr>
            <TableHeader colSpan={2}>Twitter</TableHeader>
            <TableHeader colSpan={2}>Instagram</TableHeader>
          </tr>

          <tr>
            <TableItem colSpan={2}>Por determinar</TableItem>
            <TableItem colSpan={2}>Por determinar</TableItem>
          </tr>
        </tbody>
      </ScrollableTable>
    </TableContainer>
  );
};

export const TableCompeticionArcade = () => {
  return (
    <TableContainer>
      <ScrollableTable>
        <tbody>
          <tr>
            <TableTitle colSpan={4}>
              Premios de la Competición Arcade
            </TableTitle>
          </tr>

          <tr>
            <TableItem colSpan={4}>Por determinar</TableItem>
          </tr>
        </tbody>
      </ScrollableTable>
    </TableContainer>
  );
};

export const TableTrivial = () => {
  return (
    <TableContainer>
      <ScrollableTable>
        <tbody>
          <tr>
            <TableTitle colSpan={4}>Premios de los Trivials</TableTitle>
          </tr>

          <tr>
            <TableHeader colSpan={2}>6 de febrero</TableHeader>
            <TableHeader colSpan={2}>7 de febrero</TableHeader>
          </tr>

          <tr>
            <TableItem colSpan={2}>Por determinar</TableItem>
            <TableItem colSpan={2}>Por determinar</TableItem>
          </tr>
        </tbody>
      </ScrollableTable>
    </TableContainer>
  );
};

export const TableBusquedaTesoro = () => {
  return (
    <TableContainer>
      <ScrollableTable>
        <tbody>
          <tr>
            <TableTitle colSpan={2}>
              Premios de la Búsqueda del Tesoro
            </TableTitle>
          </tr>

          <tr>
            <TableItem colSpan={2}>Por determinar</TableItem>
          </tr>
        </tbody>
      </ScrollableTable>
    </TableContainer>
  );
};

export const TableEscapeRoom = () => {
  return (
    <TableContainer>
      <ScrollableTable>
        <tbody>
          <tr>
            <TableTitle colSpan={2}>Premios del Escape Room</TableTitle>
          </tr>

          <tr>
            <TableItem colSpan={2}>Por determinar</TableItem>
          </tr>
        </tbody>
      </ScrollableTable>
    </TableContainer>
  );
};

export const TableConcursoStands = () => {
  return (
    <TableContainer>
      <ScrollableTable>
        <tbody>
          <tr>
            <TableTitle colSpan={2}>
              Premios del Sorteo de la Votación al Mejor Stand
            </TableTitle>
          </tr>

          <tr>
            <TableItem colSpan={2}>Por determinar</TableItem>
          </tr>
        </tbody>
      </ScrollableTable>
    </TableContainer>
  );
};

export const TableVideojuegos = () => {
  return (
    <TableContainer>
      <ScrollableTable>
        <tbody>
          <tr>
            <TableTitle colSpan={2}>
              Premios del Torneo de Videojuegos
            </TableTitle>
          </tr>

          <tr>
            <TableItem colSpan={2}>Por determinar</TableItem>
          </tr>
        </tbody>
      </ScrollableTable>
    </TableContainer>
  );
};

export const TableHackaton = () => {
  return (
    <TableContainer>
      <ScrollableTable>
        <tbody>
          <tr>
            <TableTitle colSpan={2}>Premios del Hackatón</TableTitle>
          </tr>

          <tr>
            <TableItem colSpan={2}>Por determinar</TableItem>
          </tr>
        </tbody>
      </ScrollableTable>
    </TableContainer>
  );
};

export const TableSesionRol = () => {
  return (
    <TableContainer>
      <ScrollableTable>
        <tbody>
          <tr>
            <TableTitle colSpan={2}>Premios de la Sesión de Rol</TableTitle>
          </tr>

          <tr>
            <TableItem colSpan={2}>Por determinar</TableItem>
          </tr>
        </tbody>
      </ScrollableTable>
    </TableContainer>
  );
};

const TableTitle = styled.th`
  padding: 1rem;
  text-align: center;
  min-width: 10%;
  background-color: #7454ae;
  color: white;
  border: 5px solid #3c3c54;
  font-size: 1.3rem;
`;

const TableHeader = styled.td`
  padding: 1rem;
  text-align: center;
  min-width: 10%;
  background-color: #7454ae;
  color: white;
  border: 5px solid #3c3c54;
  font-size: 1.3rem;
`;

const TableItem = styled.td`
  padding: 1rem 2rem;
  text-align: center;
  min-width: 10%;
  border: 5px solid #3c3c54;
  background-color: #ffeb83;
  font-weight: bold;
  font-size: 1.2rem;
  color: #3c3c54;
`;

const ScrollableTable = styled.table`
  border-collapse: collapse;
`;

const TableContainer = styled.div`
  overflow-x: auto;
`;
