import Layout from "./components/layouts/MainLayout";
import IntroSection from "./components/IntroSection";
import styled from "@emotion/styled";
import { Grid, Container } from "@mui/material";
import Image from "next/legacy/image";
import { StandList15, StandList16 } from "./components/StandList";
import { stands } from "data/stands";

const Stands = () => {
  return (
    <Layout>
      <IntroSection
        title="Stands del evento"
        desc="El núcleo del evento. Conoce los diferentes stands que podrás visitar."
      />
      <Container>
        <Category>Sobre los Stands</Category>
        <p>
          Una parte importante del evento son los Stands, espacios físicos en
          los que las empresas se establecen para dar información al
          estudiantado universitario de las ingenierías acerca de su actividad,
          perfiles profesionales que demandan, funcionamiento de la empresa...
        </p>
        <p>
          En estos stands, se buscará que las empresas traigan algo que
          demostrar o enseñar a los visitantes. Por ejemplo, se podrán traer
          folletos informativos sobre los departamentos de la empresa o sus
          programas de becas. Aquellas empresas centradas en el desarrollo
          podrán traer algún equipo para que los visitantes prueben sus
          productos. Si están dedicadas a proyectos de desarrollo sostenible,
          por ejemplo, pueden preparar vídeos enseñando sus avances. Cualquier
          cosa con fines formativos o de interés es bienvenida.
        </p>
        <br />
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <AlignedDiv>
              <Image
                src="/2022/images/faq/stand1.png"
                alt="Forma del stand"
                width={500}
                height={400}
              />
            </AlignedDiv>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <AlignedDiv>
              <Image
                src="/2022/images/faq/stand2.png"
                alt="Ejemplo del stand"
                width={500}
                height={400}
              />
            </AlignedDiv>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <AlignedDiv>
              <Image
                src="/2022/images/faq/stand3.png"
                alt="Stand desde arriba"
                width={500}
                height={400}
              />
            </AlignedDiv>
          </Grid>
        </Grid>
        <br />
        <AlignedDiv>
          <Category>Distribución de los Stands</Category>
        </AlignedDiv>
        <br />
        <AlignedDiv>
          <Image
            src="/plano.png"
            alt="Plano de los Stands"
            width={911}
            height={538}
          />
        </AlignedDiv>
        <br />
        <AlignedDiv>
          <Day>Lista de Stands</Day>
        </AlignedDiv>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <StandList15 content={stands} />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <StandList16 content={stands} />
          </Grid>
        </Grid>
        <br />
      </Container>
    </Layout>
  );
};

export default Stands;

const Category = styled.h2`
  color: #633cae;
  font-size: 3rem;
  font-weight: 700;
  font-family: "Montserrat";
`;

const Day = styled.h3`
  color: #633cae;
  font-size: 2rem;
  font-weight: 400;
  font-family: "Montserrat";
`;

const AlignedDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
