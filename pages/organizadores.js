import Cards from "@components/Cards";
import styled from "@emotion/styled"
import { Grid, Container } from "@mui/material"
import Layout from "@components/layouts/MainLayout";
import IntroSection from "@components/IntroSection";
import CardCarousel from "@components/carousel";

import { organizadores } from "data/organizadores";
import { voluntarios } from "data/voluntarios";

const Organizadores = () => {

    return (
        <Layout>
            <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'></link>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap" rel="stylesheet"></link>
            <Section><Container>
            <br/><br/>
            <AlignedDiv><Title>ORGANIZADORES</Title></AlignedDiv>
            <AlignedDiv><Circles><CircleB>⬤</CircleB><CircleO>⬤</CircleO><CircleY>⬤</CircleY></Circles></AlignedDiv>
            <Cards organizadores={organizadores} />
            <br/><br/>
            </Container></Section>
        </Layout>
    )
}

export default Organizadores;

const AlignedDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;`;

const Section = styled.div`
    background-color: #3c3c54;`

const ImageDiv = styled.div`
    display: flex;
    align-items: center;
    border-radius: 25px;
    overflow: hidden;`;

const Title = styled.h2`
    color: #ffffff;
    font-size: 7rem;
    font-weight: 900;`

const Category = styled.h2`
    color: #ffffff;
    font-size: 3rem;
    font-weight: 700;
    font-family: 'Montserrat', sans-serif;`

const DescriptionText = styled.p`
    color: #ffffff;
    font-size: 1.5rem;
    font-weight: 500;
    font-family: 'Montserrat'`

const Highlight = styled.span`
    color: #ffffff;
    font-size: 1.5rem;
    font-weight: 700;
    font-family: 'Montserrat'`

const Circles = styled.h2`
    font-size: 3.5rem;
    padding: 2rem;
    font-weight: 700;`;

const CircleY = styled.span`
    color: #FFEB83;
    font-size: 3.5rem;
    padding-right: 2rem;
    font-weight: 700;`;

const CircleO = styled.span`
    color: #FF645F;
    font-size: 3.5rem;
    padding-right: 2rem;
    font-weight: 700;`;

const CircleB = styled.span`
    color: #83DEFF;
    font-size: 3.5rem;
    padding-right: 2rem;
    font-weight: 700;`;