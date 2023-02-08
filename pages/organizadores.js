import Cards from "@components/Cards";
import styled from "@emotion/styled"
import { Grid, Container } from "@mui/material"
import Layout from "@components/layouts/MainLayout";

import { organizadores_patrocinio } from "data/organizadores_patrocinio";
import { organizadores_stands } from "data/organizadores_stands";
import { organizadores_actividades } from "data/organizadores_actividades";
import { organizadores_redes_sociales } from "data/organizadores_redes_sociales";

const Organizadores = () => {

    return (
        <Layout>
            <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'></link>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap" rel="stylesheet"></link>
            <Section><Container>
            <br/><br/>
            <AlignedDiv><Title>Organizadores</Title></AlignedDiv>
            <AlignedDiv><Circles><CircleB>⬤</CircleB><CircleO>⬤</CircleO><CircleY>⬤</CircleY></Circles></AlignedDiv>
            <AlignedDiv><Category>Patrocinio y Gestión Financiera</Category></AlignedDiv>
            <br/><br/>
            <Cards organizadores={organizadores_patrocinio} />
            <AlignedDiv><Circles><CircleB>⬤</CircleB><CircleO>⬤</CircleO><CircleY>⬤</CircleY></Circles></AlignedDiv>
            <AlignedDiv><Category>Stands</Category></AlignedDiv>
            <br/><br/>
            <Cards organizadores={organizadores_stands} />
            <AlignedDiv><Circles><CircleB>⬤</CircleB><CircleO>⬤</CircleO><CircleY>⬤</CircleY></Circles></AlignedDiv>
            <AlignedDiv><Category>Actividades</Category></AlignedDiv>
            <br/><br/>
            <Cards organizadores={organizadores_actividades} />
            <AlignedDiv><Circles><CircleB>⬤</CircleB><CircleO>⬤</CircleO><CircleY>⬤</CircleY></Circles></AlignedDiv>
            <AlignedDiv><Category>Redes Sociales</Category></AlignedDiv>
            <br/><br/>
            <Cards organizadores={organizadores_redes_sociales} />
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

const Title = styled.h2`
    color: #ffffff;
    font-size: 7rem;
    font-weight: 900;`

const Category = styled.h2`
    color: #ffffff;
    font-size: 3rem;
    font-weight: 700;
    font-family: 'Montserrat', sans-serif;`

const Circles = styled.h2`
    font-size: 3.5rem;
    padding: 2rem;
    font-weight: 700;`;

const CircleY = styled.span`
    color: #FFEB83;
    font-size: 3.5rem;
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