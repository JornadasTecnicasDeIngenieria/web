import Layout from "@components/layouts/MainLayout";
import styled from "@emotion/styled";
import { Grid, Container } from "@mui/material";
import Image from "next/image";
import { FirstDayStandList, SecondDayStandList } from "@components/StandList";
import { stands } from "data/stands";

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
            Las ponencias es uno de los elementos que hemos recuperado en esta
            edición.
          </DescriptionText>
          <DescriptionText>
            En estos stands, las empresas tendrán libertad de organización para
            exponer su trabajo y atraer a los visitantes del evento. Por
            ejemplo, se podrán traer folletos informativos sobre los
            departamentos de la empresa o sus programas de prácticas. Aquellas
            empresas centradas en el desarrollo podrán traer productos, para que
            los visitantes los descubran. También podrán contar con vídeos donde
            muestren sus proyectos más innovadores. Cualquier iniciativa con
            fines formativos o de interés es bienvenida.
          </DescriptionText>
          <br />
          <br />
          <AlignedDiv>
            <StandsListGrid>
              <FirstDayStandList content={stands} />
              <SecondDayStandList content={stands} />
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
