import styled from "@emotion/styled";
import Image from 'next/image'
import { Container, Grid } from "@mui/material";

const InfoJTI = ({ title, desc }) => {
    return (
        <IntroDiv>
            <Container>
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={12} md={12} lg={6}>
                        <Category> ¿Qué son las JTI?</Category>
                        Las Jornadas Técnicas de Ingeniería comenzaron en el año 2019 celebrándose a lo largo de un solo día. En ella participaron más de 20 empresas, con presencia ininterrumpida en los Stands que se montaron en el pasillo de la Escuela Superior de Ingeniería y Tecnología de la Universidad de La Laguna. Se impartieron más de 30 conferencias, con ponentes cuyos perfiles que van desde profesionales del sector hasta alumnos en pleno desarrollo de proyectos educativos nacidos en el seno de la ESIT, pasando por egresados de esta escuela que ya han dado el salto de la universidad a la empresa. Y finalmente, y por ello más importante, la participación de más de 200 alumnos de tercer y cuarto curso de los cuatro grados impartidos por en la ESIT: Grado en Ingeniería Informática, Grado en Ingeniería Química Industrial, Grado en Ingeniería Electrónica Industrial y Automática y Grado en Ingeniería Mecánica.
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={6}>
                        <AlignedDiv>
                        <RoundedImage src="/images/homestand.jpg" alt="Stand de las JTI 2019" width={300} height={300} layout="responsive" />
                        </AlignedDiv>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={6}>
                    <AlignedDiv>
                        <RoundedImage src="/images/charla.jpg" alt="Stand de las JTI 2019" width={300} height={300} layout="responsive"/>
                        </AlignedDiv>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={6}>
                        <Category> ¿Cómo surgieron?</Category>
                        Su nacimiento se debe a que un grupo de alumnos de la ESIT requería más información sobre las empresas en las que en el futuro realizarían las prácticas externas. Consultado con la dirección de la ESIT surgió la idea de reunir en un mismo espacio empresas y alumnos. Ese lugar no podía ser otro que no fuese la ESIT: Las empresas debían regresar al origen de su creación; los alumnos debían sentirse acogidos por las empresas; se debía crear un ambiente óptimo para el intercambio de experiencias y conocimientos. Así, las empresas mostraban qué buscaban en los alumnos y los alumnos podían obtener toda la información que necesitaran o incluso preguntar de manera cercana, sin llamadas sin respuesta o emails perdidos. La ESIT se convierte así en lugar de encuentro.
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={6}>
                        <Category> El desarrollo del evento </Category>
                        Fue tal el éxito y el interés de los asistentes y empresas que se decidió dar continuidad al evento de forma anual. Sin embargo, en 2020 la llegada del Coronavirus impidió la celebración de estas JTI, que veían incrementada la participación de empresas y ponentes. Pero este duro palo no sirvió de excusa para que en 2021 la comisión organizadora resurgiera con más ánimo y fuerzas. Durante ese año las JTI se desarrollaron en modalidad 100% virtual, o como se quiere conocer ahora, telemática. Esto hizo posible una participación sea más sencilla para los alumnos, que pudieron seguirlo todo desde casa, y para las empresas, que pudieron impartir sus conferencias desde cualquier punto del mundo: Gran Canaria, Barcelona o, incluso, Irlanda.
                        El evento tuvo bastantes asistentes, sin embargo, la modalidad online le quitó el punto más característico del evento: los stands y la interacción directa con las empresas.
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={6}>
                    <AlignedDiv>
                        <RoundedImage src="/images/homestand.jpg" alt="Stand de las JTI 2019" width={300} height={300} />
                        </AlignedDiv>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Category> ¿Qué esperar de las JTI 2022? </Category>
                        Este año, las JTI tienen como objetivo principal recuperar y superar el éxito de las primeras ediciones. Aprovechando la mejora en la situación sanitaria, se retomará el formato presencial y, con él, la interacción y experiencia tan característica que se había logrado. Pero no sólo eso: las JTI 2022 serán muchisimo más.
                        Desde los mejores stands y conferencias del mayor nivel, de todo tipo de empresas y organizaciones relacionadas a la ingeniería; hasta entretenidos talleres formativos, concursos, eventos y sorteos. En la comisión tenemos las expectativas muy altas y pondremos todo de nuestra parte para hacer de este evento uno de los más completos que ha pasado por la ESIT. ¿Te lo vas a perder?
                    </Grid>
                </Grid>
            </Container>
        </IntroDiv>
    )
}

export default InfoJTI;

const IntroDiv = styled.div`
overflow: hidden;
align-items: justify;
justify-content: center;
vertical-align: middle;
text-align: justify;
margin: 0;
padding: 3rem;
`;

const RoundedImage = styled.img`
border-radius: 50%;
`;

const AlignedDiv = styled.div`
display: flex;
justify-content: center;
vertical-align: middle;
align-items: center;
`;

const Category = styled.h2`
color: #633CAE;
font-size: 32px;
font-weight: 700;
font-family: "Montserrat"`