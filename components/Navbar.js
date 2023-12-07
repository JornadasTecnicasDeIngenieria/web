import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import styled from "@emotion/styled";
import Link from "next/link";
import { NavDropdown } from "react-bootstrap";

const Navbar = ({ navLinks }) => {
  return (
    <Toolbar
      component="nav"
      sx={{
        display: { xs: `none`, md: `flex` },
      }}
    >
      <Stack direction="row" spacing={4}>
        <Link href="stands" className="nav-link" passHref>
          <NavbarLink className="nav-link">Stands</NavbarLink>
        </Link>
        <Link href="actividades" className="nav-link" passHref>
          <NavbarLink className="nav-link">Actividades</NavbarLink>
        </Link>
        <NavDropdown title="El evento" id="collasible-nav-dropdown">
          <NavDropdown.Item href="organizadores" passHref>
            Organizadores
          </NavDropdown.Item>
          <NavDropdown.Item href="patrocinadores" passHref>
            Patrocinadores
          </NavDropdown.Item>
          <NavDropdown.Item href="info-empresas" passHref>
            Info Empresas
          </NavDropdown.Item>
        </NavDropdown>
        <Link href="faqs" className="nav-link" passHref>
          <NavbarLink className="nav-link">FAQs</NavbarLink>
        </Link>
      </Stack>
    </Toolbar>
  );
};

export default Navbar;

const NavbarLink = styled.span`
  color: #ffffff;
  font-size: 1.2rem;
  font-family: "Montserrat";
`;
