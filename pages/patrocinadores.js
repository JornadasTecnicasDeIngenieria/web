import Layout from "@components/layouts/MainLayout";
import styled from "@emotion/styled";
import { Container } from "@mui/material";
import Grid from "@mui/material/GridLegacy";
import { patrocinadores } from "data/patrocinadores";
import Image from "next/image";

const Patrocinadores = () => {
  const incibeLogos = patrocinadores.filter(
    (p) =>
      p.alt.includes("INCIBE") ||
      p.alt.includes("Cátedra en Ciberseguridad INCIBE"),
  );
  const otherColaboradores = patrocinadores.filter(
    (p) =>
      p.types === "colaborador" &&
      !p.alt.includes("INCIBE") &&
      !p.alt.includes("Cátedra en Ciberseguridad INCIBE"),
  );

  const renderCategory = (type) => {
    const items =
      type === "colaborador"
        ? otherColaboradores
        : patrocinadores.filter((p) => p.types === type);

    return (
      <Grid
        container
        columnSpacing={3}
        rowSpacing={6}
        alignItems="center"
        justifyContent="center"
      >
        {items.map(({ src, alt, width, height }) => (
          <Grid item xs={12} sm={6} key={src}>
            <ImageDiv>
              <StyledImage src={src} alt={alt} width={width} height={height} />
            </ImageDiv>
          </Grid>
        ))}
        {type === "colaborador" &&
          incibeLogos.map(({ src, alt, width, height }) => (
            <Grid item xs={12} key={src}>
              <ImageDiv>
                <StyledImage
                  src={src}
                  alt={alt}
                  width={width}
                  height={height}
                />
              </ImageDiv>
            </Grid>
          ))}
      </Grid>
    );
  };

  return (
    <Layout>
      <Section>
        <Container>
          <br />
          <br />
          <AlignedDiv>
            <Title>Patrocinadores</Title>
          </AlignedDiv>
          <AlignedDiv>
            <Hexagons>
              <HexagonB>⬢&nbsp;&nbsp;</HexagonB>
              <HexagonB>⬢&nbsp;&nbsp;</HexagonB>
              <HexagonB>⬢</HexagonB>
            </Hexagons>
          </AlignedDiv>
          <AlignedDiv>
            <Category>DIAMANTE</Category>
          </AlignedDiv>
          <br />
          <br />
          <br />
          {renderCategory("diamante")}
          <br />
          <br />
          <br />
          <AlignedDiv>
            <Hexagons>
              <HexagonO>⬢&nbsp;&nbsp;</HexagonO>
              <HexagonO>⬢&nbsp;&nbsp;</HexagonO>
              <HexagonO>⬢&nbsp;&nbsp;</HexagonO>
              <HexagonO>⬢</HexagonO>
            </Hexagons>
          </AlignedDiv>
          <AlignedDiv>
            <Category>PLATINO</Category>
          </AlignedDiv>
          <br />
          <br />
          <br />
          {renderCategory("platino")}
          <br />
          <br />
          <br />
          <AlignedDiv>
            <Hexagons>
              <HexagonY>⬢&nbsp;&nbsp;</HexagonY>
              <HexagonY>⬢&nbsp;&nbsp;</HexagonY>
              <HexagonY>⬢</HexagonY>
            </Hexagons>
          </AlignedDiv>
          <AlignedDiv>
            <Category>ORO</Category>
          </AlignedDiv>
          <br />
          <br />
          <br />
          {renderCategory("oro")}
          <br />
          <br />
          <br />
          <AlignedDiv>
            <Hexagons>
              <HexagonP>⬢&nbsp;&nbsp;</HexagonP>
              <HexagonP>⬢&nbsp;&nbsp;</HexagonP>
              <HexagonP>⬢</HexagonP>
            </Hexagons>
          </AlignedDiv>
          <AlignedDiv>
            <Category>COLABORADORES</Category>
          </AlignedDiv>
          <br />
          <br />
          <br />
          {renderCategory("colaborador")}
          <br />
          <br />
          <br />
          <br />
          <br />
        </Container>
      </Section>
    </Layout>
  );
};

export default Patrocinadores;

const AlignedDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Section = styled.div`
  background-color: #ffffff;
`;

const ImageDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
`;

const Title = styled.h2`
  color: #3c3c54;
  font-size: 7rem;
  font-weight: 900;
`;

const Category = styled.h2`
  color: #3c3c54;
  font-size: 3rem;
  font-weight: 700;
  font-family: "Montserrat", sans-serif;
`;

const Hexagons = styled.h2`
  font-size: 3.5rem;
  padding: 2rem;
  font-weight: 700;
`;

const HexagonY = styled.span`
  color: #ffeb83;
  font-size: 3.5rem;
  font-weight: 700;
  font-size: 100%;
`;

const HexagonO = styled.span`
  color: #ff645f;
  font-size: 3.5rem;
  font-weight: 700;
  font-size: 100%;
`;

const HexagonB = styled.span`
  color: #83ddff;
  font-size: 3.5rem;
  font-weight: 700;
  font-size: 100%;
`;

const HexagonP = styled.span`
  color: #633cae;
  font-size: 3.5rem;
  font-weight: 700;
  font-size: 100%;
`;

const RoundedDiv = styled.div`
  border-radius: 25px;
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

const StyledImage = styled(Image)`
  max-width: 80%;
  max-height: 150px;
  width: auto;
  height: auto;
  object-fit: contain;
`;
