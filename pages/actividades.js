import Layout from "@components/layouts/MainLayout";
import styled from "@emotion/styled"
import { Container } from "@mui/material"
import { TableSorteoStands, TableSorteoRedesSociales, TableVideojuegosArcade, TableTrivial, TableBusquedaTesoro, TableConcursoStands, TableSuperSmashBros, TableLeagueOfLegends } from "@components/Table";

const Actividades = () => {
    return (
        <Layout>
            <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'></link>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap" rel="stylesheet"></link>
            <Section><Container>
                <br/><br/>
                <AlignedDiv><Title>Actividades</Title></AlignedDiv>
                <AlignedDiv><Circles><CircleB>⬤</CircleB><CircleO>⬤</CircleO><CircleY>⬤</CircleY></Circles></AlignedDiv>
                <Category>Sorteo por Stands</Category>
                <br/>
                <DescriptionText>A los asistentes que quieran participar en el sorteo por Stands se les entregará un cupón que deberán ir rellenando de sellos asistiendo a los Stands que sean de su interés. Una vez este lleno el cupón, se podrá introducir en una urna que se utilizará para elegir a los ganadores del sorteo. Los ganadores del sorteo se anunciarán el mismo día por la tarde y solo se podrá obtener un premio por sorteo.</DescriptionText>
                <DescriptionText><Highlight>Lugar: </Highlight>El cupón se recogerá y entregará en el Puesto Central de las JTI, al lado de Conserjería. El sorteo tendrá lugar en el mismo sitio.</DescriptionText>
                <DescriptionText><Highlight>Horario: </Highlight>El cupón se podrá recoger en cualquier momento ANTES del sorteo. El sorteo tendrá lugar a las 17:30 los días 14 y 15 de marzo.</DescriptionText>
                <br/>
                <AlignedDiv>
                    <TableSorteoStands />
                </AlignedDiv>
                <AlignedDiv><Circles><CircleB>⬤</CircleB><CircleO>⬤</CircleO><CircleY>⬤</CircleY></Circles></AlignedDiv>

                <Category>Sorteos por Redes Sociales</Category>
                <br/>
                <DescriptionText>Unos días antes del evento se publicarán en el Twitter y el Instagram de las JTI los requisitos para la participación en el sorteo por redes sociales. Para participar basta con haber cumplido estos requisitos en el momento en el que se celebre el sorteo. Los sorteos en ambas redes sociales son independientes, por lo que cada uno tendrá su propio premio y puede ganar ambos la misma persona.</DescriptionText>
                <DescriptionText><Highlight>Lugar: </Highlight>Las publicaciones se subirán al Twitter y el Instagram de las JTI. El sorteo tendrá lugar en en el Puesto Central de las JTI, al lado de Conserjería.</DescriptionText>
                <DescriptionText><Highlight>Horario: </Highlight>Se tienen que cumplir los requisitos ANTES del sorteo. El sorteo tendrá lugar a las 17:30 el día 15 de marzo.</DescriptionText>
                <br/>
                <AlignedDiv>
                    <TableSorteoRedesSociales />
                </AlignedDiv>
                <AlignedDiv><Circles><CircleB>⬤</CircleB><CircleO>⬤</CircleO><CircleY>⬤</CircleY></Circles></AlignedDiv>

                <Category>Competición de Videojuegos Arcade</Category>
                <br/>
                <DescriptionText>A lo largo de los dos días que durán las JTI, habrá dispuesto cerca del Puesto Central un videojuego arcade de libre acceso. A la persona que haya logrado la mayor puntuación al final del día se le otorgará un premio. Los intentos son ilimitados, pero se debe respetar el orden de cola tras perdes si hay más personas esperando para jugar. Si se quiere registrar una puntuación se deberá avisar al staff que se encuentre en el Puesto Central y enseñar dicha puntuación para demostrar su veracidad, ya que la puntuación <Highlight>NO</Highlight> se guardará automáticamente.</DescriptionText>
                <DescriptionText><Highlight>Lugar: </Highlight>El videojuego estará en la zona del Puesto Central de las JTI, al lado de Conserjería. El anuncio del ganador tendrá lugar en el Puesto Central.</DescriptionText>
                <DescriptionText><Highlight>Horario: </Highlight>Se podrá participar en cualquier momento ANTES de la entrega de premios, respetando siempre el orden de cola. El anuncio del ganador tendrá lugar a las 17:30 los días 14 y 15 de marzo.</DescriptionText>
                <DescriptionText><Highlight>Juegos: </Highlight></DescriptionText>
                <ul>
                    <DescriptionListElement>14 de marzo: Tetris Classic</DescriptionListElement>
                    <DescriptionListElement>15 de marzo: Pac-man</DescriptionListElement>
                </ul>
                <br/>
                <AlignedDiv>
                    <TableVideojuegosArcade />
                </AlignedDiv>
                <AlignedDiv><Circles><CircleB>⬤</CircleB><CircleO>⬤</CircleO><CircleY>⬤</CircleY></Circles></AlignedDiv>

                <Category>Trivial</Category>
                <br/>
                <DescriptionText>Ambos días del evento se celebrará un trivial con preguntas generales de 20 minutos tras el que se le otorgará un premio al ganador.</DescriptionText>
                <DescriptionText><Highlight>Lugar: </Highlight>El trivial tendrá lugar en el Puesto Central de las JTI, al lado de Conserjería.</DescriptionText>
                <DescriptionText><Highlight>Horario: </Highlight></DescriptionText>
                <ul>
                    <DescriptionListElement>14 de marzo: 15:00-15:30</DescriptionListElement>
                    <DescriptionListElement>15 de marzo: 11:30-12:00</DescriptionListElement>
                </ul>
                <br/>
                <AlignedDiv>
                    <TableTrivial />
                </AlignedDiv>
                <AlignedDiv><Circles><CircleB>⬤</CircleB><CircleO>⬤</CircleO><CircleY>⬤</CircleY></Circles></AlignedDiv>

                <Category>Búsqueda del Tesoro</Category>
                <br/>
                <DescriptionText>Uno de los días del evento se celebrará una búsqueda del tesoro en toda la ESIT. Esta se realizará en equipos de entre 2 y 4 personas y ganará el equipo que consiga terminarla en primer lugar. El premio se entregará al finalizar la misma.</DescriptionText>
                <DescriptionText><Highlight>Lugar: </Highlight>La búsqueda del tesoro comenzará y terminará en el Puesto Central de las JTI, al lado de Conserjería.</DescriptionText>
                <DescriptionText><Highlight>Horario: </Highlight>Los equipos se podrán registrar ANTES del comienzo de la actividad. La búsqueda comenzará a las 11:30 del día xx de marzo y tendrá una duración aproximada de una hora.</DescriptionText>
                <br/>
                <AlignedDiv>
                    <TableBusquedaTesoro />
                </AlignedDiv>
                <AlignedDiv><Circles><CircleB>⬤</CircleB><CircleO>⬤</CircleO><CircleY>⬤</CircleY></Circles></AlignedDiv>

                <Category>Concurso de Mejor Stand</Category>
                <br/>
                <DescriptionText>Cada día se elegirá el mejor stand por votación popular de los asistentes. A la empresa ganadora se le realizará una publicación especial en als redes sociales de las JTI. Además, se sorteará un premio entre los asistentes que voten a su stand preferido cada día. Los asistentes solo podrán votar una vez al día.</DescriptionText>
                <DescriptionText><Highlight>Lugar: </Highlight>La votación se hará de manera online mediante un formulario. El sorteo y anuncio del stand ganador tendrá lugar en el Puesto Central de las JTI, al lado de Conserjería.</DescriptionText>
                <DescriptionText><Highlight>Horario: </Highlight>Se podrá votar en cualquier momento del día ANTES del anuncio del ganador. El sorteo y el anuncio del stand ganador serán a las 18:00 los días 14 y 15 de marzo.</DescriptionText>
                <br/>
                <AlignedDiv>
                    <TableConcursoStands />
                </AlignedDiv>
                <AlignedDiv><Circles><CircleB>⬤</CircleB><CircleO>⬤</CircleO><CircleY>⬤</CircleY></Circles></AlignedDiv>

                <Category>Torneo de Super Smash Bros. Ultimate</Category>
                <br/>
                <DescriptionText>El día posterior al evento, tendrá lugar un torneo de Super Smash Bros. Ultimate organizado por el equipo de las Jornadas. El torneo será de un máximo de x participatnes y seguirá un formato por eliminatorias, en el que el ganador avanzará a la siguiente ronda mientras que el perdedor quedará eliminado.</DescriptionText>
                <DescriptionText><Highlight>Lugar: </Highlight>La inscripción al torneo se realizará de manera presencial en el Puesto Central de las JTI, al lado de Conserjería. El torneo se realizará en el Salón de Grados, en la tercera planta de la ESIT.</DescriptionText>
                <DescriptionText><Highlight>Horario: </Highlight>La inscripción debe realizarse durante el evento los días 14 y 15 de marzo. El torneo se realizará el jueves 16 de marzo a las x:00.</DescriptionText>
                <br/>
                <AlignedDiv>
                    <TableSuperSmashBros />
                </AlignedDiv>
                <AlignedDiv><Circles><CircleB>⬤</CircleB><CircleO>⬤</CircleO><CircleY>⬤</CircleY></Circles></AlignedDiv>

                <Category>Torneo de League of Legends</Category>
                <br/>
                <DescriptionText>Después del evento, tendrá lugar un torneo de League of Legends organizado por el equipo de las Jornadas. El torneo será de un máximo de x participatnes y seguirá un formato por eliminatorias, en el que el ganador avanzará a la siguiente ronda mientras que el perdedor quedará eliminado. Las partidas se jugarán en el Abismo de los Lamentos y seguirán las normas de uno contra uno: ganará el jugador que logre el primer asesinato, tirar la primera torre o asesinar 100 súbditos.</DescriptionText>
                <DescriptionText><Highlight>Lugar: </Highlight>La inscripción al torneo se realizará de manera presencial en el Puesto Central de las JTI, al lado de Conserjería. El torneo se realizará en el Salón de Grados, en la tercera planta de la ESIT.</DescriptionText>
                <DescriptionText><Highlight>Horario: </Highlight>La inscripción debe realizarse durante el evento los días 14 y 15 de marzo. El torneo se realizará el viernes 17 de marzo a las x:00.</DescriptionText>
                <br/>
                <AlignedDiv>
                    <TableLeagueOfLegends />
                </AlignedDiv>
                <AlignedDiv><Circles><CircleB>⬤</CircleB><CircleO>⬤</CircleO><CircleY>⬤</CircleY></Circles></AlignedDiv>
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

const DescriptionListElement = styled.li`
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