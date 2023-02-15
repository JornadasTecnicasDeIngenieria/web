import styled from "@emotion/styled";
import Layout from "../components/layouts/MainLayout";
import { Grid, Container } from "@mui/material";
import { AlignedDiv } from "../components/StyledComponents";
import { tecnologia } from "../data/mesas";
import Card from "../components/ponentemesa";
//<IntroSectionShort title={rawData.jsonData[id].titulo !== "" ? rawData.jsonData[id].titulo : rawData.jsonData[id].empresa} />
export default function Ponencia() {
  return (
    <Layout>
      <BgDiv>
        <Container>
          <AlignedDiv>
            <SectionTitle>
              Mesa Redonda: Nuevas Tecnologías y la Automatización del Trabajo
            </SectionTitle>
          </AlignedDiv>
          <AlignedDiv>
            <Circles>
              <CircleA>⬤</CircleA>
              <CircleB>⬤</CircleB>
              <CircleC>⬤</CircleC>
            </Circles>
          </AlignedDiv>
          <AlignedDiv>
            <SectionSubTitle>¡Conoce a nuestros invitados!</SectionSubTitle>
          </AlignedDiv>

          <Grid container spacing={3}>
            {tecnologia.map((d) => {
              return (
                <Grid item xs={12} sm={12} md={12} lg={6} key={d.name}>
                  <Card data={d} />
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </BgDiv>
    </Layout>
  );
}

const SectionTitle = styled.h2`
color: #3c3c54;
font-size: 3rem;
padding-bottom: 1rem;
font-weight: 700;
font-family: "Montserrat"
align-items: center;
text-align: center;
;`;

const SectionSubTitle = styled.h2`
color: #3c3c54;
font-size: 2rem;
padding-bottom: 1rem;
font-weight: 700;
font-family: "Montserrat"
align-items: center;
text-align: center;
;`;

const Desc = styled.p`
  text-align: justify;
  padding: 1rem;
`;
const ContainerDesc = styled.div`
  max-width: 640px;
  margin: 0 auto;
`;

const BgDiv = styled.div`
  overflow: hidden;
  justify-content: center;
  vertical-align: middle;
  margin: 0;
  min-height: 60vh;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  background-color: #83deff;
`;
const Circles = styled.h2`
  font-size: 3.5rem;
  padding: 0;
  font-weight: 700;
  font-family: "Montserrat";
`;
const CircleA = styled.span`
  color: #ff645f;
  font-size: 3.5rem;
  padding-right: 2rem;
  font-weight: 700;
  font-family: "Montserrat";
`;
const CircleB = styled.span`
  color: #633cae;
  font-size: 3.5rem;
  padding-right: 2rem;
  font-weight: 700;
  font-family: "Montserrat";
`;
const CircleC = styled.span`
  color: #ffeb83;
  font-size: 3.5rem;
  padding-right: 2rem;
  font-weight: 700;
  font-family: "Montserrat";
`;
