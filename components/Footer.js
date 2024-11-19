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

// Custom TikTok Icon
const TikTokIcon = createSvgIcon(
  <svg
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    viewBox="0 0 50 50"
    width="200"
    height="200"
  >
    <path
      d="M38.0766847,15.8542954 C36.0693906,15.7935177 34.2504839,14.8341149 32.8791434,13.5466056 C32.1316475,12.8317108 31.540171,11.9694126 31.1415066,11.0151329 C30.7426093,10.0603874 30.5453728,9.03391952 30.5619062,8 L24.9731521,8 L24.9731521,28.8295196 C24.9731521,32.3434487 22.8773693,34.4182737 20.2765028,34.4182737 C19.6505623,34.4320127 19.0283477,34.3209362 18.4461858,34.0908659 C17.8640239,33.8612612 17.3337909,33.5175528 16.8862248,33.0797671 C16.4386588,32.6422142 16.0833071,32.1196657 15.8404292,31.5426268 C15.5977841,30.9658208 15.4727358,30.3459348 15.4727358,29.7202272 C15.4727358,29.0940539 15.5977841,28.4746337 15.8404292,27.8978277 C16.0833071,27.3207888 16.4386588,26.7980074 16.8862248,26.3604545 C17.3337909,25.9229017 17.8640239,25.5791933 18.4461858,25.3491229 C19.0283477,25.1192854 19.6505623,25.0084418 20.2765028,25.0219479 C20.7939283,25.0263724 21.3069293,25.1167239 21.794781,25.2902081 L21.794781,19.5985278 C21.2957518,19.4900128 20.7869423,19.436221 20.2765028,19.4380839 C18.2431278,19.4392483 16.2560928,20.0426009 14.5659604,21.1729264 C12.875828,22.303019 11.5587449,23.9090873 10.7814424,25.7878401 C10.003907,27.666593 9.80084889,29.7339663 10.1981162,31.7275214 C10.5953834,33.7217752 11.5748126,35.5530237 13.0129853,36.9904978 C14.4509252,38.4277391 16.2828722,39.4064696 18.277126,39.8028054 C20.2711469,40.1991413 22.3382874,39.9951517 24.2163416,39.2169177 C26.0948616,38.4384508 27.7002312,37.1209021 28.8296253,35.4300711 C29.9592522,33.7397058 30.5619062,31.7522051 30.5619062,29.7188301 L30.5619062,18.8324027 C32.7275484,20.3418321 35.3149087,21.0404263 38.0766847,21.0867664 L38.0766847,15.8542954 Z"
      fill="white"
    />
  </svg>,
  "TikTokIcon"
);

const Footer = () => {
  return (
    <Box component="footer" sx={{ py: 5, bgcolor: "primary.main" }}>
      <Stack direction="row" justifyContent="center" spacing={3} sx={{ mb: 5 }}>
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
          href="https://www.instagram.com/jtiesit/?hl=es"
          target="_blank"
          rel="noopener noreferrer"
          passHref
        >
          <Instagram fontSize="large" />
        </StyledLink>
        <StyledLink
          sx={{ textDecoration: "none", color: "common.white" }}
          href="https://www.tiktok.com/@jtiesit"
          target="_blank"
          rel="noopener noreferrer"
          passHref
        >
          <TikTokIcon fontSize="large" />
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
