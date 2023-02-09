import styled from "@emotion/styled";
import Image from 'next/image'
import { Container, Grid } from "@mui/material";

const InfoJTI = ({ title, desc }) => {
    return (
        <IntroDiv>
            <Container>
                <AlignedDiv><Circles><CircleA>⬤</CircleA><CircleB>⬤</CircleB><CircleC>⬤</CircleC></Circles></AlignedDiv>
                <AlignedDiv>
                    <SectionTitle>El mayor evento universitario de ingenierías de Canarias</SectionTitle>
                </AlignedDiv>

                <Grid container spacing={5}>

                    <Grid item xs={12} sm={12} md={6} lg={4}>
                        <AlignedDiv>
                            <Image src="/images/study.png" alt="Estudiantes" width={300} height={300} />
                        </AlignedDiv>
                        <AlignedDiv>
                            <JustTitle> Por y para estudiantes </JustTitle>
                        </AlignedDiv>
                        <AlignedDiv>
                            <JustP> Las Jornadas Técnicas de Ingeniería se realizan de forma anual por estudiantes universitarios, y están destinadas a ellos; pese a ser un evento de libre acceso. Es completamente gratuito, y además cuenta con muchos posibles premios.</JustP>
                        </AlignedDiv>
                    </Grid>

                    <Grid item xs={12} sm={12} md={6} lg={4}>
                        <AlignedDiv>
                            <Image src="/images/ing.png" alt="Ingenierías" width={300} height={300} />
                        </AlignedDiv>
                        <AlignedDiv>
                            <JustTitle> Múltiples Ingenierías </JustTitle>
                        </AlignedDiv>
                        <AlignedDiv>
                            <JustP> Las JTI son completamente multidisciplinares. Están desarrolladas por y para alumnado de 4 ingenierías diferentes: Ingeniería Informática, Ingeniería Mecánica, Ingeniería Electrónica e Ingeniería Química Industrial</JustP>
                        </AlignedDiv>
                    </Grid>

                    <Grid item xs={12} sm={12} md={6} lg={4}>
                        <AlignedDiv>
                            <Image src="/images/events.png" alt="Fechas" width={300} height={300} />
                        </AlignedDiv>
                        <AlignedDiv>
                            <JustTitle> 14 y 15 de Marzo </JustTitle>
                        </AlignedDiv>
                        <AlignedDiv>
                            <JustP> ¡Anota las fechas en tu calendario! Este es un evento anual, por lo que no te recomendamos perderte la oportunidad...No podemos garantizarte que conseguirás trabajo, ¡pero sí que disfrutarás la experiencia! </JustP>
                        </AlignedDiv>
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
padding: 1rem;
min-height: 100vh;
background-color: #FF645F;
`;

const AlignedDiv = styled.div`
display: flex;
justify-content: center;
vertical-align: middle;
align-items: center;
`;

const SectionTitle = styled.h2`
color: #fff;
font-size: 3rem;
padding-bottom: 2rem;
font-weight: 700;
font-family: "Montserrat"
align-items: center;
text-align: center;
;`

const JustTitle = styled.h3`
color: #fff;
font-size: 2rem;
padding: 1rem;
font-weight: 500;
font-family: "Montserrat"
align-items: center;
text-align: center;
;`

const JustP = styled.p`
color: #fff;
font-size: 1.2rem;
padding: 1rem;
font-weight: 300;
font-family: "Montserrat"
align-items: center;
text-align: center;
;`

const Circles = styled.h2`
font-size: 3.5rem;
padding: 2rem;
font-weight: 700;
font-family: "Montserrat"
;`

const CircleA = styled.span`
color: #83DEFF;
font-size: 3.5rem;
padding-right: 2rem;
font-weight: 700;
font-family: "Montserrat"
`; 

const CircleB = styled.span`
color: #633CAE;
font-size: 3.5rem;
padding-right: 2rem;
font-weight: 700;
font-family: "Montserrat"
`; 

const CircleC = styled.span`
color: #FFEB83;
font-size: 3.5rem;
padding-right: 2rem;
font-weight: 700;
font-family: "Montserrat"
`;