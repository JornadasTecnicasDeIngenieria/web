import Layout from "./components/layouts/MainLayout";
import IntroSection from "./components/IntroSection";
import styled from "@emotion/styled";
import { Grid, Container } from "@mui/material";
import EnConstruccion from "./components/EnConstruccion";
import Contact from "./components/Contact";

const Contacto = () => {
  return (
    <Layout>
      <IntroSection
        title="Página de Contacto"
        desc="¿Te interesa participar? ¡Habla con nosotros!"
      />
      <Container>
        <br />
        <Contact />
        <br />
      </Container>
    </Layout>
  );
};

export default Contacto;

const Category = styled.h2`
  color: #5c068c;
  font-size: 32px;
  font-weight: 700;
  font-family: "Montserrat";
`;
