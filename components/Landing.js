import Grid from "@mui/material/Grid";
import Image from "next/image";
import styled from "@emotion/styled";

const Landing = ({ imgSrc, imgAlt, title, subtitle }) => {
  return (
    <Wrapper className="hidden">
      <Grid
        component="section"
        container
        sx={{
          position: `relative`,
          height: "95vh",
          width: `100vw`,
          overflow: `hidden`,
        }}
      >
        <Image
          src={imgSrc}
          alt={imgAlt}
          width={1280}
          height={719}
          style={{ width: "100%", height: "100%", position: "absolute" }}
        />
        <Grid
          container
          item
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          zIndex="100"
        >
          <PaddingDiv>
            <ImageDiv>
              <Image
                src="/images/slogan.png"
                alt="JTI"
                width={1996}
                height={430}
                style={{
                  width: "100%",
                  height: "100%",
                  alignSelf: "center",
                }}
              />
            </ImageDiv>
            <br />
            <br />
            <DateTitle>6 y 7 de Febrero de 2024</DateTitle>
          </PaddingDiv>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default Landing;

const Wrapper = styled.div`
  align-items: center;
  justify-content: center;
  text-align: center;
  vertical-align: middle;
  margin: 0;
`;

const ImageDiv = styled.div`
  width: 52rem;
  height: 12rem;
  @media only screen and (max-width: 720px) {
    width: 20rem;
    height: 7rem;
  }
  border-radius: 1em;
  padding: 1rem;
`;

const PaddingDiv = styled.div`
  padding: 1rem 1.5rem;
  justify-content: center;
  text-align: center;
  align-items: center;
  text-size: 3rem;
  background-color: #3f3d56;
  margin-top: 2%;
  border-radius: 1em;
`;

const DateTitle = styled.h3`
  font-size: 3rem !important;
  font-weight: 700;
  color: #fff;
  text-align: center;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 720px) {
    font-size: 1.5rem !important;
  }
`;
