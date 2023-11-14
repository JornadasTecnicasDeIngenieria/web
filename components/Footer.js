import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { LinkedIn, Instagram, Twitter, Facebook } from "@mui/icons-material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Link from "next/link";
import styled from "@emotion/styled";
import StyledLink from "@components/StyledLink";
import { SvgIcon, createSvgIcon } from "@mui/material";

const TwitterNewIcon = createSvgIcon(
  <svg
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="200"
    height="200"
    viewBox="0 0 50 50"
  >
    <path
      d="M 11 4 C 7.1456661 4 4 7.1456661 4 11 L 4 39 C 4 42.854334 7.1456661 46 11 46 L 39 46 C 42.854334 46 46 42.854334 46 39 L 46 11 C 46 7.1456661 42.854334 4 39 4 L 11 4 z M 11 6 L 39 6 C 41.773666 6 44 8.2263339 44 11 L 44 39 C 44 41.773666 41.773666 44 39 44 L 11 44 C 8.2263339 44 6 41.773666 6 39 L 6 11 C 6 8.2263339 8.2263339 6 11 6 z M 13.085938 13 L 22.308594 26.103516 L 13 37 L 15.5 37 L 23.4375 27.707031 L 29.976562 37 L 37.914062 37 L 27.789062 22.613281 L 36 13 L 33.5 13 L 26.660156 21.009766 L 21.023438 13 L 13.085938 13 z M 16.914062 15 L 19.978516 15 L 34.085938 35 L 31.021484 35 L 16.914062 15 z"
      fill="white"
      stroke="white"
      strokeWidth="1.5"
    ></path>
  </svg>,
  "TwitterNewIcon"
);

const Footer = () => {
  return (
    <Box component="footer" sx={{ py: 5, bgcolor: "primary.main" }}>
      <Stack direction="row" justifyContent="center" spacing={4} sx={{ mb: 5 }}>
        <StyledLink
          sx={{ textDecoration: "none", color: "common.white" }}
          href="https://www.linkedin.com/company/jtiull/"
          target="_blank"
          rel="noopener noreferrer"
          passHref
        >
          <LinkedIn fontSize="large" />
        </StyledLink>
        <StyledLink
          sx={{ textDecoration: "none", color: "common.white" }}
          href="https://twitter.com/jtiesit"
          target="_blank"
          rel="noopener noreferrer"
          passHref
        >
          <TwitterNewIcon fontSize="large" />
        </StyledLink>
        <StyledLink
          sx={{ textDecoration: "none", color: "common.white" }}
          href="https://www.instagram.com/jtiesit/?hl=es"
          target="_blank"
          rel="noopener noreferrer"
          passHref
        >
          <Instagram fontSize="large" />
        </StyledLink>
        <StyledLink
          sx={{ textDecoration: "none", color: "common.white" }}
          href="https://www.facebook.com/profile.php?id=61552917822080"
          target="_blank"
          rel="noopener noreferrer"
          passHref
        >
          <Facebook fontSize="large" />
        </StyledLink>
        <StyledLink
          sx={{ textDecoration: "none", color: "common.white" }}
          href="https://www.youtube.com/@jornadastecnicasdeingenieria"
          target="_blank"
          rel="noopener noreferrer"
          passHref
        >
          <YouTubeIcon fontSize="large" />
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
