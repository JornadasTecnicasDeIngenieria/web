import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/system";

import Fab from "@mui/material/Fab";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";
import BackToTop from "./BackToTop";

import { PadDiv } from "./StyledComponents";
import Image from "next/image";
import StyledLink from "@components/StyledLink";
import Navbar from './Navbar'
import SideDrawer from "./SideDrawer";
import DisableStickyHeader from "./DisableStickyHeader";

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

export const navLinks = [
    { title: `Blog`, path: `/blog` },
    { title: `Ponencias`, path: `/ponencias` },
    { title: `Talleres`, path: `/talleres` },
    { title: `Stands`, path: `/stands` },
    { title: `Actividades`, path: `/actividades` },
    //{ title: `Challenge`, path: `/isla-bonita-challenge` },
    { title: `Empresas`, path: `/empresas` },
    { title: `Organizadores`, path: `/organizadores` },
    { title: `FAQs`, path: `/faqs` },
    { title: `Contacto`, path: `/contacto` },
];

const Header = () => {
    return (
        <>

            <AppBar position="static">
                <Toolbar>
                    <Container
                        maxWidth="lg"
                        sx={{ display: `flex`, justifyContent: `space-between`, padding: `1%`, alignItems: `center` }}
                    ><br /><br />
                        <StyledLink activeClassName="active" href="/">
                            <PadDiv>
                            <Image src="/header.png" width="267px" height="44px" alt="JTI" />
                            </PadDiv>
                        </StyledLink>
                        <Navbar navLinks={navLinks} />
                        <SideDrawer navLinks={navLinks} />
                    </Container>
                </Toolbar>
            </AppBar>

            <Offset id="back-to-top-anchor" />

            <BackToTop>
                <Fab color="secondary" size="large" aria-label="back to top">
                    <KeyboardArrowUp />
                </Fab>
            </BackToTop>
        </>
    );
};

export default Header;
