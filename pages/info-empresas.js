import Layout from "@components/layouts/MainLayout";
import styled from "@emotion/styled"
import { Container } from "@mui/material"

const Info = () => {

    return (
        <Layout>
            <Section><Container>
                <br/><br/>
                <AlignedDiv><Title>Información para Empresas</Title></AlignedDiv>
                <AlignedDiv><Circles><CircleB>⬤</CircleB><CircleO>⬤</CircleO><CircleY>⬤</CircleY></Circles></AlignedDiv>

                <Infodiv>
                    <Category>
                        Objetivos
                    </Category>
                    <ul>
                        <DescriptionListElement>Acercar las empresas a los/as futuros/as ingenieros/as </DescriptionListElement>
                        <DescriptionListElement>Mostrar el emprendimiento como salida profesional </DescriptionListElement>
                        <DescriptionListElement>Mostrar la investigación como fuente de innovación hacia la sociedad</DescriptionListElement>
                    </ul>
                    <Category>Fechas y ubicación</Category>
                    <DescriptionText>Las Jornadas Técnicas de Ingeniería
                        tendrán lugar los días 15 y 16 de febrero
                        del 2022 en la Escuela Superior de
                        Ingeniería y Tecnología (ESIT) de la
                        Universidad de La Laguna (ULL),
                        Tenerife, Islas Canarias.</DescriptionText>
                    <Category>Organización</Category>
                    <DescriptionText>Las Jornadas Técnicas de Ingeniería
                        están organizadas por el propio
                        estudiantado universitario de las cuatro
                        ingenierías de la ESIT de la Universidad
                        de La Laguna, con el apoyo y
                        colaboración de la Escuela Superior de
                        Ingeniería y Tecnología (ESIT) de la
                        Universidad de La Laguna (ULL).</DescriptionText>
                    <br />
                    <Category>Ingenierías</Category>
                    <DescriptionText>El evento se desarrolla sobre las cuatro
                        ingenierías que se encuentran
                        gestionadas por la Escuela Superior de
                        Ingeniería y Tecnología (ESIT) de la
                        Universidad de La Laguna (ULL):</DescriptionText>
                    <br />
                    <ul>
                        <DescriptionListElement>Grado en Ingeniería Informática</DescriptionListElement>
                        <DescriptionListElement>Grado en Ingeniería Mecánica</DescriptionListElement>
                        <DescriptionListElement>Grado en Ingeniería Electrónica Industrial y Autómata</DescriptionListElement>
                        <DescriptionListElement>Grado en Ingeniería Química Industrial</DescriptionListElement>
                    </ul>
                    <br />
                    <Category>Stands</Category>
                    <DescriptionText>Una parte importante del evento son los
                        Stands, espacios físicos en los que las
                        empresas se establecen para dar
                        información al estudiantado
                        universitario de las ingenierías acerca de
                        su actividad, perfiles profesionales que
                        demandan, funcionamiento de la empresa...</DescriptionText>
                    <DescriptionText>Para las empresas que deseen tener un stand en el evento, se recomienda encarecidamente preparar algo que presentar en los mismos: ya sean folletos informativos sobre la empresa, algún pc donde mostrar información o dar a probar algún software, proyecto o web de la compañía, elementos hardware en desarrollo...Eso sí, no se permite realizar ninguna acción que incentive a una venta directa de algún producto o servicio durante el transcurso del evento.</DescriptionText>
                    <DescriptionText>Los Stands son cedidos por el Recinto
                        Ferial de Tenerife, gracias al Cabildo
                        Insular de Tenerife.</DescriptionText>
                    <br />
                    <Category>Actividades</Category>
                    <DescriptionText>Otro de los múltiples objetivos de las
                        Jornadas Técnicas de Ingeniería es la
                        unión entre estudiantes, para ello
                        proponemos llevar a cabo una serie de
                        dinámicas que favorezcan la integración
                        de todos los universitarios de los grados
                        de ingeniería de la ESIT.</DescriptionText>
                    <br />
                    <Category>Empresas y entidades que
                        han colaborado otros años</Category>
                    <DescriptionText>En años anteriores hemos contado con
                        la colaboración de las siguientes
                        empresas y entidades:</DescriptionText>
                    <ul>
                        <DescriptionListElement>FIFEDE</DescriptionListElement>
                        <DescriptionListElement>Cabildo de Tenerife</DescriptionListElement>
                        <DescriptionListElement>COITIC</DescriptionListElement>
                        <DescriptionListElement>COITITF</DescriptionListElement>
                        <DescriptionListElement>MetroTenerife</DescriptionListElement>
                        <DescriptionListElement>Ayuntamiento de Candelaria</DescriptionListElement>
                        <DescriptionListElement>DISA</DescriptionListElement>
                        <DescriptionListElement>Compañía Cervecera de Canarias</DescriptionListElement>
                        <DescriptionListElement>ITER</DescriptionListElement>
                        <DescriptionListElement>AcidTango</DescriptionListElement>
                        <DescriptionListElement>Instituto Astrofísico de Canarias</DescriptionListElement>
                        <DescriptionListElement>FiiHub</DescriptionListElement>
                        <DescriptionListElement>Trend Robotics</DescriptionListElement>
                        <DescriptionListElement>Scytl</DescriptionListElement>
                        <DescriptionListElement>Ferrovial</DescriptionListElement>
                        <DescriptionListElement>Binter</DescriptionListElement>
                    </ul>
                    <br />
                    <Category>Agradecimientos</Category>
                    <DescriptionText>Desde el equipo organizador de las
                        Jornadas Técnicas de Ingeniería 2022
                        agradecemos a todas aquellas
                        entidades y empresas que colaboran,
                        participan y/o aportan al evento. Apostando por el talento joven,
                        profesional y cualificado. Gracias por
                        permitirnos tener oportunidades
                        laborales.</DescriptionText>
                    <br />
                </Infodiv>
            </Container></Section>
        </Layout>
    )
}

export default Info;

const AlignedDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;

const Section = styled.div`
background-color: #3c3c54;`

const Title = styled.h2`
color: #ffffff;
font-size: 5rem;
font-weight: 900;
text-align: center;`

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

const Infodiv = styled.div`
align-items: justify;
align-text: justify;
text-justify: inter-word;
font-family: "Montserrat";
font-size: 1rem;
`