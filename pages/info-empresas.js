import Layout from "@components/layouts/MainLayout";
import IntroSection from "@components/IntroSection";
import styled from "@emotion/styled"
import { Grid, Container } from "@mui/material"
import Image from "next/legacy/image";

const Info = () => {

    return (
        <Layout>
            <IntroSection title="Información para empresas" desc="Datos relevantes sobre el evento para las empresas asistentes." />
            <Container>
                <Infodiv>
                    <Title>
                        Objetivos de las Jornadas
                    </Title>
                    <ul>
                        <li>Acercar las empresas a los/as futuros/as ingenieros/as </li>
                        <li>Mostrar el emprendimiento como salida profesional </li>
                        <li>Mostrar la investigación como fuente de innovación hacia la sociedad </li>
                    </ul>
                    <Title>Ética del evento</Title>
                    <SubtitleRed>Compromiso JTI</SubtitleRed>
                    <p>La organización de las Jornadas
                        Técnicas de Ingeniería tratará de buscar
                        siempre la paridad en las ponencias y
                        empresas. Difundiendo, además, un
                        manual de recomendaciones en el que
                        se incluyen consejos para no discriminar
                        y utilizar lenguaje inclusivo, entre otros
                        aspectos.</p>
                    <Title>Fechas y ubicación.</Title>
                    <p>Las Jornadas Técnicas de Ingeniería
                        tendrán lugar los días 15 y 16 de febrero
                        del 2022 en la Escuela Superior de
                        Ingeniería y Tecnología (ESIT) de la
                        Universidad de La Laguna (ULL),
                        Tenerife, Islas Canarias.</p>
                    <Title>Organización</Title>
                    <p>Las Jornadas Técnicas de Ingeniería
                        están organizadas por el propio
                        estudiantado universitario de las cuatro
                        ingenierías de la ESIT de la Universidad
                        de La Laguna, con el apoyo y
                        colaboración de la Escuela Superior de
                        Ingeniería y Tecnología (ESIT) de la
                        Universidad de La Laguna (ULL).</p>
                    <br />
                    <Title>Ingenierías</Title>
                    <p>El evento se desarrolla sobre las cuatro
                        ingenierías que se encuentran
                        gestionadas por la Escuela Superior de
                        Ingeniería y Tecnología (ESIT) de la
                        Universidad de La Laguna (ULL):</p>
                    <br />
                    <ul>
                        <li>Grado en Ingeniería Informática</li>
                        <li>Grado en Ingeniería Mecánica</li>
                        <li>Grado en Ingeniería Electrónica Industrial y Autómata</li>
                        <li>Grado en Ingeniería Química Industrial</li>
                    </ul>
                    <br />
                    <Title>Stands</Title>
                    <p>Una parte importante del evento son los
                        Stands, espacios físicos en los que las
                        empresas se establecen para dar
                        información al estudiantado
                        universitario de las ingenierías acerca de
                        su actividad, perfiles profesionales que
                        demandan, funcionamiento de la empresa...</p>
                    <p>Para las empresas que deseen tener un stand en el evento, se recomienda encarecidamente preparar algo que presentar en los mismos: ya sean folletos informativos sobre la empresa, algún pc donde mostrar información o dar a probar algún software, proyecto o web de la compañía, elementos hardware en desarrollo...Eso sí, no se permite realizar ninguna acción que incentive a una venta directa de algún producto o servicio durante el transcurso del evento.</p>
                    <p>Los Stands son cedidos por el Recinto
                        Ferial de Tenerife, gracias al Cabildo
                        Insular de Tenerife.</p>
                    <Image src='/images/faq/stand1.png' alt='Forma del stand' width={500} height={400} />
                    <br />
                    <Title>Ponencias</Title>
                    <p>Habrán ponencias de cada una de las cuatro ingenierías de manera simultánea. En ellas se podrá tratar cualquier aspecto relacionado con el funcionamiento de la compañía, sus proyectos o las oportunidades laborales que ofrece. Se puede consultar los horarios y duraciones en la sección programa.</p>
                    <Title>Patrocinadores</Title>
                    <p>Una parte importante y fundamental del
                        evento son los patrocinadores que
                        permiten financiar material e
                        infraestructuras necesarias para el
                        correcto transcurso de las Jornadas.</p>
                    <p>No dude en ponerse en contacto con nosotros si desea ser parte de los patrocinadores del evento.</p>
                    <br />
                    <Title>Talleres</Title>
                    <p>Fuera del evento se planean ofrecer
                        talleres formativos relacionados con el
                        ámbito de la inserción en el mercado
                        laboral. Estaremos encantados de recibir sugerencias en este ámbito.</p>
                    <br />
                    <Title>Actividades</Title>
                    <p>Otro de los múltiples objetivos de las
                        Jornadas Técnicas de Ingeniería es la
                        unión entre estudiantes, para ello
                        proponemos llevar a cabo una serie de
                        dinámicas que favorezcan la integración
                        de todos los universitarios de los grados
                        de ingeniería de la ESIT.</p>
                    <br />
                    <Title>Empresas y entidades que
                        han colaborado otros años</Title>
                    <p>En años anteriores hemos contado con
                        la colaboración de las siguientes
                        empresas y entidades:</p>
                    <ul>
                        <li>FIFEDE</li>
                        <li>Cabildo de Tenerife</li>
                        <li>COITIC</li>
                        <li>COITITF</li>
                        <li>MetroTenerife</li>
                        <li>Ayuntamiento de Candelaria</li>
                        <li>DISA</li>
                        <li>Compañía Cervecera de Canarias</li>
                        <li>ITER</li>
                        <li>AcidTango</li>
                        <li>Instituto Astrofísico de Canarias</li>
                        <li>FiiHub</li>
                        <li>Trend Robotics</li>
                        <li>Scytl</li>
                        <li>Ferrovial</li>
                        <li>Binter</li>
                    </ul>
                    <br />
                    <Title>Planes de contingencia</Title>
                    <p>Como ya se ha comentado en este
                        portafolio explicativo del evento, las
                        Jornadas, al igual que todo evento
                        presencial, dependen de la situación
                        epidemiológica del momento exacto en
                        el que se desarrollen las mismas.</p>
                    <p>En un intento de adelantarnos a las
                        posibles restricciones que puedan tener
                        lugar en las fechas propuestas (17 - 18
                        febrero), se plantean las siguientes
                        alternativas:</p>
                    <ol>
                        <li>Cambiar la ubicación al parking de la
                            ESIT (un espacio abierto al aire libre).</li>
                        <li>Modificar las fechas</li>
                    </ol>
                    <p>
                        En ningún caso el equipo organizador
                        contempla llevar a cabo el evento de
                        manera virtual o telemática. Esto se
                        debe a que la parte central del evento
                        son los Stands.
                    </p>
                    <p>
                        Por tanto, en caso de ser imposible
                        llevarse a cabo de manera presencial se
                        retrasaría el evento todo lo posible hasta
                        optar como última vía extrema la
                        suspensión definitiva del mismo.
                    </p>
                    <br />
                    <Title>Agradecimientos</Title>
                    <p>Desde el equipo organizador de las
                        Jornadas Técnicas de Ingeniería 2022
                        agradecemos a todas aquellas
                        entidades y empresas que colaboran,
                        participan y/o aportan al evento. Apostando por el talento joven,
                        profesional y cualificado. Gracias por
                        permitirnos tener oportunidades
                        laborales.</p>
                    <br />
                </Infodiv>
            </Container>
        </Layout>
    )
}

export default Info;

const Title = styled.h2`
color: #633CAE;
font-size: 3rem;
font-weight: 700;
font-family: "Montserrat"`

const Subtitle = styled.h3`
color: #633CAE;
font-size: 2rem;
font-weight: 400;
font-family: "Montserrat"`

const SubtitleRed = styled.h3`
color: #FF645F;
font-size: 2rem;
font-weight: 400;
font-family: "Montserrat"`

const Infodiv = styled.div`
align-items: justify;
align-text: justify;
text-justify: inter-word;
font-family: "Montserrat";
font-size: 1rem;
`