import Layout from "@components/layouts/MainLayout";
import IntroSection from "@components/IntroSection";
import styled from "@emotion/styled"
import { Grid, Container } from "@mui/material"
import Image from "next/image";
import { ponenciasmartes, ponenciasmiercoles } from "data/ponencias";
import { TableSorteos, TableTrivial, TableTesoro, TableRedes } from "@components/Table";

import { useState } from "react";

const Actividades = () => {
    return (
        <Layout>
            <IntroSection title="Actividades" desc="Puesto de información en frente de la secretaria de la ESIT." />
            <Container>
                <Category>Sorteo del día</Category>
                <p>A lo largo del día se irán repartiendo boletos a las personas que asistan a las actividades y ponencias,
                    a la vez que se introduce uno análogo en una urna. Al final del día, se abrirá la urna y una mano inocente
                    sacará los números ganadores.</p>
                <p>Dicha urna estará localizada en el puesto de información en frente de la secretaría de la ESIT.</p>
                <p><b>Cómo se reparten los boletos</b></p>
                <ul>
                    <li>Asistir a una charla: +1 boleto.</li>
                    <li>Asistir a la mesa redonda: +2 boletos.</li>
                    <li>Participar en el Trivial: +2 boletos*</li>
                    <li>Búsqueda del tesoro: +2 boletos</li>
                </ul>
                <p>(*) Si no se es ganador/a de ningún premio.</p>
                <AlignedDiv>
                    <TableSorteos />
                </AlignedDiv>

                <br />

                <Category>Trivial</Category>
                <p>Al terminar las ponencias de la mañana y justo antes del descanso del almuerzo, se realizará un trivial por parejas.
                    Dos personas formarán un único equipo e irán respondiendo preguntas propuestas por la organización.</p>


                <AlignedDiv>
                    <TableTrivial />
                </AlignedDiv>

                <br />

                <Category>Búsqueda del tesoro</Category>
                <p>AL finalizar el trivial del primer día, se abrirá la información de la búsqueda del tesoro. Cuando se hayan conseguido todos los objetivos, se deberá acudir al puesto de información central localizado en frente de la secretaría de la ESIT.</p>
                <p>Para esta actividad será necesario participar en equipos de hasta 4 personas. </p>
                <p>Más detalles el día del evento.</p>

                <TableTesoro />

                <br />

                <Category>Sorteo en Redes Sociales</Category>
                <p>Al finalizar el trivial del segundo día, se realizará un sorteo entre las cuentas que sigan a @jtiesit tanto en Instagram como en Twitter.</p>

                <TableRedes />

                <br />

                <Category>Bases de participación</Category>
                <p>- Sólo se podrá recibir un premio en cada tipo de actividad. Es decir, no se puede ganar más de una vez en el Trivial o más de una vez en el sorteo del día.</p>
                <p>- A la persona ganadora, se le sacará una foto junto con el premio para su publicación en nuestras redes sociales.</p>
            </Container>
        </Layout>
    )
}

export default Actividades;

const Category = styled.h2`
color: #633CAE;
font-size: 3rem;
font-weight: 700;
`

const Day = styled.h3`
color: #633CAE;
font-size: 2rem;
font-weight: 400;
`

const Prize = styled.h4`
color: #FF645F;
font-size: 1.5rem;
font-weight: 300;
font-family: "Montserrat"
text-align: center;
justify-content: center;
`;

const SubPrize = styled.h4`
color: #FF645F;
font-size: 1.2rem;
font-weight: 300;
`;

const AlignedDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 1rem;
`;


/*
<Prize>Premios del sorteo del día</Prize></AlignedDiv>
                <Grid container justifyContent="center" alignItems="center">
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <AlignedDiv>
                        <SubPrize>Día 1</SubPrize>
                        </AlignedDiv>
                        <AlignedDiv>
                        <ul>
                            <li>Vuelo en Binter para dos personas</li>
                            <li>Google Nest Mini 2 (2 Unidades)</li>
                            <li>Xiaomi PowerBank 3 de 10000 MAH y 18W (4 unidades)</li>
                            <li>Botellas de agua reciclables serigrafiadas (3 unidades)</li>
                            <li>Tazas serigrafiadas (3 unidades)</li>
                            <li>Un bono cafetería en la ESIT</li>
                        </ul>
                        </AlignedDiv>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <AlignedDiv>
                        <SubPrize>Día 2</SubPrize>
                        </AlignedDiv>
                        <AlignedDiv>
                        <ul>
                            <li>Vuelo en Binter para dos personas (2 unidades)</li>
                            <li>Google Nest Mini 2 (2 Unidades)</li>
                            <li>Xiaomi PowerBank 3 de 10000 MAH y 18W (4 unidades)</li>
                            <li>Botellas de agua reciclables serigrafiadas (3 unidades)</li>
                            <li>Tazas serigrafiadas (3 unidades)</li>
                            <li>Un bono cafetería en la ESIT</li>
                        </ul></AlignedDiv>
                    </Grid>
                </Grid>
                */