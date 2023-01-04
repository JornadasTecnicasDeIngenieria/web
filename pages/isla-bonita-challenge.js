import Layout from "@components/layouts/MainLayout";
import IntroSection from "@components/IntroSection";
import styled from "@emotion/styled"
import { Grid, Container } from "@mui/material"
import { images } from "data/ponencias";
import ImageSlider from "@components/ImageSlider";
import EnConstruccion from "@components/EnConstruccion";

const Isla = () => {
    return (
        <Layout>
            <IntroSection title="Isla Bonita Challenge" desc="Un desafío solidario en busca de opciones innovadoras." />
            <Container>
                <EnConstruccion />
            </Container>
        </Layout>
    )
}

export default Isla;

const AlignedDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;

//<ImageSlider images={images} />