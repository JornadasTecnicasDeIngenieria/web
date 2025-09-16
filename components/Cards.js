import Card from './Card';
import { Grid } from '@mui/material/GridLegacy';
import styled from '@emotion/styled';

function Cards({ organizadores }) {
  return (
    <Grid container justifyContent="center" alignItems="center">
      {organizadores.map(({ name, image, id, categories, social }) => {
        return categories.findIndex((category) => category !== '') === 0 ? (
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <AlignedDiv>
              <Card name={name} imageSource={image} url={`${id}`} categories={categories} social={social} />
            </AlignedDiv>
            <br />
          </Grid>
        ) : (
          ''
        );
      })}
    </Grid>
  );
}

export default Cards;

const AlignedDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
