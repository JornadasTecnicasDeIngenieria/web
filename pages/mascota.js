import Layout from "@components/layouts/MainLayout";
import EnConstruccion from "@components/EnConstruccion";
// import { Container, Typography, Box } from "@mui/material";
// import MascotCarousel from "@components/MascotCarousel";
// import mascotaData from "@data/mascota";
// import { styled } from "@mui/material/styles";

// const PageContainer = styled(Container)(({ theme }) => ({
//   paddingTop: theme.spacing(4),
//   paddingBottom: theme.spacing(8),
//   color: "#ffffff",
//   minHeight: "80vh",
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
// }));

// const PageTitle = styled(Typography)(({ theme }) => ({
//   marginBottom: theme.spacing(4),
//   textAlign: "center",
//   color: "#ffffff",
//   fontWeight: 700,
// }));

// const DescriptionText = styled(Typography)(({ theme }) => ({
//   marginBottom: theme.spacing(6),
//   textAlign: "justify",
//   color: "#ffffff", // Using white text as per the dark background in design
//   maxWidth: "800px",
//   lineHeight: 1.6,
// }));

const Mascota = () => {
  return (
    <Layout>
      <EnConstruccion />
    </Layout>
  );
};
/*
const Mascota = () => {
  return (
    <Layout>
      <Box
        sx={{
          backgroundColor: "#3c3c54", // Dark background color matching the theme/design
          minHeight: "100%",
          width: "100%",
          paddingBottom: "4rem",
        }}
      >
        <PageContainer maxWidth="lg">
          <PageTitle variant="h2" component="h1">
            Nuestra mascota
          </PageTitle>

          <DescriptionText variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </DescriptionText>

          <MascotCarousel mascots={mascotaData} />
        </PageContainer>
      </Box>
    </Layout>
  );
};
*/

export default Mascota;
