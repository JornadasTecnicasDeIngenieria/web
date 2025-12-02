import Card from "./Card";
import Grid from "@mui/material/GridLegacy";
import styled from "@emotion/styled";

function Cards({ organizadores }) {
  return (
    <Grid container justifyContent="center" alignItems="center">
      {organizadores.map((org, index) => {
        const { name, image, categories = [], social = [] } = org;
        if (!categories.length || categories[0] === "") return null;
        const key =
          org.id || `${index}-${name.replace(/\s+/g, "-").toLowerCase()}`;
        return (
          <Grid item xs={12} sm={12} md={6} lg={4} key={key}>
            <AlignedDiv>
              <Card
                name={name}
                imageSource={image}
                categories={categories}
                social={social}
              />
            </AlignedDiv>
            <br />
          </Grid>
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
