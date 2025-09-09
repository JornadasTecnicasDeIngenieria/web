import Grid from '@mui/material/GridLegacy';
import Image from 'next/image';
import styled from '@emotion/styled';

const Landing = ({ imgSrc, imgAlt, title, subtitle }) => {
  return (
    <Wrapper className="hidden">
      <Grid
        component="section"
        container
        sx={{
          position: `relative`,
          height: '95vh',
          width: `100vw`,
          overflow: `hidden`,
        }}
      >
        <Background src={imgSrc} alt={imgAlt} />
        <Grid container item flexDirection="column" justifyContent="center" alignItems="center" zIndex="100">
          <PaddingDiv>
            <ImageDiv>
              <Image
                src="/images/slogan.png"
                alt="JTI"
                width={1000}
                height={250}
                style={{
                  width: '100%',
                  height: '100%',
                  alignSelf: 'center',
                }}
              />
            </ImageDiv>
            <DateTitle>10 y 11 de Diciembre de 2025</DateTitle>
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
  width: 42rem;
  height: 12rem;
  @media only screen and (max-width: 720px) {
    width: 15rem;
    height: 5rem;
  }
  border-radius: 1em;
  padding: 0.5rem;
  margin-bottom: 10%;
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
  font-size: 2.5rem !important;
  font-weight: 700;
  color: #ffffff;
  text-align: center;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 720px) {
    font-size: 1rem !important;
  }
`;

const Background = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;

  @media only screen and (max-width: 720px) {
    width: 1280px;
  }
`;
