import styled from "@emotion/styled";
import { sections } from "data/sections";
import { organizadores } from "data/organizadores";
import { Container, Grid } from "@mui/material";
import Card from "./SectionCard";

const Sections = () => {
    return (
        <IntroDiv>
            <Container>
                <AlignedDiv>
                    <SectionTitle>➤ ¿Qué encontrarás en el evento?</SectionTitle>
                </AlignedDiv>
                <Grid container justifyContent="center" alignItems="center">
                    <div className="custom-container">
                        {sections.map(({ name, image, id, categories, bg }) => {
                            return (
                                <Grid item xs={12} sm={12} md={6} lg={6} key={id}>
                                    <AlignedDiv>
                                        <Card name={name} imageSource={image} url={`${id}`} categories={categories} bg={bg} />
                                    </AlignedDiv>
                                </Grid>
                            );
                        })}
                    </div>
                </Grid>
            </Container>
        </IntroDiv>
    )
}

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

const RoundedImage = styled.img`
border-radius: 50%;
`;

const AlignedDiv = styled.div`
display: flex;
justify-content: center;
vertical-align: middle;
align-items: center
padding: 2rem;
margin: 1rem;
`;

const SectionTitle = styled.h2`
color: #fff;
font-size: 3rem;
padding: 2rem;
font-weight: 700;
font-family: "Montserrat"
;`