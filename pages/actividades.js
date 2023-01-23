import Layout from "@components/layouts/MainLayout";
import styled from "@emotion/styled"
import { Grid, Container } from "@mui/material"
import Image from "next/image";
import { TableSorteos, TableTrivial, TableTesoro, TableRedes } from "@components/Table";

const Actividades = () => {
    return (
        <Layout>
            <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'></link>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap" rel="stylesheet"></link>
            <Section><Container>
                <br/><br/>
                <AlignedDiv><Title>ACTIVIDADES</Title></AlignedDiv>
                <AlignedDiv><Circles><CircleB>⬤</CircleB><CircleO>⬤</CircleO><CircleY>⬤</CircleY></Circles></AlignedDiv>
                <DescriptionText>A lo largo de las Jornadas Técnicas de Ingeniería habrá una gran multitud de actividades con el objetivo de amenizar el evento y atraer a los estudiantes más curiosos. Estas actividades estarán enfocadas también en fomentar el contacto con las empresas asistentes por parte del alumnado, recompensando la interacción con los stands.</DescriptionText>
                <DescriptionText>Las actividades se llevarán acabo en el puesto central, al lado de Conserjería, son completamente gratuitas y cuentan con gran cantidad de premios. ¡Así que apúntalas que no te las puedes perder!</DescriptionText>
                <br/><br/>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={6} lg={4}>
                        <ImageDiv>
                            <Image src='/images/faq/stand1.png' alt='Forma del stand' width={500} height={400} />
                        </ImageDiv>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={4}>
                        <ImageDiv>
                            <Image src='/images/faq/stand2.png' alt='Ejemplo del stand' width={500} height={400} />
                        </ImageDiv>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={4}>
                        <ImageDiv>
                            <Image src='/images/faq/stand3.png' alt='Stand desde arriba' width={500} height={400} />
                        </ImageDiv>
                    </Grid>
                </Grid>
                <br/>
            </Container></Section>
            <Section><Container>
                <AlignedDiv><Circles><CircleB>⬤</CircleB><CircleO>⬤</CircleO><CircleY>⬤</CircleY></Circles></AlignedDiv>
                <Category>Sorteo por Stands</Category>
                <DescriptionText>A los asistentes que quieran participar en el sorteo por Stands se les entregará un cupón que deberán ir rellenando asistiendo a los Stands que sean de su interés. Estos cupones se utilizarán más tarde para participar en el sorteo.</DescriptionText>
                <DescriptionText><Highlight>Lugar: </Highlight>El cupón se recogerá y entregará en el Puesto Central de las JTI, al lado de Conserjería. El sorteo tendrá lugar en el mismo sitio.</DescriptionText>
                <DescriptionText><Highlight>Horario: </Highlight>El cupón se podrá recoger en cualquier momento ANTES del sorteo. El sorteo tendrá lugar a las 17:00 los días 14 y 15 de marzo.</DescriptionText>
                <ul>
                    <DescriptionText><li>Asistir a stands: +1 boleto.</li></DescriptionText>
                    <DescriptionText><li>Asistir a una charla: +1 boleto.</li></DescriptionText>
                    <DescriptionText><li>Asistir a una charla: +1 boleto.</li></DescriptionText>
                    <DescriptionText><li>Asistir a una charla: +1 boleto.</li></DescriptionText>
                    <li>Búsqueda del tesoro: +2 boletos</li>
                </ul>
                <AlignedDiv>
                    <TableSorteos />
                </AlignedDiv>
                <br/><br/>
                <Category>Sorteos por Redes Sociales</Category>
                <DescriptionText>A lo largo del día se irán repartiendo boletos a las personas que asistan a las actividades y ponencias,
                    a la vez que se introduce uno análogo en una urna. Al final del día, se abrirá la urna y una mano inocente
                    sacará los números ganadores.</DescriptionText>
                <DescriptionText>Dicha urna estará localizada en el puesto de información en frente de la secretaría de la ESIT.</DescriptionText>
                <DescriptionText>Cómo se reparten los boletos:</DescriptionText>
                <ul>
                    <DescriptionText><li>Asistir a stands: +1 boleto.</li></DescriptionText>
                    <DescriptionText><li>Asistir a una charla: +1 boleto.</li></DescriptionText>
                    <DescriptionText><li>Asistir a una charla: +1 boleto.</li></DescriptionText>
                    <DescriptionText><li>Asistir a una charla: +1 boleto.</li></DescriptionText>
                </ul>
                <AlignedDiv>
                    <TableSorteos />
                </AlignedDiv>
                <br/>
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

                <Category>Juegos Arcade</Category>
                <p>Al finalizar el trivial del segundo día, se realizará un sorteo entre las cuentas que sigan a @jtiesit tanto en Instagram como en Twitter.</p>

                <TableRedes />

                <br />

                <Category>Bases de participación</Category>
                <p>- Sólo se podrá recibir un premio en cada tipo de actividad. Es decir, no se puede ganar más de una vez en el Trivial o más de una vez en el sorteo del día.</p>
                <p>- A la persona ganadora, se le sacará una foto junto con el premio para su publicación en nuestras redes sociales.</p>
                <br/>
            </Container></Section>
        </Layout>
    )
}

export default Actividades;

const AlignedDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;

const Section = styled.div`
background-color: #3c3c54;`

const ImageDiv = styled.div`
display: flex;
align-items: center;
border-radius: 25px;
overflow: hidden;
`;

const Title = styled.h2`
color: #ffffff;
font-size: 7rem;
font-weight: 900;`

const Category = styled.h2`
color: #ffffff;
font-size: 3rem;
font-weight: 700;
font-family: 'Montserrat', sans-serif;`

const DescriptionText = styled.p`
color: #ffffff;
font-size: 1.5rem;
font-weight: 500;
font-family: 'Montserrat'`

const Highlight = styled.span`
color: #ffffff;
font-size: 1.5rem;
font-weight: 700;
font-family: 'Montserrat'`

const Circles = styled.h2`
font-size: 3.5rem;
padding: 2rem;
font-weight: 700;`;

const CircleY = styled.span`
color: #FFEB83;
font-size: 3.5rem;
padding-right: 2rem;
font-weight: 700;`;

const CircleO = styled.span`
color: #FF645F;
font-size: 3.5rem;
padding-right: 2rem;
font-weight: 700;`;

const CircleB = styled.span`
color: #83DEFF;
font-size: 3.5rem;
padding-right: 2rem;
font-weight: 700;`;

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