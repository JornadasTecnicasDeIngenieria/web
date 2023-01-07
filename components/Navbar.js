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

const Navbar = ({ navLinks }) => {
  let ScrollLink = Scroll.Link;
  return (
    <Toolbar
      component="nav"
      sx={{
        display: { xs: `none`, md: `flex` },
      }}
    >
      <Stack direction="row" spacing={4}>
        {/*navLinks.map(({ title, path }, i) => (
          <Link
            
            key={`${title}${i}`}
            href={path}
          >
            <a className="nav-link">
            {title}</a>
          </Link>
        ))*/}
        <StyledLink href="/stands" className="nav-link">Stands</StyledLink>
        <Link href="/actividades" className="nav-link">Actividades</Link>

        <NavDropdown title="El evento" id="collasible-nav-dropdown-2">
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