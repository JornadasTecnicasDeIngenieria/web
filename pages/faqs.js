import Layout from "@components/layouts/MainLayout";
import IntroSection from "@components/IntroSection";
import styled from "@emotion/styled"
import Image from 'next/image'
import { Grid, Container } from "@mui/material"
import EnConstruccion from "@components/EnConstruccion";
import Accordion from "@components/accordion";
import { faqs } from "data/faq";

const FAQs = () => {

    return (
        <Layout>
            <IntroSection title="Preguntas frecuentes" desc="Respuestas a las dudas que puedan surgirte sobre el evento." />
            <Container>
                {faqs.map(({ title, content }) => {
                    return (
                        <Accordion title={title} content={content} key={title}/>
                    )
                })}
            </Container>
        </Layout>
    )
}

export default FAQs;

const Category = styled.h2`
color: #5C068C;
font-size: 32px;
font-weight: 700;
font-family: "Montserrat"`