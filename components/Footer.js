import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { LinkedIn, Instagram, Twitter, Facebook } from "@mui/icons-material";
import Link from "next/link";
import styled from "@emotion/styled";
import StyledLink from "@components/StyledLink";

const Footer = () => {
  return (
    <Box component="footer" sx={{ py: 5, bgcolor: "primary.main" }}>
      <Stack direction="row" justifyContent="center" spacing={4} sx={{ mb: 5 }}>
        <StyledLink
          sx={{ textDecoration: "none", color: "common.white" }}
          href="https://www.linkedin.com/in/jti-jornadas-técnicas-de-ingeniería-b78699264/"
          target="_blank"
          rel="noopener noreferrer"
          passhref
        >
          <LinkedIn fontSize="large" />
        </StyledLink>
        <StyledLink
          sx={{ textDecoration: "none", color: "common.white" }}
          href="https://twitter.com/jtiesit"
          target="_blank"
          rel="noopener noreferrer"
          passhref
        >
          <Twitter fontSize="large" />
        </StyledLink>
        <StyledLink
          sx={{ textDecoration: "none", color: "common.white" }}
          href="https://www.instagram.com/jtiesit/?hl=es"
          target="_blank"
          rel="noopener noreferrer"
          passhref
        >
          <Instagram fontSize="large" />
        </StyledLink>
        <StyledLink
          sx={{ textDecoration: "none", color: "common.white" }}
          href="https://www.facebook.com/people/Jornadas-Técnicas-de-Ingeniería/pfbid0286pMHU7Nkf2fVNfMjeAfyDR72eC3E67kVGisag3zeokyzN8zjX3upuDdmJHDHndal/"
          target="_blank"
          rel="noopener noreferrer"
          passhref
        >
          <Facebook fontSize="large" />
        </StyledLink>
      </Stack>
      <AlignedDiv>
        <DescriptionText>jtiesit@ull.edu.es</DescriptionText>
      </AlignedDiv>
      <Link href={`/politica-de-privacidad`} legacyBehavior passHref>
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

const AlignedDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DescriptionText = styled.p`
  color: #ffffff;
  font-size: 1.2rem;
  font-weight: 700;
  font-family: "Montserrat";
  padding-bottom: 1rem;
`;
