import styled from "@emotion/styled";
import { Opacity } from "@mui/icons-material";

export const TableSorteoStands = () => {
  return (
    <TableContainer>
      <ScrollableTable>
        <tbody>
          <tr>
            <TableTitle colSpan={4}>Premios del Sorteo por Stands</TableTitle>
          </tr>

          <tr>
            <TableHeader colSpan={2}>10 de diciembre</TableHeader>
            <TableHeader colSpan={2}>11 de diciembre</TableHeader>
          </tr>

          <tr>
            <TableItem colSpan={2}>Meta Quest 3S</TableItem>
            <TableItem colSpan={2}>Ipad de última generación</TableItem>
          </tr>

          <tr>
            <TableItem colSpan={2}>Silla gaming</TableItem>
            <TableItem colSpan={2}>Switch Lite + Animal Crossing</TableItem>
          </tr>

          <tr>
            <TableItem colSpan={2}>Teclado Krom Mecánico</TableItem>
            <TableItem colSpan={2}>Teclado Krom Mecánico</TableItem>
          </tr>

          <tr>
            <TableItem colSpan={2}>Auriculares Sony</TableItem>
            <TableItem colSpan={2}>Auriculares Sony</TableItem>
          </tr>

          <tr>
            <TableItem colSpan={2}>Ratón Corsair</TableItem>
            <TableItem colSpan={2}>Ratón Corsair</TableItem>
          </tr>

          <tr>
            <TableItem colSpan={2}>Altavoz LG XBOOM</TableItem>
            <TableItem colSpan={2}>Altavoz LG XBOOM</TableItem>
          </tr>

          <tr>
            <TableItem colSpan={2}>Xiaomi SmartBand 8</TableItem>
            <TableItem colSpan={2}>Xiaomi SmartBand 8</TableItem>
          </tr>
        </tbody>
      </ScrollableTable>
    </TableContainer>
  );
};

export const TableSorteoPrevioRedesSociales = () => {
  return (
    <TableContainer>
      <ScrollableTable>
        <tbody>
          <tr>
            <TableTitle colSpan={4}>
              Premios del Sorteo Previo al evento por Redes Sociales
            </TableTitle>
          </tr>

          <tr>
            <TableHeader colSpan={2}>TikTok</TableHeader>
            <TableHeader colSpan={2}>Instagram</TableHeader>
          </tr>

          <tr>
            <TableItem colSpan={2}>Cámara Instax</TableItem>
            <TableItem colSpan={2}>Cámara Instax</TableItem>
          </tr>
        </tbody>
      </ScrollableTable>
    </TableContainer>
  );
};

export const TableSorteoDuranteRedesSociales = () => {
  return (
    <TableContainer>
      <ScrollableTable>
        <tbody>
          <tr>
            <TableTitle colSpan={4}>
              Premios del Sorteo Durante el evento por Redes Sociales
            </TableTitle>
          </tr>

          <tr>
            <TableHeader colSpan={2}>TikTok</TableHeader>
            <TableHeader colSpan={2}>Instagram</TableHeader>
          </tr>

          <tr>
            <TableItem colSpan={2}>???</TableItem>
            <TableItem colSpan={2}>???</TableItem>
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
            <th></th>
            <TableTitle colSpan={3}>
              Premios de la Competición Arcade
            </TableTitle>
          </tr>
          <tr>
            <th></th>
            <TableHeader colSpan={1}>Tetris</TableHeader>
            <TableHeader colSpan={1}>WhyGod?</TableHeader>
          </tr>

          <tr>
            <TableTitle colSpan={1}>1º</TableTitle>
            <TableItem colSpan={1}>Consola retro</TableItem>
            <TableItem colSpan={1}>Consola retro</TableItem>
          </tr>
          <tr>
            <TableTitle colSpan={1}>2º</TableTitle>
            <TableItem colSpan={1}>Tamagotchi</TableItem>
            <TableItem colSpan={1}>Tamagotchi</TableItem>
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
            <TableItem colSpan={4}>Merchandising JTI</TableItem>
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
            <TableItem colSpan={2}>4 Juegos de mesa tipo Escape Room</TableItem>
          </tr>
        </tbody>
      </ScrollableTable>
    </TableContainer>
  );
};

export const TableHorarioEscapeRoom = () => {
  return (
    <TableContainer>
      <ScrollableTable>
        <tbody>
          <tr>
            <TableTitle colSpan={2}>Horario</TableTitle>
          </tr>

          <tr>
            <TableItem colSpan={2}>10:00 - 11:00</TableItem>
          </tr>
          <tr>
            <TableItem colSpan={2}>12:00 - 13:00</TableItem>
          </tr>
          <tr>
            <TableItem colSpan={2}>14:00 - 15:00</TableItem>
          </tr>
          <tr>
            <TableItem colSpan={2}>16:00 - 17:00</TableItem>
          </tr>
          <tr>
            <TableItem colSpan={2}>18:00 - 19:00</TableItem>
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
            <TableItem colSpan={2}></TableItem>
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
            <th></th>
            <TableTitle colSpan={2}>
              Premios del Torneo de Videojuegos
            </TableTitle>
          </tr>
          <tr>
            <th></th>
            <TableHeader colSpan={1}>LoL</TableHeader>
            <TableHeader colSpan={1}>TFT</TableHeader>
          </tr>

          <tr>
            <TableTitle colSpan={1}>1º</TableTitle>
            <TableItem colSpan={1}>20€ de RP</TableItem>
            <TableItem colSpan={1}>20€ de RP</TableItem>
          </tr>
          <tr>
            <TableTitle colSpan={1}>2º</TableTitle>
            <TableItem colSpan={1}>10€ de RP</TableItem>
            <TableItem colSpan={1}>10€ de RP</TableItem>
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
