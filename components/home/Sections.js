import styled from '@emotion/styled';
import { sections } from 'data/sections';
import { Container } from '@mui/material';
import Grid from '@mui/material/GridLegacy';
import Card from './SectionCard';

const Sections = () => {
  return (
    <IntroDiv>
      <Container>
        <AlignedDiv>
          <SectionTitle>➤ ¿Qué encontrarás en el evento?</SectionTitle>
        </AlignedDiv>
        <Grid container justifyContent="center" alignItems="center">
          {sections.map(({ name, image, id, categories, bg }) => {
            return (
              <Grid item xs={12} sm={12} md={4} lg={4} key={id}>
                <AlignedDiv>
                  <Card
                    name={name}
                    imageSource={image}
                    url={`${id}`}
                    categories={categories}
                    bg={bg}
                  />
                </AlignedDiv>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </IntroDiv>
  );
};

export default Sections;

const IntroDiv = styled.div`
  overflow: hidden;
  align-items: justify;
  justify-content: center;
  vertical-align: middle;
  text-align: justify;
  margin: 0;
  padding: 1rem;
  min-height: 100vh;
  background-color: #3c3c54;
`;

const AlignedDiv = styled.div`
  display: flex;
  justify-content: center;
  vertical-align: middle;
  align-items: center;
  padding: 2rem;
  margin: 1rem;
`;

const SectionTitle = styled.h2`
  color: #fff;
  padding: 2rem;
  font-weight: 700;
  font-family: 'Montserrat';
`;
