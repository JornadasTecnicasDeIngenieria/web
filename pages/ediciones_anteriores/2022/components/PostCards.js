import Card from "./PostCard";
import { Grid, Container } from "@mui/material"
import { AlignedDiv } from "./StyledComponents";

function Cards({ allPostsData, tag }) {

  if (typeof (tag) !== "undefined") {
    /*return (
      <div className="custom-cards-div">
        <div className="custom-container">
          {allPostsData.map(({ title, image, id, categories, resume, author, authorImage, date }) => {
            return categories.findIndex(category => category === tag) === 0 ? (
              <div className="custom-container">
                <Card key={id} imageSource={image} title={title} url={`/${id}`} text={resume} author={author} authorImage={authorImage} categories={categories} date={date} />
              </div>
            ) : ""
          })}
        </div>
      </div>
    );*/

    return (
      <Container>
        <Grid container justifyContent="center" alignItems="center">
          <div className="custom-container">
            {allPostsData.map(({ title, image, id, categories, resume, author, authorImage, date }) => {
              return categories.findIndex(category => category === tag) === 0 ? (
                <Grid item xs={12} sm={12} md={6} lg={4}>
                  <AlignedDiv>
                    <Card key={id} imageSource={image} title={title} url={`/blog/${id}`} text={resume} author={author} authorImage={authorImage} categories={categories} date={date} />
                  </AlignedDiv>
                </Grid>
              ) : ""
            })}
          </div>
        </Grid>
      </Container>
    );
  }

  return (
    <div className="custom-cards-div">
      <div className="custom-container">
        {allPostsData.map(({ title, image, id, categories, resume, author, authorImage, date }) => {
          return categories.findIndex(category => category !== "c") === 0 ? (
            <Grid item xs={12} sm={12} md={6} lg={4}>
                  <AlignedDiv>
                    <Card key={id} imageSource={image} title={title} url={`/${id}`} text={resume} author={author} authorImage={authorImage} categories={categories} date={date} />
                  </AlignedDiv>
                </Grid>
          ) : ""
        })}
      </div>
    </div>
  );
}

export default Cards;
