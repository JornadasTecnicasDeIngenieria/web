import styled from "@emotion/styled";
import Link from 'next/link'
import { Container } from "@mui/material";
import { DatosPonencias } from "data/ponencias";

export const TableMartes = () => {
  return (
    <TableContainer>
      <ScrollableTable>

        <tr>
          <TDH></TDH>
          <TH>Sala Stephanie Shirley<br /><small>Aula 1.13</small><br /><a href="https://meet.google.com/ify-draf-ggo" target="_blank norreferer">Ver Online</a></TH>
          <TH>Sala Frances Elizabeth Allen<br /><small>Aula 3.6</small><br /><a href="https://meet.google.com/rnm-uekq-uxt" target="_blank norreferer">Ver Online</a></TH>
          <TH>Sala Pilar Careaga Basabe<br /><small>Aula 2.6</small><br /><a href="https://meet.google.com/fuc-vpxd-drf" target="_blank norreferer">Ver Online</a></TH>
          <TH>Sala Margaret Heafield Hamilton<br /><small>Aula 1.7</small><br /><a href="https://meet.google.com/stb-wkac-tib" target="_blank norreferer">Ver Online</a></TH>
        </tr>

        <tr>
          <TDH>11:00 - 11:35</TDH>
          <Link href={`/ponencias/${DatosPonencias["M11"].id}`}>
            <TD>{DatosPonencias["M11"].titulo !== "" ? DatosPonencias["M11"].titulo : DatosPonencias["M11"].empresa}</TD>
          </Link>
          <Link href={`/ponencias/${DatosPonencias["M21"].id}`}>
            <TD>{DatosPonencias["M21"].titulo !== "" ? DatosPonencias["M21"].titulo : DatosPonencias["M21"].empresa}</TD>
          </Link>
          <Link href={`/ponencias/${DatosPonencias["M31"].id}`}>
            <TD>{DatosPonencias["M31"].titulo !== "" ? DatosPonencias["M31"].titulo : DatosPonencias["M31"].empresa}</TD>
          </Link>
          <Link href={`/ponencias/${DatosPonencias["M41"].id}`}>
            <TD>{DatosPonencias["M41"].titulo !== "" ? DatosPonencias["M41"].titulo : DatosPonencias["M41"].empresa}</TD>
          </Link>
        </tr>

        <tr>
          <TDH>11:35 - 12:10</TDH>
          <Link href={`/ponencias/${DatosPonencias["M12"].id}`}>
            <TD>{DatosPonencias["M12"].titulo !== "" ? DatosPonencias["M12"].titulo : DatosPonencias["M12"].empresa}</TD>
          </Link>
          <Link href={`/ponencias/${DatosPonencias["M22"].id}`}>
            <TD>{DatosPonencias["M22"].titulo !== "" ? DatosPonencias["M22"].titulo : DatosPonencias["M22"].empresa}</TD>
          </Link>
          <Link href={`/ponencias/${DatosPonencias["M32"].id}`}>
            <TD>{DatosPonencias["M32"].titulo !== "" ? DatosPonencias["M32"].titulo : DatosPonencias["M32"].empresa}</TD>
          </Link>
          <Link href={`/ponencias/${DatosPonencias["M42"].id}`}>
            <TD>{DatosPonencias["M42"].titulo !== "" ? DatosPonencias["M42"].titulo : DatosPonencias["M42"].empresa}</TD>
          </Link>
        </tr>

        <tr>
          <TDH>12:10 - 12:45</TDH>
          <Link href={`/ponencias/${DatosPonencias["M13"].id}`}>
            <TD>{DatosPonencias["M13"].titulo !== "" ? DatosPonencias["M13"].titulo : DatosPonencias["M13"].empresa}</TD>
          </Link>
          <Link href={`/ponencias/${DatosPonencias["M23"].id}`}>
            <TD>{DatosPonencias["M23"].titulo !== "" ? DatosPonencias["M23"].titulo : DatosPonencias["M23"].empresa}</TD>
          </Link>
          <Link href={`/ponencias/${DatosPonencias["M33"].id}`}>
            <TD>{DatosPonencias["M33"].titulo !== "" ? DatosPonencias["M33"].titulo : DatosPonencias["M33"].empresa}</TD>
          </Link>
          <Link href={`/ponencias/${DatosPonencias["M43"].id}`}>
            <TD>{DatosPonencias["M43"].titulo !== "" ? DatosPonencias["M43"].titulo : DatosPonencias["M43"].empresa}</TD>
          </Link>
        </tr>

        <tr>
          <TDH>12:45 - 13:00</TDH>
          <TDR>Trivial</TDR>
          <TDR>Trivial</TDR>
          <TDR>Trivial</TDR>
          <TDR>Trivial</TDR>
        </tr>

        <tr>
          <TDH>13:00 - 14:30</TDH>
          <TDR>Almuerzo</TDR>
          <TDR>Almuerzo</TDR>
          <TDR>Almuerzo</TDR>
          <TDR>Almuerzo</TDR>
        </tr>

        <tr>
          <TDH>14:30 - 15:05</TDH>
          <Link href={`/ponencias/${DatosPonencias["M16"].id}`}>
            <TD>{DatosPonencias["M16"].titulo !== "" ? DatosPonencias["M16"].titulo : DatosPonencias["M16"].empresa}</TD>
          </Link>
          <Link href={`/ponencias/${DatosPonencias["M26"].id}`}>
            <TD>{DatosPonencias["M26"].titulo !== "" ? DatosPonencias["M26"].titulo : DatosPonencias["M26"].empresa}</TD>
          </Link>
          <Link href={`/ponencias/${DatosPonencias["M36"].id}`}>
            <TD>{DatosPonencias["M36"].titulo !== "" ? DatosPonencias["M36"].titulo : DatosPonencias["M36"].empresa}</TD>
          </Link>
          <Link href={`/ponencias/${DatosPonencias["M46"].id}`}>
            <TD>{DatosPonencias["M46"].titulo !== "" ? DatosPonencias["M46"].titulo : DatosPonencias["M46"].empresa}</TD>
          </Link>
        </tr>

        <tr>
          <TDH>15:05 - 15:40</TDH>
          <Link href={`/ponencias/${DatosPonencias["M17"].id}`}>
            <TD>{DatosPonencias["M17"].titulo !== "" ? DatosPonencias["M17"].titulo : DatosPonencias["M17"].empresa}</TD>
          </Link>
          <Link href={`/ponencias/${DatosPonencias["M27"].id}`}>
            <TD>{DatosPonencias["M27"].titulo !== "" ? DatosPonencias["M27"].titulo : DatosPonencias["M27"].empresa}</TD>
          </Link>
          <Link href={`/ponencias/${DatosPonencias["M37"].id}`}>
            <TD>{DatosPonencias["M37"].titulo !== "" ? DatosPonencias["M37"].titulo : DatosPonencias["M37"].empresa}</TD>
          </Link>
          <Link href={`/ponencias/${DatosPonencias["M47"].id}`}>
            <TD>{DatosPonencias["M47"].titulo !== "" ? DatosPonencias["M47"].titulo : DatosPonencias["M47"].empresa}</TD>
          </Link>
        </tr>

        <tr>
          <TDH>15:40 - 16:15</TDH>
          <TDR>Descanso y Sorteos</TDR>
          <TDR>Descanso y Sorteos</TDR>
          <TDR>Descanso y Sorteos</TDR>
          <TDR>Descanso y Sorteos</TDR>
        </tr>

        <tr>
          <TDH>16:15</TDH>
          <Link href={`/ponencias/${DatosPonencias["M19"].id}`}>
            <TD>{DatosPonencias["M19"].titulo !== "" ? DatosPonencias["M19"].titulo : DatosPonencias["M19"].empresa}</TD>
          </Link>
          <Link href={`/ponencias/${DatosPonencias["M29"].id}`}>
            <TD>{DatosPonencias["M29"].titulo !== "" ? DatosPonencias["M29"].titulo : DatosPonencias["M29"].empresa}</TD>
          </Link>
          <Link href={`/ponencias/${DatosPonencias["M39"].id}`}>
            <TD>{DatosPonencias["M39"].titulo !== "" ? DatosPonencias["M39"].titulo : DatosPonencias["M39"].empresa}</TD>
          </Link>
          <Link href={`/ponencias/${DatosPonencias["M49"].id}`}>
            <TD>{DatosPonencias["M49"].titulo !== "" ? DatosPonencias["M49"].titulo : DatosPonencias["M49"].empresa}</TD>
          </Link>
        </tr>

      </ScrollableTable>
    </TableContainer>
  )
}

export const TableMiercoles = () => {
  return (
    <TableContainer>
      <ScrollableTable>

        <tr>
          <TH></TH>
          <TH>Sala Stephanie Shirley<br /><small>Aula 1.13</small><br /><a href="https://meet.google.com/ify-draf-ggo" target="_blank norreferer">Ver Online</a></TH>
          <TH>Sala Frances Elizabeth Allen<br /><small>Aula 3.6</small><br /><a href="https://meet.google.com/rnm-uekq-uxt" target="_blank norreferer">Ver Online</a></TH>
          <TH>Sala Pilar Careaga Basabe<br /><small>Aula 2.6</small><br /><a href="https://meet.google.com/fuc-vpxd-drf" target="_blank norreferer">Ver Online</a></TH>
          <TH>Sala Margaret Heafield Hamilton<br /><small>Aula 1.7</small><br /><a href="https://meet.google.com/stb-wkac-tib" target="_blank norreferer">Ver Online</a></TH>
        </tr>

        <tr>
          <TDH>11:00 - 11:35</TDH>
          <Link href={`/ponencias/${DatosPonencias["X11"].id}`}>
            <TD>{DatosPonencias["X11"].titulo !== "" ? DatosPonencias["X11"].titulo : DatosPonencias["X11"].empresa}</TD>
          </Link>
          <Link href={`/ponencias/${DatosPonencias["X21"].id}`}>
            <TD>{DatosPonencias["X21"].titulo !== "" ? DatosPonencias["X21"].titulo : DatosPonencias["X21"].empresa}</TD>
          </Link>
          <Link href={`/ponencias/${DatosPonencias["X31"].id}`}>
            <TD>{DatosPonencias["X31"].titulo !== "" ? DatosPonencias["X31"].titulo : DatosPonencias["X31"].empresa}</TD>
          </Link>
          <Link href={`/ponencias/${DatosPonencias["X41"].id}`}>
            <TD>{DatosPonencias["X41"].titulo !== "" ? DatosPonencias["X41"].titulo : DatosPonencias["X41"].empresa}</TD>
          </Link>
        </tr>

        <tr>
          <TDH>11:35 - 12:10</TDH>
          <Link href={`/ponencias/${DatosPonencias["X12"].id}`}>
            <TD>{DatosPonencias["X12"].titulo !== "" ? DatosPonencias["X12"].titulo : DatosPonencias["X12"].empresa}</TD>
          </Link>
          <Link href={`/ponencias/${DatosPonencias["X22"].id}`}>
            <TD>{DatosPonencias["X22"].titulo !== "" ? DatosPonencias["X22"].titulo : DatosPonencias["X22"].empresa}</TD>
          </Link>
          <Link href={`/ponencias/${DatosPonencias["X32"].id}`}>
            <TD>{DatosPonencias["X32"].titulo !== "" ? DatosPonencias["X32"].titulo : DatosPonencias["X32"].empresa}</TD>
          </Link>
          <Link href={`/ponencias/${DatosPonencias["X42"].id}`}>
            <TD>{DatosPonencias["X42"].titulo !== "" ? DatosPonencias["X42"].titulo : DatosPonencias["X42"].empresa}</TD>
          </Link>
        </tr>

        <tr>
          <TDH>12:10 - 12:45</TDH>
          <Link href={`/ponencias/${DatosPonencias["X13"].id}`}>
            <TD>{DatosPonencias["X13"].titulo !== "" ? DatosPonencias["X13"].titulo : DatosPonencias["X13"].empresa}</TD>
          </Link>
          <Link href={`/ponencias/${DatosPonencias["X23"].id}`}>
            <TD>{DatosPonencias["X23"].titulo !== "" ? DatosPonencias["X23"].titulo : DatosPonencias["X23"].empresa}</TD>
          </Link>
          <Link href={`/ponencias/${DatosPonencias["X33"].id}`}>
            <TD>{DatosPonencias["X33"].titulo !== "" ? DatosPonencias["X33"].titulo : DatosPonencias["X33"].empresa}</TD>
          </Link>
          <Link href={`/ponencias/${DatosPonencias["X43"].id}`}>
            <TD>{DatosPonencias["X43"].titulo !== "" ? DatosPonencias["X43"].titulo : DatosPonencias["X43"].empresa}</TD>
          </Link>
        </tr>

        <tr>
          <TDH>12:45 - 13:00</TDH>
          <TDR>Trivial</TDR>
          <TDR>Trivial</TDR>
          <TDR>Trivial</TDR>
          <TDR>Trivial</TDR>
        </tr>

        <tr>
          <TDH>13:00 - 14:30</TDH>
          <TDR>Almuerzo</TDR>
          <TDR>Almuerzo</TDR>
          <TDR>Almuerzo</TDR>
          <TDR>Almuerzo</TDR>
        </tr>

        <tr>
          <TDH>14:30 - 15:05</TDH>
          <Link href={`/ponencias/${DatosPonencias["X16"].id}`}>
            <TD>{DatosPonencias["X16"].titulo !== "" ? DatosPonencias["X16"].titulo : DatosPonencias["X16"].empresa}</TD>
          </Link>
          <Link href={`/ponencias/${DatosPonencias["X26"].id}`}>
            <TD>{DatosPonencias["X26"].titulo !== "" ? DatosPonencias["X26"].titulo : DatosPonencias["X26"].empresa}</TD>
          </Link>
          <Link href={`/ponencias/${DatosPonencias["X36"].id}`}>
            <TD>{DatosPonencias["X36"].titulo !== "" ? DatosPonencias["X36"].titulo : DatosPonencias["X36"].empresa}</TD>
          </Link>
          <Link href={`/ponencias/${DatosPonencias["X46"].id}`}>
            <TD>{DatosPonencias["X46"].titulo !== "" ? DatosPonencias["X46"].titulo : DatosPonencias["X46"].empresa}</TD>
          </Link>
        </tr>

        <tr>
          <TDH>15:05 - 15:40</TDH>
          <Link href={`/ponencias/${DatosPonencias["X17"].id}`}>
            <TD>{DatosPonencias["X17"].titulo !== "" ? DatosPonencias["X17"].titulo : DatosPonencias["X17"].empresa}</TD>
          </Link>
          <Link href={`/ponencias/${DatosPonencias["X27"].id}`}>
            <TD>{DatosPonencias["X27"].titulo !== "" ? DatosPonencias["X27"].titulo : DatosPonencias["X27"].empresa}</TD>
          </Link>
          <Link href={`/ponencias/${DatosPonencias["X37"].id}`}>
            <TD>{DatosPonencias["X37"].titulo !== "" ? DatosPonencias["X37"].titulo : DatosPonencias["X37"].empresa}</TD>
          </Link>
          <Link href={`/ponencias/${DatosPonencias["X47"].id}`}>
            <TD>{DatosPonencias["X47"].titulo !== "" ? DatosPonencias["X47"].titulo : DatosPonencias["X47"].empresa}</TD>
          </Link>
        </tr>

        <tr>
          <TDH>15:40 - 16:15</TDH>
          <TDR>Descanso y Sorteos</TDR>
          <TDR>Descanso y Sorteos</TDR>
          <TDR>Descanso y Sorteos</TDR>
          <TDR>Descanso y Sorteos</TDR>
        </tr>

        <tr>
          <TDH>16:15</TDH>
          <Link href={`/ponencias/mesa-redonda-tecnologias`}>
            <TD>{DatosPonencias["X19"].titulo !== "" ? DatosPonencias["X19"].titulo : DatosPonencias["X19"].empresa}</TD>
          </Link>
          <Link href={`/ponencias/mesa-redonda-tecnologias`}>
            <TD>{DatosPonencias["X29"].titulo !== "" ? DatosPonencias["X29"].titulo : DatosPonencias["X29"].empresa}</TD>
          </Link>
          <Link href={`/ponencias/mesa-redonda-tecnologias`}>
            <TD>{DatosPonencias["X39"].titulo !== "" ? DatosPonencias["X39"].titulo : DatosPonencias["X39"].empresa}</TD>
          </Link>
          <Link href={`/ponencias/mesa-redonda-tecnologias`}>
            <TD>{DatosPonencias["X49"].titulo !== "" ? DatosPonencias["X49"].titulo : DatosPonencias["X49"].empresa}</TD>
          </Link>
        </tr>

      </ScrollableTable>
    </TableContainer>
  )
}

/*export const TableSorteos = () => {
  return (
    <TableContainer>
      <ScrollableTable>

        <tr>
          <THMH colSpan={6}>Premios del Sorteo del día</THMH>
        </tr>

        <tr>
          <TDRH colSpan={3}>Primer Día</TDRH>
          <TDRH colSpan={3}>Segundo Día</TDRH>
        </tr>

        <tr>
          <TDIH><AlignedDiv>Sorteos Individuales</AlignedDiv></TDIH>
          <TTD colSpan={2}>
            <Table width="100%">
              <tr>
                <TDIH>Vuelo para dos personas</TDIH>
                <TDIH>1</TDIH>
              </tr>
              <tr>
                <TDIH>Google Nest Mini</TDIH>
                <TDIH>2</TDIH>
              </tr>
              <tr>
                <TDIH>Xiaomi PowerBank 3 fast charge 10000 MAH 18w gris</TDIH>
                <TDIH>2</TDIH>
              </tr>
              <tr>
                <TDIH>Botella de agua reciclable serigrafiada</TDIH>
                <TDIH>3</TDIH>
              </tr>
              <tr>
                <TDIH>Taza sertigrafiada</TDIH>
                <TDIH>3</TDIH>
              </tr>
              <tr>
                <TDIH>Bono cafetería</TDIH>
                <TDIH>1</TDIH>
              </tr>

            </Table>
          </TTD>
          <TDIH><AlignedDiv>Sorteos Individuales</AlignedDiv></TDIH>
          <TTD colSpan={2}>
            <Table>
              <tr>
                <TDIH>Vuelo para dos personas</TDIH>
                <TDIH>1</TDIH>
              </tr>
              <tr>
                <TDIH>Google Nest Mini</TDIH>
                <TDIH>2</TDIH>
              </tr>
              <tr>
                <TDIH>Xiaomi PowerBank 3 fast charge 10000 MAH 18w gris</TDIH>
                <TDIH>2</TDIH>
              </tr>
              <tr>
                <TDIH>Botella de agua reciclable serigrafiada</TDIH>
                <TDIH>3</TDIH>
              </tr>
              <tr>
                <TDIH>Taza sertigrafiada</TDIH>
                <TDIH>3</TDIH>
              </tr>
              <tr>
                <TDIH>Bono cafetería</TDIH>
                <TDIH>1</TDIH>
              </tr>

            </Table>
          </TTD>
        </tr>
      </ScrollableTable>
    </TableContainer>
  )
}*/

/*export const TableTrivialOld = () => {
  return (
    <TableContainer>
      <ScrollableTable>

        <tr>
          <THMH colSpan={6}>Premios del Trivial</THMH>
        </tr>

        <tr>
          <TDRH colSpan={3}>Primer Día</TDRH>
          <TDRH colSpan={3}>Segundo Día</TDRH>
        </tr>

        <tr>
          <TDIH><AlignedDiv>1er Puesto</AlignedDiv></TDIH>
          <TTD colSpan={2}>
            <Table width="100%">
              <tr>
                <TDIH>Botella de agua reciclable serigrafiada</TDIH>
                <TDIH>2</TDIH>
              </tr>
              <tr>
                <TDIH>Xiaomi Mi True Wireless Auriculares Earbuds Basic 2 Negros</TDIH>
                <TDIH>2</TDIH>
              </tr>
            </Table>
          </TTD>
          <TDIH><AlignedDiv>1er Puesto</AlignedDiv></TDIH>
          <TTD>
            <Table width="100%">
              <tr>
                <TDIH>Botella de agua reciclable serigrafiada</TDIH>
                <TDIH>2</TDIH>
              </tr>
              <tr>
                <TDIH>Xiaomi Mi True Wireless Auriculares Earbuds Basic 2 Negros</TDIH>
                <TDIH>2</TDIH>
              </tr>
            </Table>
          </TTD>
        </tr>

        <tr>
          <TDIH >2o Puesto</TDIH>
          <TTD colSpan={2}>
            <Table width="100%">
              <tr>
                <TDIH>Taza serigrafiada</TDIH>
                <TDIH>2</TDIH>
              </tr>
            </Table>
          </TTD>
          <TDIH>2o Puesto</TDIH>
          <TTD>
            <Table width="100%">
              <tr>
                <TDIH>Taza serigrafiada</TDIH>
                <TDIH>2</TDIH>
              </tr>
            </Table>
          </TTD>
        </tr>


      </ScrollableTable>
    </TableContainer>
  )
}*/

export const TableSorteos = () => {
  return (
    <TableContainer>
      <ScrollableTable>

        <tr>
          <THMH colSpan={6}>Premios del Sorteo del día</THMH>
        </tr>

        <tr>
          <TDRH colSpan={3}>Primer Día</TDRH>
          <TDRH colSpan={3}>Segundo Día</TDRH>
        </tr>

        <tr>
          <TDIH rowSpan={6}><AlignedDiv>Sorteos Individuales</AlignedDiv></TDIH>
          <TDIH>Vuelo para dos personas</TDIH>
          <TDIH>1</TDIH>
          <TDIH rowSpan={6}><AlignedDiv>Sorteos Individuales</AlignedDiv></TDIH>
          <TDIH>Vuelo para dos personas</TDIH>
          <TDIH>2</TDIH>
        </tr>

        <tr>
          <TDIH>Google Nest Mini</TDIH>
          <TDIH>2</TDIH>
          <TDIH>Google Nest Mini</TDIH>
          <TDIH>2</TDIH>
        </tr>

        <tr>
          <TDIH>Xiaomi PowerBank 3 fast charge 10000 MAH 18w gris</TDIH>
          <TDIH>2</TDIH>
          <TDIH>Xiaomi PowerBank 3 fast charge 10000 MAH 18w gris</TDIH>
          <TDIH>2</TDIH>
        </tr>

        <tr>
          <TDIH>Botella de agua reciclable serigrafiada</TDIH>
          <TDIH>3</TDIH>
          <TDIH>Botella de agua reciclable serigrafiada</TDIH>
          <TDIH>3</TDIH>
        </tr>

        <tr>
          <TDIH>Taza sertigrafiada</TDIH>
          <TDIH>3</TDIH>
          <TDIH>Taza sertigrafiada</TDIH>
          <TDIH>3</TDIH>
        </tr>

        <tr>
          <TDIH>Bono cafetería</TDIH>
          <TDIH>1</TDIH>
          <TDIH>Bono cafetería</TDIH>
          <TDIH>1</TDIH>
        </tr>
      </ScrollableTable>
    </TableContainer >
  )
}

export const TableTrivial = () => {
  return (
    <TableContainer>
      <ScrollableTable>

        <tr>
          <THMH colSpan={6}>Premios del Trivial</THMH>
        </tr>

        <tr>
          <TDRH colSpan={3}>Primer Día</TDRH>
          <TDRH colSpan={3}>Segundo Día</TDRH>
        </tr>

        <tr>
          <TDIH rowSpan={2}><AlignedDiv>1er Puesto</AlignedDiv></TDIH>
          <TDIH>Botella de agua reciclable serigrafiada</TDIH>
          <TDIH>2</TDIH>
          <TDIH rowSpan={2}><AlignedDiv>1er Puesto</AlignedDiv></TDIH>
          <TDIH>Botella de agua reciclable serigrafiada</TDIH>
          <TDIH>2</TDIH>
        </tr>
        <tr>
          <TDIH>Xiaomi Mi True Wireless Auriculares Earbuds Basic 2 Negros</TDIH>
          <TDIH>2</TDIH>
          <TDIH>Xiaomi Mi True Wireless Auriculares Earbuds Basic 2 Negros</TDIH>
          <TDIH>2</TDIH>
        </tr>

        <tr>
          <TDIH >2o Puesto</TDIH>
          <TDIH>Taza serigrafiada</TDIH>
          <TDIH>2</TDIH>
          <TDIH >2o Puesto</TDIH>
          <TDIH>Taza serigrafiada</TDIH>
          <TDIH>2</TDIH>
        </tr>


      </ScrollableTable>
    </TableContainer>
  )
}

export const TableTesoro = () => {
  return (
    <TableContainer>
      <ScrollableTable>

        <tr>
          <THMH colSpan={6}>Premios de la Búsqueda del Tesoro</THMH>
        </tr>


        <tr >
          <TDIH rowSpan={2} >1er Puesto</TDIH>
          <TDIH>
            Xiaomi Mi Smart Band 5 negra
          </TDIH>
          <TDIH>
            4
          </TDIH>

        </tr>
        <tr>
          <TDIH>
            Bono cafetería
          </TDIH>
          <TDIH>
            4
          </TDIH>
        </tr>
      </ScrollableTable>
    </TableContainer>
  )
}

export const TableRedes = () => {
  return (
    <TableContainer>
      <ScrollableTable>

        <tr>
          <THMH colSpan={3}>Premios del Sorteo en RRSS</THMH>
        </tr>

        <tr >
          <TDIH>
            1er Puesto
          </TDIH>
          <TDIH>
            Bono cafetería
          </TDIH>
          <TDIH>
            2
          </TDIH>
        </tr>

        <tr >
          <TDIH>
            1er Puesto
          </TDIH>
          <TDIH>
            Bono cafetería
          </TDIH>
          <TDIH>
            2
          </TDIH>
        </tr>

      </ScrollableTable>
    </TableContainer>
  )
}

//export default TableMartes;

const TTD = styled.td`
padding: 0;
margin: 0;
border: 0;
`;

const Table = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;
  height: 100%;
  border: 1px solid #633CAE;
`;

const TH = styled.th`
padding: 2rem;
text-align: center;
min-width: 10%;
background-color: #83DEFF;
border: 1px solid #633CAE;
border-collapse: collapse;
`;

const TD = styled.td`
padding: 0.5rem;
text-align: center;
min-width: 10%;
border: 1px solid #000;
background: #633CAE;
color: #fff;
border-collapse: collapse;
cursor: pointer;
`;

const TDIH = styled.td`
padding-top: 0.5rem;
padding-bottom: 0.5rem;
padding-left: 1.5rem;
padding-right: 1.5rem;
text-align: center;
min-width: '100px';
border: 1px solid #C0C0C0;
color: #000;
border-collapse: collapse;
margin: 0;
height: 100%;
`;

const THMH = styled.th`
padding: 0.5rem;
text-align: center;
min-width: 10%;
border: 1px solid #000;
background: #633CAE;
color: #fff;
border-collapse: collapse;
`;

const TDRH = styled.td`
padding: 0.5rem;
text-align: center;
min-width: 10%;
border: 1px solid #C0C0C0;
background: #FF645F;
color: #fff;
border-collapse: collapse;
`;

const TDH = styled.td`
padding: 0.5rem;
text-align: center;
min-width: 10%;
border: 1px solid #000;
background: #83DEFF;
color: #000;
border-collapse: collapse;
`;

const TDR = styled.td`
padding: 0.5rem;
text-align: center;
min-width: 10%;
border: 1px solid #000;
background: #FF645F;
color: #fff;
border-collapse: collapse;
`;

const ITDE = styled.td`
padding: 0.5rem;
width: fit-content;
font-size: 1rem;
text-align: center;
min-width: 10%;
border-collapse: collapse;
background-color: #21facF;
`;
const AlignedDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
`;


const ScrollableTable = styled.table`

border-collapse: collapse;
`;

const TableContainer = styled.div`
overflow-x: auto;
`;