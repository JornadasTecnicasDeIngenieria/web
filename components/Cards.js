import Card from "./Card";
import { Grid, Container } from "@mui/material"
import styled from "@emotion/styled";

function Cards({ organizadores }) {
    return (
        <Container>
            <Grid container justifyContent="center" alignItems="center" >
                <div className="custom-container">
                    {organizadores.map(({ name, image, id, categories, social }) => {
                        return categories.findIndex(category => category !== "") === 0 ? (
                            <Grid item xs={12} sm={12} md={6} lg={4} >
                                <AlignedDiv>
                                    <Card name={name} imageSource={image} url={`${id}`} categories={categories} social={social}/>
                                </AlignedDiv>
                                <br/>
                            </Grid>
                        ) : ""
                    })}
                </div>
            </Grid>
        </Container>
    );
}

export default Cards;

const AlignedDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;`;