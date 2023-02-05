import Layout from "@components/layouts/MainLayout";
import styled from "@emotion/styled"
import { Container, Stack } from "@mui/material"
import { Twitter, Instagram, LinkedIn, Facebook } from "@mui/icons-material";
import StyledLink from "@components/StyledLink";

const Contacto = () => {

    return (
        <Layout>
            <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'></link>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap" rel="stylesheet"></link>
            <Section><Container>
                <br/><br/>
                <AlignedDiv><Title>Contacto</Title></AlignedDiv>
                <AlignedDiv><Circles><CircleB>⬤</CircleB><CircleO>⬤</CircleO><CircleY>⬤</CircleY></Circles></AlignedDiv>
                <DescriptionText>Si quieres participar o tienes cualquier duda acerca de las JTI, puedes contactar con nosotros a través de nuestro correo electrónico <Highlight>jtiesit@ull.edu.es</Highlight> o a través de nuestrás redes sociales.</DescriptionText>
                <br/>
                <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
                    <StyledLink
                        sx={{ textDecoration: "none", color: "common.white" }}
                        href="https://www.linkedin.com/company/jtiesit"
                        target="_blank"
                        rel="noopener noreferrer">
                            <LinkedIn fontSize="large" />
                    </StyledLink>
                    <StyledLink
                        sx={{ textDecoration: "none", color: "common.white" }}
                        href="https://twitter.com/jtiesit"
                        target="_blank"
                        rel="noopener noreferrer">
                            <Twitter fontSize="large" />
                    </StyledLink>
                    <StyledLink
                        sx={{ textDecoration: "none", color: "common.white" }}
                        href="https://www.instagram.com/jtiesit/?hl=es"
                        target="_blank"
                        rel="noopener noreferrer">
                            <Instagram fontSize="large" />
                    </StyledLink>
                    <StyledLink
                        sx={{ textDecoration: "none", color: "common.white" }}
                        href="https://www.facebook.com/people/Jornadas-Técnicas-de-Ingeniería/pfbid0286pMHU7Nkf2fVNfMjeAfyDR72eC3E67kVGisag3zeokyzN8zjX3upuDdmJHDHndal/"
                        target="_blank"
                        rel="noopener noreferrer">
                            <Facebook fontSize="large" />
                    </StyledLink>
                </Stack>
                <br/><br/><br/>
                <DescriptionText>También puedes hacernos llegar tus sugerencias para el evento a través de <DescriptionLink href="https://forms.gle/xXHuS8m2xrrz2vat8">este formulario</DescriptionLink>.</DescriptionText>
                <br/><br/>
            </Container></Section>
        </Layout>
    )
}

export default Contacto;

const AlignedDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;

const Section = styled.div`
background-color: #3c3c54;`

const Title = styled.h2`
color: #ffffff;
font-size: 6rem;
font-weight: 900;`

const DescriptionText = styled.p`
color: #ffffff;
font-size: 1.5rem;
font-weight: 500;
font-family: 'Montserrat'`

const DescriptionLink = styled.a`
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