import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/system";

import { PadDiv } from "./StyledComponents";
import Image from "next/image";
import StyledLink from "@components/StyledLink";
import Navbar from './Navbar'
import SideDrawer from "./SideDrawer";

export const navLinks = [
    { title: `Ponencias`, path: `/ponencias` },
    { title: `Talleres`, path: `/talleres` },
    { title: `Stands`, path: `/stands` },
    { title: `Actividades`, path: `/actividades` },
    { title: `Empresas`, path: `/empresas` },
    { title: `Organizadores`, path: `/organizadores` },
    { title: `FAQs`, path: `/faqs` },
    { title: `Contacto`, path: `/contacto` },
];

const Header = () => {
    return (
            <AppBar position="static">
                <Toolbar>
                    <Container
                        maxWidth="false"
                        sx={{ display: `flex`, justifyContent: `space-between`, margin: '1%' }}
                    >
                        <StyledLink activeClassName="active" href="/">
                            <PadDiv>
                                <Image src="/images/header.png" width="267" height="44" alt="JTI" />
                            </PadDiv>
                        </StyledLink>
                        <Navbar navLinks={navLinks} />
                        <SideDrawer navLinks={navLinks} />
                    </Container>
                </Toolbar>
            </AppBar>
    );
};

export default Header;