import Layout from '@components/layouts/MainLayout';
import styled from '@emotion/styled';
import { Container } from '@mui/material';
import Grid from '@mui/material/GridLegacy';
import { patrocinadores } from 'data/patrocinadores';
import Image from 'next/image';

const Patrocinadores = () => {
  let aux = 0;
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
          <Grid container columnSpacing={3} rowSpacing={6} alignItems="center" justifyContent="center">
            {patrocinadores.map(({ src, alt, width, height, types }) => {
              return types === 'diamante' ? (
                <Grid item xs={12}>
                  <ImageDiv>
                    <Image
                      src={src}
                      alt={alt}
                      width={width}
                      height={height}
                      style={{ maxWidth: '50%', width: 'auto', height: 'auto' }}
                    />
                  </ImageDiv>
                </Grid>
              ) : (
                ''
              );
            })}
          </Grid>
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
          <Grid container columnSpacing={3} rowSpacing={6} alignItems="center" justifyContent="center">
            {patrocinadores.map(({ src, alt, width, height, types }) =>
              types === 'platino' ? (
                <Grid item xs={12} key={src}>
                  <ImageDiv>
                    <Image
                      src={src}
                      alt={alt}
                      width={width}
                      height={height}
                      style={{ maxHeight: '180px', maxWidth: '40%', width: 'auto', height: 'auto' }}
                    />
                  </ImageDiv>
                </Grid>
              ) : null
            )}
          </Grid>
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
          <Grid container columnSpacing={3} rowSpacing={6} alignItems="center" justifyContent="center">
            {patrocinadores.map(({ src, alt, width, height, types }) =>
              types === 'oro' ? (
                <Grid item xs={12} key={src}>
                  <ImageDiv>
                    <Image
                      src={src}
                      alt={alt}
                      width={width}
                      height={height}
                      style={{ maxHeight: '180px', maxWidth: '50%', width: 'auto', height: 'auto' }}
                    />
                  </ImageDiv>
                </Grid>
              ) : null
            )}
          </Grid>
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
          <Grid container columnSpacing={3} rowSpacing={6} alignItems="center" justifyContent="center">
            {patrocinadores.map(({ src, alt, width, height, types }) =>
              types === 'colaborador' ? (
                <Grid item xs={12} key={src}>
                  <ImageDiv>
                    <Image
                      src={src}
                      alt={alt}
                      width={width}
                      height={height}
                      style={{ maxHeight: '180px', maxWidth: '50%', width: 'auto', height: 'auto' }}
                    />
                  </ImageDiv>
                </Grid>
              ) : null
            )}
          </Grid>
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
  font-family: 'Montserrat', sans-serif;
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
