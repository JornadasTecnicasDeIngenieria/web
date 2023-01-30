import Grid from "@mui/material/Grid";
import Image from "next/image";
import styled from "@emotion/styled"

const Landing = ({ imgSrc, imgAlt, title, subtitle }) => {
    return (
        <div className="hidden">
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
                <Image src={imgSrc} alt={imgAlt} layout="fill" objectFit="cover" />
                <Grid
                    container
                    item
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    zIndex="100"
                >
                    <BlockDiv>
                        <ImageDiv>
                            <Image src="/images/eslogan.png" alt="JTI" width={1880} height={310} />
                        </ImageDiv>

                        <br />
                        
                    </BlockDiv>
                    <BlockDiv>
                    </BlockDiv>
                    <PaddingDiv>
                        <DateTitle>
                        14 y 15 de Marzo de 2023
                        </DateTitle>
                    </PaddingDiv>
                </Grid></Grid>
        </div>);
}

export default Landing;

const PaddingDiv = styled.div`
padding: 1rem;
justify-content: center;
text-align: center;
align-items: center;
`;

const MainTitle = styled.h1`
font-size: 7vw;
font-weight: 600;
color: #fff;
text-align: center;
justify-content: center;
align-items: center;
padding-right: 1rem;
`;

const MainSubtitle = styled.h2`
font-size: 8vw;
font-weight: 800;
color: #FFEB83;
text-align: center;
justify-content: center;
align-items: center;
letter-spacing: 0.8rem;
padding: 1rem;
`;

const DateTitle = styled.h3`
font-size: 4vw;
font-weight: 300;
color: #fff;
text-align: center;
justify-content: center;
align-items: center;
`;

const ImageDiv = styled.div`
max-width: 90vh;
`;

const BlockDiv = styled.div`
max-width: 1040px;
margin: 0 auto;
padding: 1rem;
`;