import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import StyledLink from "./StyledLink";
import * as Scroll from 'react-scroll';
import styled from "@emotion/styled"
import Link from "next/link";
import { NavDropdown} from 'react-bootstrap';

const Navbar2 = ({ navLinks }) => {
  let ScrollLink = Scroll.Link;
  return (
    <Toolbar
      component="nav"
      sx={{
        display: { xs: `none`, md: `flex` },
      }}
    >
      <Stack direction="row" spacing={4}>
        {navLinks.map(({ title, path }, i) => (
          (<Link key={`${title}${i}`} href={path} className="nav-link">

            {title}
          </Link>)
        ))}
      </Stack>
    </Toolbar>
  );
};

const SpanLink = styled.span`
  color: white;
  &:hover {
    color: #FF645F;
  }
`;

const NavbarLink = styled(Link)`
    text-decoration: none;
    color: #FFFFFF;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color: #FFFFFF;
    }
`;

const linkStyle = {
  margin: "1rem",
  color: "#FFFFFF",
  textDecoration: "none",
};

const Navbar = ({ navLinks }) => {
  return (
    <Toolbar
      component="nav"
      sx={{
        display: { xs: `none`, md: `flex` },
      }}
    >
      <Stack direction="row" spacing={4}>
        <NavbarLink href="/stands" className="nav-link">Stands</NavbarLink>
        <Link href="/actividades" className="nav-link" style={linkStyle}>Actividades</Link>

        <NavDropdown title="El evento" id="collasible-nav-dropdown">
          <NavDropdown.Item href="/organizadores">Organizadores</NavDropdown.Item>
          <NavDropdown.Item href="/empresas">Empresas</NavDropdown.Item>
        </NavDropdown>
        <Link href="/faqs" className="nav-link">FAQs</Link>
        <Link href="/contacto" className="nav-link">Contacto</Link>
      </Stack>
    </Toolbar>
  );
};

export default Navbar;