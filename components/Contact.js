import Link from "@components/StyledLink";
import { Grid, Stack } from "@mui/material";
import { motion } from "framer-motion";
import styled from "@emotion/styled"
import getTagColor from "@scripts/getTagColor";
//import { Linkedin, Facebook, GitHub, Twitter, ContactMail, Language } from "@mui/icons-material";
import Language from "@mui/icons-material/Language";
import ContactMail from "@mui/icons-material/ContactMail";
import { Twitter, Facebook, Instagram, LinkedIn } from "@mui/icons-material";
import StyledLink from "@components/StyledLink";

function Contact() {
    return (
        <>
            <motion.div initial="hidden" animate="visible" variants={{
                hidden: {
                    opacity: 0,
                    scale: 0.85
                },
                visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                        delay: 0.3,
                    }
                }
            }}>
                <motion.div whileHover={{
                    position: "relative",
                    zIndex: 999,
                    scale: 1.05,
                    background: "white",
                    transition: {
                        duration: 0.2,
                    }
                }}>
                    <ContactBlock>
                        <div>

                            <Name>
                                ¿Quieres participar o contactar con nosotros? ¡Mándanos un email!
                            </Name>
                            <AlignedDiv>
                                <StyledLink
                                    sx={{ textDecoration: "none", color: "common.black", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", fontWeight: "bold", padding: "1rem", textAlign: "center" }}
                                    href="mailto: jtiesit@ull.edu.es"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="jtiesit@ull.edu.es"
                                >
                                    jtiesit@ull.edu.es
                                </StyledLink>
                            </AlignedDiv>
                            <Name>¡Visita nuestras redes sociales!</Name>
                            <Social>
                                <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
                                    <StyledLink
                                        sx={{ textDecoration: "none", color: "common.white" }}
                                        href="https://www.linkedin.com/company/jtiesit"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <LinkedIn fontSize="large" />
                                    </StyledLink>
                                    <StyledLink
                                        sx={{ textDecoration: "none", color: "common.white" }}
                                        href="https://twitter.com/jtiesit"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Twitter fontSize="large" />
                                    </StyledLink>
                                    <StyledLink
                                        sx={{ textDecoration: "none", color: "common.white" }}
                                        href="https://www.instagram.com/jtiesit/?hl=es"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Instagram fontSize="large" />
                                    </StyledLink>
                                </Stack>
                            </Social>
                            <br />
                            <Name>¡Ayúdanos con la organización!</Name>
                            <AlignedDiv>
                                <StyledLink
                                    sx={{ textDecoration: "none", color: "common.black", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", fontWeight: "bold", padding: "1rem", textAlign: "center" }}
                                    href="https://forms.gle/e7SpEa73fWEAEjfu9"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="https://forms.gle/e7SpEa73fWEAEjfu9"
                                >
                                    https://forms.gle/e7SpEa73fWEAEjfu9
                                </StyledLink>
                            </AlignedDiv>
                            <br />
                            <Name>¡Propón empresas asistentes!</Name>
                            <AlignedDiv>
                                <StyledLink
                                    sx={{ textDecoration: "none", color: "common.black", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", fontWeight: "bold", padding: "1rem", textAlign: "center" }}
                                    href="https://forms.gle/e7SpEa73fWEAEjfu9"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="https://forms.gle/e7SpEa73fWEAEjfu9"
                                >
                                    https://forms.gle/facyarz7PTAEbRFY6
                                </StyledLink>
                            </AlignedDiv>
                            <br />
                            <Name>¡Háznos llegar tus sugerencias!</Name>
                            <AlignedDiv>
                                <StyledLink
                                    sx={{ textDecoration: "none", color: "common.black", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", fontWeight: "bold", padding: "1rem", textAlign: "center" }}
                                    href="https://forms.gle/AFp3Ed9S5wnwBoDe7"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="Formulario de sugerencias"
                                >
                                    https://forms.gle/AFp3Ed9S5wnwBoDe7
                                </StyledLink>
                            </AlignedDiv>
                            <br />

                        </div>
                    </ContactBlock>
                </motion.div>
            </motion.div>
        </>
    );
}

export default Contact;

const Name = styled.h2`
    font-size: 2.5rem;
    color: #333;
    align-self: center;
    align-text: center;
    text-align: center;
`

const Social = styled.div`
width: 100%;
background-color: #633CAE;
color: white;
border: 3px solid rgba(36,138,207,1);
z-index: 9999;
padding: 1rem;
margin: 0;
`

const ContactBlock = styled.div`
max-width: 1040px;
min-height: 55vh;
overflow-x: auto;
margin: 0 auto;
padding: 1rem;
border-radius: 5px;
`

const AlignedDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;