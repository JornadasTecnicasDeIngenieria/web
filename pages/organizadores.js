import Cards from "@components/Cards";
import styled from "@emotion/styled";
import { Container } from "@mui/material";
import Layout from "@components/layouts/MainLayout";

import { organizadores_gestion } from "data/organizadores_gestion";
import { organizadores_empresas } from "data/organizadores_empresas";
import { organizadores_actividades } from "data/organizadores_actividades";
import { organizadores_diseno_redes_sociales } from "data/organizadores_diseno_redes_sociales";

const Organizadores = () => {
  return (
    <Layout>
      <Section>
        <Container>
          <br />
          <br />
          <AlignedDiv>
            <Title>Organizadores</Title>
          </AlignedDiv>

          <AlignedDiv>
            <Circles>
              <CircleB>⬤</CircleB>
              <CircleO>⬤</CircleO>
              <CircleY>⬤</CircleY>
            </Circles>
          </AlignedDiv>
          <AlignedDiv>
            <Category>Gestión</Category>
          </AlignedDiv>
          <br />
          <AlignedDiv>
            <Cards organizadores={organizadores_gestion} />
          </AlignedDiv>
          <br />

          <AlignedDiv>
            <Circles>
              <CircleB>⬤</CircleB>
              <CircleO>⬤</CircleO>
              <CircleY>⬤</CircleY>
            </Circles>
          </AlignedDiv>
          <AlignedDiv>
            <Category>Empresas</Category>
          </AlignedDiv>
          <br />
          <AlignedDiv>
            <Cards organizadores={organizadores_empresas} />
          </AlignedDiv>
          <br />

          <AlignedDiv>
            <Circles>
              <CircleB>⬤</CircleB>
              <CircleO>⬤</CircleO>
              <CircleY>⬤</CircleY>
            </Circles>
          </AlignedDiv>
          <AlignedDiv>
            <Category>Actividades</Category>
          </AlignedDiv>
          <br />
          <AlignedDiv>
            <Cards organizadores={organizadores_actividades} />
          </AlignedDiv>
          <br />

          <AlignedDiv>
            <Circles>
              <CircleB>⬤</CircleB>
              <CircleO>⬤</CircleO>
              <CircleY>⬤</CircleY>
            </Circles>
          </AlignedDiv>
          <AlignedDiv>
            <Category>Diseño y Redes Sociales</Category>
          </AlignedDiv>
          <br />
          <AlignedDiv>
            <Cards organizadores={organizadores_diseno_redes_sociales} />
          </AlignedDiv>
          <br />
          <br />
        </Container>
      </Section>
    </Layout>
  );
};

export default Organizadores;

const AlignedDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Section = styled.div`
  background-color: #3c3c54;
`;

const Title = styled.h2`
  color: #ffffff;
  font-size: 7rem;
  font-weight: 900;
`;

const Category = styled.h3`
  color: #ffffff;
  font-size: 3rem;
  font-weight: 700;
  font-family: "Montserrat", sans-serif;
`;

const Circles = styled.h3`
  font-size: 2rem;
  padding: 2rem;
  font-weight: 700;
`;

const CircleY = styled.span`
  color: #ffeb83;
  font-size: 2rem;
  font-weight: 700;
`;

const CircleO = styled.span`
  color: #ff645f;
  font-size: 2rem;
  padding-right: 2rem;
  font-weight: 700;
`;

const CircleB = styled.span`
  color: #83ddff;
  font-size: 2rem;
  padding-right: 2rem;
  font-weight: 700;
`;
