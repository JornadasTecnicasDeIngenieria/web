import styled from "@emotion/styled";

export const TableSorteoStands = () => {
  return (
    <TableContainer>
      <ScrollableTable>
        <tbody>
          <tr>
            <TableTitle colSpan={4}>Premios del Sorteo por Stands</TableTitle>
          </tr>

          <tr>
            <TableHeader colSpan={2}>14 de marzo</TableHeader>
            <TableHeader colSpan={2}>15 de marzo</TableHeader>
          </tr>

          <tr>
            <TableItem>Smartwatch</TableItem>
            <TableItem>1</TableItem>
            <TableItem>Smartwatch</TableItem>
            <TableItem>1</TableItem>
          </tr>

          <tr>
            <TableItem>Por determinar</TableItem>
            <TableItem>1</TableItem>
            <TableItem>Por determinar</TableItem>
            <TableItem>1</TableItem>
          </tr>

          <tr>
            <TableItem>Powerbank</TableItem>
            <TableItem>1</TableItem>
            <TableItem>Powerbank</TableItem>
            <TableItem>1</TableItem>
          </tr>
        </tbody>
      </ScrollableTable>
    </TableContainer >
  )
}

export const TableSorteoRedesSociales = () => {
  return (
    <TableContainer>
      <ScrollableTable>
        <tbody>
          <tr>
            <TableTitle colSpan={4}>Premios del Sorteo por Redes Sociales</TableTitle>
          </tr>

          <tr>
            <TableHeader colSpan={2}>Twitter</TableHeader>
            <TableHeader colSpan={2}>Instagram</TableHeader>
          </tr>

          <tr>
            <TableItem>Mando para PC</TableItem>
            <TableItem>1</TableItem>
            <TableItem>Earbuds Xiaomi</TableItem>
            <TableItem>1</TableItem>
          </tr>
        </tbody>
      </ScrollableTable>
    </TableContainer >
  )
}

export const TableVideojuegosArcade = () => {
  return (
    <TableContainer>
      <ScrollableTable>
        <tbody>
          <tr>
            <TableTitle colSpan={4}>Premios de la Competición de Videojuegos Arcade</TableTitle>
          </tr>

          <tr>
            <TableHeader colSpan={2}>14 de marzo: Tetris Classic</TableHeader>
            <TableHeader colSpan={2}>15 de marzo: Pac-man</TableHeader>
          </tr>

          <tr>
            <TableItem>Por determinar</TableItem>
            <TableItem>1</TableItem>
            <TableItem>Por determinar</TableItem>
            <TableItem>1</TableItem>
          </tr>
        </tbody>
      </ScrollableTable>
    </TableContainer >
  )
}

export const TableTrivial = () => {
  return (
    <TableContainer>
      <ScrollableTable>
        <tbody>
          <tr>
            <TableTitle colSpan={4}>Premios del Trivial</TableTitle>
          </tr>

          <tr>
            <TableHeader colSpan={2}>14 de marzo</TableHeader>
            <TableHeader colSpan={2}>15 de marzo</TableHeader>
          </tr>

          <tr>
            <TableItem>Earbuds Xiaomi</TableItem>
            <TableItem>1</TableItem>
            <TableItem>Earbuds Xiaomi</TableItem>
            <TableItem>1</TableItem>
          </tr>
        </tbody>
      </ScrollableTable>
    </TableContainer>
  )
}

export const TableBusquedaTesoro = () => {
  return (
    <TableContainer>
      <ScrollableTable>
        <tbody>
          <tr>
            <TableTitle colSpan={2}>Premios de la Búsqueda del Tesoro</TableTitle>
          </tr>

          <tr>
            <TableItem>Juegos de Mesa Variados</TableItem>
            <TableItem>4</TableItem>
          </tr>
        </tbody>
      </ScrollableTable>
    </TableContainer >
  )
}

export const TableConcursoStands = () => {
  return (
    <TableContainer>
      <ScrollableTable>
        <tbody>
          <tr>
            <TableTitle colSpan={2}>Premios del Sorteo de la Votación al Mejor Stand</TableTitle>
          </tr>

          <tr>
            <TableHeader colSpan={2}>15 de marzo</TableHeader>
          </tr>

          <tr>
            <TableItem>Altavoz Portátil</TableItem>
            <TableItem>1</TableItem>
          </tr>
        </tbody>
      </ScrollableTable>
    </TableContainer >
  )
}

export const TableLeagueOfLegends = () => {
  return (
    <TableContainer>
      <ScrollableTable>
        <tbody>
          <tr>
            <TableTitle colSpan={2}>Premios del Torneo de League of Legends</TableTitle>
          </tr>

          <tr>
            <TableItem>Primer Puesto</TableItem>
            <TableItem>Teclado Gaming + 20€ de RP</TableItem>
          </tr>

          <tr>
            <TableItem>Segundo Puesto</TableItem>
            <TableItem>Ratón Corsair + 10€ de RP</TableItem>
          </tr>
        </tbody>
      </ScrollableTable>
    </TableContainer >
  )
}

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
background-color: #FFEB83;
font-weight: bold;
font-size: 1.2rem;
color: #3c3c54
`;

const ScrollableTable = styled.table`
border-collapse: collapse;
`;

const TableContainer = styled.div`
overflow-x: auto;
`;