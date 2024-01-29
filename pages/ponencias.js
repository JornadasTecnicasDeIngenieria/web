import Layout from "@components/layouts/MainLayout";
import styled from "@emotion/styled";
import { Grid, Container } from "@mui/material";
import Image from "next/image";
import { DayOnePonen, DayTwoPonen } from "@components/PonNewInfo";
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
          <PonDay>Martes 6</PonDay>
          <DayOnePonen />
          <br />
          <br />
          <PonDay>Miércoles 7</PonDay>
          <DayTwoPonen />

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

const PonenciaListGrid = styled.div`
  display: flex;
  width: 98vw;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 800px) {
    display: block;
  }
`;
const HiddenSpace = styled.div`
  display: none;
  @media (max-width: 900px) {
    display: block;
  }
`;



const PonDay = styled.p`
  color: white;
  display: felx;
  text-align: center;
  font-weight: bold;
  font-size: 1.8rem;
  @media (max-width: 800px) {
    font-size: 1.5rem;
  }
`