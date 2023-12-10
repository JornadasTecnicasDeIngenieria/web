import Layout from "@components/layouts/MainLayout";
import styled from "@emotion/styled";
import { Grid, Container } from "@mui/material";
import Image from "next/image";
import { FirstDayPon, SecondDayPon } from "@components/PonenciaList";
import { ponencias } from "data/ponencias";

const Ponencias = () => {
  return (
    <Layout>
      <Section>
        <Container>
          <br />
          <br />
          <AlignedDiv>
            <Title>Ponencias</Title>
          </AlignedDiv>
          <AlignedDiv>
            <Hexagons>
              <HexagonB>⬢</HexagonB>
              <HexagonO>⬢</HexagonO>
              <HexagonY>⬢</HexagonY>
            </Hexagons>
          </AlignedDiv>
          <DescriptionText>
            Este año hemos recuperado las ponencias, con el objetivo de mostrar
            nuestro aldo más carnal. Estas tendrán una duración aproximada de 20
            minutos, con 10 minutos destinados a preguntas. Nuestro objetivo es
            que las charlas sean de interés para el alumnado de todas las
            ingenierías, tratándose temas amplios o de divulgación como
            investigaciones recientes, proyecto innovadores, análisis del estado
            del arte o consejos sobre el mercado laboral. Las ponencias tendrán
            lugar en el Salón de Grados de la ESIT, situado en la tercera
            planta.
          </DescriptionText>
          <br />
          <br />
        </Container>
      </Section>
      <Section>
        <Container>
          <AlignedDiv>
            <Hexagons>
              <HexagonB>⬢</HexagonB>
              <HexagonO>⬢</HexagonO>
              <HexagonY>⬢</HexagonY>
            </Hexagons>
          </AlignedDiv>
          <br />
          <AlignedDiv>
            <Category>Horarios</Category>
          </AlignedDiv>
          <br />
          <br />
          <AlignedDiv>
            <StandsListGrid>
              <FirstDayPon content={ponencias} />
              <SecondDayPon content={ponencias} />
            </StandsListGrid>
          </AlignedDiv>
          <br />
          <br />
          <br />
          <br />
        </Container>
      </Section>
    </Layout>
  );
};

export default Ponencias;

const AlignedDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Section = styled.div`
  background-color: #3c3c54;
`;

const ImageDiv = styled.div`
  display: flex;
  align-items: center;
  border-radius: 1.5rem;
  overflow: hidden;
  @media (max-width: 760px) {
    width: 93vw;
  }
  height: 90%;
  width: 100%;
`;

const Title = styled.h2`
  color: #ffffff;

  font-weight: 900;
`;

const Category = styled.h3`
  color: #ffffff;
  font-weight: 700;
  font-family: "Montserrat", sans-serif;
`;

const DescriptionText = styled.p`
  color: #ffffff;

  font-weight: 500;
  font-family: "Montserrat";
`;

const Hexagons = styled.h3`
  padding: 2rem;
  font-weight: 700;
`;

const HexagonY = styled.span`
  color: #ffeb83;
  font-weight: 700;
  font-size: 130%;
`;

const HexagonO = styled.span`
  color: #ff645f;
  padding-right: 2rem;
  font-weight: 700;
  font-size: 130%;
`;

const HexagonB = styled.span`
  color: #83ddff;
  padding-right: 2rem;
  font-weight: 700;
  font-size: 130%;
`;

const StandsListGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  @media (max-width: 600px) {
    display: block;
  }
`;