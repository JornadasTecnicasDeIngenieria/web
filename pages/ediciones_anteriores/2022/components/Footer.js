import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { LinkedIn, Instagram, Twitter } from "@mui/icons-material";
import Link from "next/link";
import styled from "@emotion/styled";
import StyledLink from "./StyledLink";

const Footer = () => {
  return (
    <Box component="footer" sx={{ py: 5, bgcolor: "primary.main" }}>
      <Stack direction="row" justifyContent="center" spacing={4} sx={{ mb: 5 }}>
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
      <Link href={`/politica-de-privacidad`} legacyBehavior>
        <PrivacyPolicy>
          <Typography align="center" color="common.white">
            POLITICA DE PRIVACIDAD
          </Typography>
        </PrivacyPolicy>
      </Link>

      <Typography align="center" color="common.white">
        © 2019 - {new Date().getFullYear()}, Jornadas Técnicas de Ingeniería
      </Typography>
    </Box>
  );
};

export default Footer;

const PrivacyPolicy = styled.div`
  cursor: pointer;
  padding-bottom: 1rem;
`;
