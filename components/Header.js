import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/system";

import { PadDiv } from "./StyledComponents";
import Image from "next/image";
import StyledLink from "@components/StyledLink";
import Navbar from "./Navbar";
import SideDrawer from "./SideDrawer";

export const navLinks = [
  { title: `Stands`, path: `/stands` },
  { title: `Ponencias`, path: `/ponencias` },
  { title: `Actividades`, path: `/actividades` },
  { title: `Organizadores`, path: `/organizadores` },
  { title: `Patrocinadores`, path: `/patrocinadores` },
  { title: `Info Empresas`, path: `/info-empresas` },
  { title: `FAQs`, path: `/faqs` },
];

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Container
          maxWidth="false"
          sx={{
            display: `flex`,
            justifyContent: `space-between`,
            margin: "1%",
          }}
        >
          <StyledLink activeClassName="active" href="/">
            <PadDiv>
              <Image
                src="/images/header.png"
                width="267"
                height="44"
                alt="JTI"
                style={{ width: "13rem", height: "2.2rem" }}
              />
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
