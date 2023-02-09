import Layout from "./components/layouts/MainLayout";
import IntroSection from "./components/IntroSection";
import styled from "@emotion/styled";
import { Grid, Container } from "@mui/material";
import Separador from "./components/Separador";
import { colaboradores } from "./data/colaboradores";
import Image from "next/image";

const Empresas = () => {
  let aux = 0;
  return (
    <Layout>
      <IntroSection
        title="Sponsors"
        desc="Empresas y entidades que patrocinan el evento."
      />

      <Container>
        <CenterDiv>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Colaboran>COLABORAN</Colaboran>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Separador />
            </Grid>
            {colaboradores.map(({ src, alt, width, height, types }) => {
              if (aux === 2) {
                aux = 0;
              }
              aux++;
              if (types === "colaboran") {
                if (aux === 0) {
                  return (
                    <Grid item xs={12} sm={12} md={6} lg={4}>
                      <CenterDiv>
                        <Image
                          src={src}
                          alt={alt}
                          width={width}
                          height={height}
                          style={{ width: "80%", height: "80%" }}
                        />
                        <br />
                        <br />
                      </CenterDiv>
                    </Grid>
                  );
                }

                return (
                  <Grid item xs={12} sm={12} md={6} lg={4}>
                    <CenterDiv>
                      <Image
                        src={src}
                        alt={alt}
                        width={width}
                        height={height}
                        style={{ width: "80%", height: "80%" }}
                      />
                    </CenterDiv>
                  </Grid>
                );
              }
              return "";
            })}
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Separador />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Diamante />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Separador />
            </Grid>
            {colaboradores.map(({ src, alt, width, height, types }) => {
              return types === "diamante" ? (
                <Grid item xs={12} sm={12} md={6} lg={4}>
                  <CenterDiv>
                    <Image src={src} alt={alt} width={width} height={height} style={{ width: "80%", height: "80%" }}/>
                  </CenterDiv>
                </Grid>
              ) : (
                ""
              );
            })}
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Separador />
            </Grid>
            <br />
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Platino>PLATINO</Platino>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Separador />
            </Grid>
            {colaboradores.map(({ src, alt, width, height, types }) => {
              return types === "platino" ? (
                <Grid item xs={12} sm={12} md={6} lg={4}>
                  <CenterDiv>
                    <Image src={src} alt={alt} width={width} height={height} style={{ width: "80%", height: "80%" }}/>
                  </CenterDiv>
                </Grid>
              ) : (
                ""
              );
            })}
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Separador />
            </Grid>
            <br />
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Oro>ORO</Oro>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Separador />
            </Grid>
            {colaboradores.map(({ src, alt, width, height, types }) => {
              return types === "oro" ? (
                <Grid item xs={12} sm={12} md={6} lg={4}>
                  <CenterDiv>
                    <Image src={src} alt={alt} width={width} height={height} style={{ width: "80%", height: "80%" }}/>
                  </CenterDiv>
                </Grid>
              ) : (
                ""
              );
            })}
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Separador />
            </Grid>
            <br />
          </Grid>
        </CenterDiv>
      </Container>
      <br />
      <br />
      <IntroSection
        title="Asistentes"
        desc="Empresas y entidades que forman parte del evento."
      />
      <Container>
        <CenterDiv>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Separador />
            </Grid>
            {colaboradores.map(({ src, alt, width, height, types }) => {
              return types === "participan" ? (
                <Grid item xs={12} sm={12} md={6} lg={4}>
                  <CenterDiv>
                    <Image src={src} alt={alt} width={width} height={height} style={{ width: "80%", height: "80%" }}/>
                  </CenterDiv>
                </Grid>
              ) : (
                ""
              );
            })}
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Separador />
            </Grid>
            <br />
            <br />
          </Grid>
        </CenterDiv>
      </Container>
    </Layout>
  );
};

export default Empresas;

const CenterDiv = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

const ColaboranDiv = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  background-color: #ffde59;
  font-size: 3.5rem;
  padding: 1.5rem;
`;

const DiamanteDiv = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  background-color: #5e17eb;
  color: white;
  font-size: 3.5rem;
  padding: 1.5rem;
`;

const PlatinoDiv = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  background-color: #8c52ff;
  color: white;
  font-size: 3.5rem;
  padding: 1.5rem;
`;

const OroDiv = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  background-color: #5271ff;
  color: white;
  font-size: 3.5rem;
  padding: 1.5rem;
`;

const DiamanteP = styled.p`
  color: #fff;
  font-size: 2.5rem;
  font-weight: bold;
  align-items: center;
  display: flex;
  justify-content: center;
  text-align: center;
`;

const PlatinoP = styled.p`
  color: #fff;
  font-size: 2.5rem;
  font-weight: bold;
  align-items: center;
  display: flex;
  justify-content: center;
  text-align: center;
`;

const ColaboranP = styled.p`
  color: #3f3d56;
  font-size: 2.5rem;
  font-weight: bold;
  align-items: center;
  display: flex;
  justify-content: center;
  text-align: center;
`;

const DiamanteIco = styled.p`
  color: #83ddff;
  font-size: 2.5rem;
  font-weight: bold;
  align-items: center;
  display: flex;
  justify-content: center;
  text-align: center;
  vertical-align: middle;
`;

const PlatinoIco = styled.p`
  color: #ffde59;
  font-size: 2.5rem;
  font-weight: bold;
  align-items: center;
  display: flex;
  justify-content: center;
  text-align: center;
  vertical-align: middle;
`;

const ColaboranIco = styled.p`
  color: #3f3d56;
  font-size: 2.5rem;
  font-weight: bold;
  align-items: center;
  display: flex;
  justify-content: center;
  text-align: center;
  vertical-align: middle;
`;

const Category = styled.h2`
  color: #633cae;
  font-size: 3rem;
  font-weight: 700;
  font-family: "Montserrat";
`;

const Diamante = () => {
  return (
    <DiamanteDiv>
      <Grid container spacing={3}>
        <Grid item xs={1} sm={2} md={2} lg={3}>
          <CenterDiv>
            <DiamanteIco>◆</DiamanteIco>
          </CenterDiv>
        </Grid>
        <Grid item xs={10} sm={8} md={8} lg={6}>
          <CenterDiv>
            <DiamanteP>DIAMANTE</DiamanteP>
          </CenterDiv>
        </Grid>
        <Grid item xs={1} sm={2} md={2} lg={3}>
          <CenterDiv>
            <DiamanteIco>◆</DiamanteIco>
          </CenterDiv>
        </Grid>
      </Grid>
    </DiamanteDiv>
  );
};

const Platino = () => {
  return (
    <PlatinoDiv>
      <Grid container spacing={3}>
        <Grid item xs={1} sm={2} md={2} lg={3}>
          <CenterDiv>
            <PlatinoIco>★</PlatinoIco>
          </CenterDiv>
        </Grid>
        <Grid item xs={10} sm={8} md={8} lg={6}>
          <CenterDiv>
            <PlatinoP>PLATINO</PlatinoP>
          </CenterDiv>
        </Grid>
        <Grid item xs={1} sm={2} md={2} lg={3}>
          <CenterDiv>
            <PlatinoIco>★</PlatinoIco>
          </CenterDiv>
        </Grid>
      </Grid>
    </PlatinoDiv>
  );
};

const Oro = () => {
  return (
    <OroDiv>
      <Grid container spacing={3}>
        <Grid item xs={1} sm={2} md={2} lg={3}>
          <CenterDiv>
            <PlatinoIco>★</PlatinoIco>
          </CenterDiv>
        </Grid>
        <Grid item xs={10} sm={8} md={8} lg={6}>
          <CenterDiv>
            <PlatinoP>ORO</PlatinoP>
          </CenterDiv>
        </Grid>
        <Grid item xs={1} sm={2} md={2} lg={3}>
          <CenterDiv>
            <PlatinoIco>★</PlatinoIco>
          </CenterDiv>
        </Grid>
      </Grid>
    </OroDiv>
  );
};

const Colaboran = () => {
  return (
    <ColaboranDiv>
      <Grid container spacing={3}>
        <Grid item xs={1} sm={2} md={2} lg={3}>
          <CenterDiv>
            <ColaboranIco>✪</ColaboranIco>
          </CenterDiv>
        </Grid>
        <Grid item xs={10} sm={8} md={8} lg={6}>
          <CenterDiv>
            <ColaboranP>COLABORAN</ColaboranP>
          </CenterDiv>
        </Grid>
        <Grid item xs={1} sm={2} md={2} lg={3}>
          <CenterDiv>
            <ColaboranIco>✪</ColaboranIco>
          </CenterDiv>
        </Grid>
      </Grid>
    </ColaboranDiv>
  );
};
