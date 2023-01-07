import Layout from "@components/layouts/MainLayout";
import IntroSection from "@components/IntroSection";
import styled from "@emotion/styled"
import { Grid, Container } from "@mui/material"
import Image from "next/image";
import {StandList} from "@components/StandList";
import { stands } from "data/stands";

const Stands = () => {
    return (
        <Layout>
            <IntroSection title="Stands" desc="El núcleo del evento" />
            <Description><Container>
                <br/><br/>
                <DescriptionText>Los Stands son el núcleo del evento. En estos puestos, las empresas podrán tener un contacto directo y estrecho con los alumnos que estudian en la ESIT, brindándoles la oportunidad de informar al estudiantado universitario de las ingenierías acerca de su actividad, perfiles profesionales que demandan, funcionamiento de la empresa...</DescriptionText>
                <DescriptionText>En estos stands, las empresas tendrán libertad de organización para exponer su trabajo y atraer a los visitantes del evento. Por ejemplo, se podrán traer folletos informativos sobre los departamentos de la empresa o sus programas de becas. Aquellas empresas centradas en el desarrollo podrán traer algún equipo para que los visitantes prueben sus productos. Si están dedicadas a proyectos de desarrollo sostenible, por ejemplo, pueden preparar vídeos enseñando sus avances. Cualquier cosa con fines formativos o de interés es bienvenida.</DescriptionText>
                <br/>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={6} lg={4}>
                        <AlignedDiv>
                            <Image src='/images/faq/stand1.png' alt='Forma del stand' width={500} height={400} />
                        </AlignedDiv>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={4}>
                        <AlignedDiv>
                            <Image src='/images/faq/stand2.png' alt='Ejemplo del stand' width={500} height={400} />
                        </AlignedDiv>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={4}>
                        <AlignedDiv>
                            <Image src='/images/faq/stand3.png' alt='Stand desde arriba' width={500} height={400} />
                        </AlignedDiv>
                    </Grid>
                </Grid>
                <br/><br/><br/>
                </Container></Description>
                <br/><br/><br/>
                <Container>
                    <AlignedDiv><Category>Distribución de los Stands</Category></AlignedDiv>
                    <br/><br/><br/>
                    <AlignedDiv>
                        <Image src='/stands-2023.jfif' alt='Plano de los Stands' width={1100} height={600} />
                    </AlignedDiv>
                    <StandList content={stands}/>
                    <br/><br/><br/><br/>
                </Container>
        </Layout>
    )
}

export default Stands;

const Category = styled.h2`
color: #633CAE;
font-size: 3rem;
font-weight: 700;
font-family: 'Montserrat', sans-serif;`

const Description = styled.div`
background-color: #3c3c54;`

const DescriptionText = styled.p`
color: #ffffff;
font-size: 1.2rem;
font-weight: 500;
font-family: 'Montserrat', sans-serif;`

const Day = styled.h3`
color: #633CAE;
font-size: 3rem;
font-weight: 700;
font-family: 'Montserrat', sans-serif;`

const AlignedDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;