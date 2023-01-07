import styled from "@emotion/styled";
import Image from 'next/image'
import Link from "components/StyledLink";
import { Container, Grid } from "@mui/material";

const Locate = () => {
    return (
        <IntroDiv>
            <Container>
                <AlignedDiv>
                    <Circles>
                        <CircleA>⬤</CircleA><CircleB>⬤</CircleB><CircleC>⬤</CircleC>
                    </Circles>
                </AlignedDiv>

                <AlignedDiv>
                    <SectionTitle>¿Cómo puedo asistir?</SectionTitle>
                </AlignedDiv>

                <AlignedDiv>
                    <JustP> Ir al evento es realmente sencillo. Basta con ir a la Escuela Superior de Ingeniería y Tecnología. ¡Te esperamos! Si no sabes llegar, aquí tienes el mapa:</JustP>
                </AlignedDiv>

                <Grid container spacing={5}>
                    <Grid item xs={12} sm={12} md={6} lg={12}>
                        <AlignedDiv>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.8843542963173!2d-16.324075784507027!3d28.483029197581732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc41cda3fa06883d%3A0x16fb5f572e86cb7f!2sEscuela%20Superior%20de%20Ingenier%C3%ADa%20y%20Tecnolog%C3%ADa!5e0!3m2!1ses!2ses!4v1644091084494!5m2!1ses!2ses"
                                width="600"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen="true"
                                aria-hidden="false"
                                tabIndex="0"
                            />
                        </AlignedDiv>
                    </Grid>
                </Grid>
            </Container>
        </IntroDiv>
    )
}

export default Locate;

const IntroDiv = styled.div`
overflow: hidden;
align-items: justify;
justify-content: center;
vertical-align: middle;
text-align: justify;
margin: 0;
padding: 1rem;
min-height: 80vh;
background-color: #633CAE;  
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

const AlignedDiv2 = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
vertical-align: middle;
align-items: center;
padding-top: 7rem;
`;

const Category = styled.h2`
color: #633CAE;
font-size: 32px;
font-weight: 700;
font-family: "Montserrat"`
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
`; const CircleB = styled.span`
color: #FF645F;
font-size: 3.5rem;
padding-right: 2rem;
font-weight: 700;
font-family: "Montserrat"
`; const CircleC = styled.span`
color: #FFEB83;
font-size: 3.5rem;
padding-right: 2rem;
font-weight: 700;
font-family: "Montserrat"
`;