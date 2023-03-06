import Layout from "@components/layouts/MainLayout";
import styled from "@emotion/styled"
import { Grid, Container } from "@mui/material"
import { patrocinadores } from "data/patrocinadores";
import Image from "next/image";

const Patrocinadores = () => {
    let aux = 0;
    return (
        <Layout> 
            <Section><Container>
                <br/><br/>
                <AlignedDiv><Title>Patrocinadores</Title></AlignedDiv>
                <AlignedDiv><Circles><CircleB>⬤&nbsp;&nbsp;</CircleB><CircleB>⬤&nbsp;&nbsp;</CircleB><CircleB>⬤</CircleB></Circles></AlignedDiv>
                <AlignedDiv><Category>DIAMANTE</Category></AlignedDiv>
                <br/><br/><br/>
                <Grid container spacing={3} justify="flex-end" alignItems="center">
                    {patrocinadores.map(({ src, alt, width, height, types }) => {
                        return types === "diamante" ? (
                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <ImageDiv>
                                    <Image src={src} alt={alt} width={width} height={height} style={{ width: '80%', height: '80%' }} />
                                </ImageDiv>
                            </Grid>
                        ) : ""
                    })}
                </Grid>
                <br/><br/><br/>     
                <AlignedDiv><Circles><CircleO>⬤&nbsp;&nbsp;</CircleO><CircleO>⬤&nbsp;&nbsp;</CircleO><CircleO>⬤</CircleO></Circles></AlignedDiv>
                <AlignedDiv><Category>PLATINO</Category></AlignedDiv>
                <br/><br/>
                <Grid container spacing={3} justify="flex-end" alignItems="center">
                    {patrocinadores.map(({ src, alt, width, height, types }) => {
                        return types === "platino" ? (
                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <ImageDiv>
                                    <Image src={src} alt={alt} width={width} height={height} style={{ width: '80%', height: '80%' }} />
                                </ImageDiv>
                            </Grid>
                        ) : ""
                    })}
                </Grid>
                <br/><br/><br/>  
                <AlignedDiv><Circles><CircleY>⬤&nbsp;&nbsp;</CircleY><CircleY>⬤&nbsp;&nbsp;</CircleY><CircleY>⬤</CircleY></Circles></AlignedDiv>
                <AlignedDiv><Category>ORO</Category></AlignedDiv>
                <br/><br/>
                <Grid container spacing={3} justify="flex-end" alignItems="center">
                    {patrocinadores.map(({ src, alt, width, height, types }) => {
                        return types === "oro" ? (
                            <Grid item xs={12} sm={12} md={6} lg={6} >
                                <ImageDiv>
                                    <Image src={src} alt={alt} width={width} height={height} style={{ width: '80%', height: '80%' }} />
                                </ImageDiv>
                            </Grid>
                        ) : ""
                    })}
                </Grid>
                <br/><br/>
            </Container></Section>
        </Layout>
    )
}

export default Patrocinadores;

const AlignedDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;

const Section = styled.div`
background-color: #ffffff;`

const ImageDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
vertical-align: middle;
border-radius: 1.5rem;
overflow: hidden;
`;

const Title = styled.h2`
color: #3c3c54;
font-size: 7rem;
font-weight: 900;`

const Category = styled.h2`
color: #3c3c54;
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
font-weight: 700;`;

const CircleB = styled.span`
color: #83DEFF;
font-size: 3.5rem;
font-weight: 700;`;