import styled from "@emotion/styled";
import Image from 'next/legacy/image'
import Link from "next/link";
import { Container, Grid } from "@mui/material";

const App = ({ title, desc }) => {
    return (
        <IntroDiv  id="app-section">
            <Container>
                <AlignedDiv><Circles><CircleA>⬤</CircleA><CircleB>⬤</CircleB><CircleC>⬤</CircleC></Circles></AlignedDiv>

                <AlignedDiv>
                    <SectionTitle>¡No olvides descargar la app oficial!</SectionTitle>
                </AlignedDiv>

                <AlignedDiv>
                    <Subtitle>La app del evento facilitará y mejorará tu experiencia en las Jornadas. Si tienes un teléfono Android, ¡no puedes dejarlo pasar! Descubre todo lo que ofrece.</Subtitle>
                </AlignedDiv>

                <AlignedDiv>
                    <Link
                        href="https://drive.google.com/file/d/1I7Z_wcVKGIqJHRUHQIDGy6AOz62RHmdc/view?usp=sharing"
                        target="_blank norreferer"
                        legacyBehavior>
                        <Image src="/qr.png" width={200} height={200} />
                    </Link>
                </AlignedDiv>

                <Grid container spacing={5}>

                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <AlignedDiv>
                            <JustTitle> Si vienes como asistente... </JustTitle>
                        </AlignedDiv>
                        <AlignedDiv>
                            <UL>
                                <LI>Acceso rápido a los horarios de ponencias.</LI>
                                <LI>información sobre todos los stands a un cLIck</LI>
                                <LI>Genera QRs con tus perfiles de Linkedin, Github y web a modo de curriculum.</LI>
                                <LI>Accede al wifi gratuito del evento.</LI>
                                <LI>Crea contactos.</LI>
                            </UL>
                        </AlignedDiv>
                    </Grid>

                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <AlignedDiv>
                            <JustTitle> Si vienes como empresa...  </JustTitle>
                        </AlignedDiv>
                        <AlignedDiv>
                            <UL>
                                <LI>Consulta el horario, sala y aula de tu ponencia fácilmente</LI>
                                <LI>Encuentra rápidamente tu stand</LI>
                                <LI>Recoge curriculos y perfiles de los asistentes que te interesen leyendo su qr</LI>
                                <LI>Accede al wifi gratuito del evento.</LI>
                                <LI>Exporta los contactos en documentos pdf para facilitar su consulta</LI>
                            </UL>
                        </AlignedDiv>
                    </Grid>

                </Grid>
            </Container>
        </IntroDiv>
    );
}

export default App;

const Subtitle = styled.p`
color: #fff;
font-size: 1.5rem;
text-align: center;
`;

const UL = styled.ul`
color: #fff;
font-size: 1rem;
text-align: justify;
`;

const LI = styled.li`
color: #fff;
padding: 0.5rem;
`;

const IntroDiv = styled.div`
overflow: hidden;
align-items: justify;
justify-content: center;
vertical-align: middle;
text-align: justify;
margin: 0;
padding: 1rem;
min-height: 100vh;
background-color: #3c3c54;
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
color: #FF645F;
font-size: 3.5rem;
padding-right: 2rem;
font-weight: 700;
font-family: "Montserrat"
`; const CircleB = styled.span`
color: #FFEB83;
font-size: 3.5rem;
padding-right: 2rem;
font-weight: 700;
font-family: "Montserrat"
`; const CircleC = styled.span`
color: #83DEFF;
font-size: 3.5rem;
padding-right: 2rem;
font-weight: 700;
font-family: "Montserrat"
`;