import Grid from '@mui/material/GridLegacy';
import Image from 'next/image';
import styled from '@emotion/styled';
import { EVENT_DATES_FULL } from 'data/config';

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
        <HiddenH1>{title}</HiddenH1>
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
                width={1000}
                height={250}
                style={{
                  width: '100%',
                  height: 'auto',
                  alignSelf: 'center',
                }}
              />
            </ImageDiv>
            <DateTitle>{EVENT_DATES_FULL}</DateTitle>
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
  margin-bottom: 1rem;
`;

const PaddingDiv = styled.div`
  padding: 2rem 2.5rem;
  justify-content: center;
  text-align: center;
  align-items: center;
  text-size: 3rem;
  background-color: ${({ theme }) => theme.palette.primary.dark};
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

const HiddenH1 = styled.h1`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`;
