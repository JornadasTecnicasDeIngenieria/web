import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import StyledLink from "./StyledLink";
import * as Scroll from 'react-scroll';
import styled from "@emotion/styled"
import Link from "next/link";
import { NavDropdown} from 'react-bootstrap';

const Navbar = ({ navLinks }) => {
  return (
    <Toolbar
      component="nav"
      sx={{
        display: { xs: `none`, md: `flex` },
      }}
    >
      <Stack direction="row" spacing={4}>
        <Link href="/stands" className="nav-link"><a className="nav-link">Stands</a></Link>
        <Link href="/actividades" className="nav-link"><a className="nav-link">Actividades</a></Link>

        <NavDropdown title="El evento" id="collasible-nav-dropdown">
          <NavDropdown.Item href="/organizadores">Organizadores</NavDropdown.Item>
          <NavDropdown.Item href="/empresas">Empresas</NavDropdown.Item>
        </NavDropdown>
        <Link href="/faqs" className="nav-link"><a className="nav-link">FAQs</a></Link>
        <Link href="/contacto" className="nav-link"><a className="nav-link">Contacto</a></Link>
      </Stack>
    </Toolbar>
  );
};

export default Navbar;