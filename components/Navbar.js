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
        <Link href="/stands" legacyBehavior passHref>
          <NavbarLink className="nav-link">Stands</NavbarLink>
        </Link>
        <Link href="/actividades" legacyBehavior passHref>
          <NavbarLink className="nav-link">Actividades</NavbarLink>
        </Link>
        <Link href="/sorteos" legacyBehavior passHref>
          <NavbarLink className="nav-link">Sorteos</NavbarLink>
        </Link>
        <NavDropdown title="El evento" id="collasible-nav-dropdown">
          <NavDropdown.Item href="/mascota">Nuestra mascota</NavDropdown.Item>
          <NavDropdown.Item href="/organizadores">
            Organizadores
          </NavDropdown.Item>
          <NavDropdown.Item href="/patrocinadores">
            Patrocinadores
          </NavDropdown.Item>
          <NavDropdown.Item href="/info-empresas">
            Info empresas
          </NavDropdown.Item>
        </NavDropdown>
        <Link href="/faqs" legacyBehavior passHref>
          <NavbarLink className="nav-link">FAQs</NavbarLink>
        </Link>
      </Stack>
    </Toolbar>
  );
};

export default Navbar;

const NavbarLink = styled.a`
  color: #ffffff;
  font-size: 1.4rem;
  font-family: "Montserrat";
  text-decoration: none;
  cursor: pointer;
`;
