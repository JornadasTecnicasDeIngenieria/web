import styled from "@emotion/styled";
import { Container } from "@mui/material";

const IntroSection = ({title, desc}) => {
    return (
        <IntroDiv>
            <Container>
            <IntroTitle>{title}</IntroTitle>
            <IntroDesc>{desc}</IntroDesc>
            </Container>
        </IntroDiv>
    )
}

export default IntroSection;

export const IntroSectionShort = ({title}) => {
    return (
        <IntroDivPonencia>
            <Container>
            <IntroTitleShort>{title}</IntroTitleShort>
            </Container>
        </IntroDivPonencia>
    )
}


const IntroDiv = styled.div`
background: #633CAE;
background: #FF645F;
overflow: hidden;
display: flex;
flex-direction: column;
margin: 0;
margin-bottom: 1rem;
padding: 3rem;
`;

const IntroDivPonencia = styled.div`
background: #FF645F;
overflow: hidden;
display: flex;
flex-direction: column;
margin: 0;
margin-bottom: 1rem;
padding: 1.5rem;
`;

const IntroTitleShort = styled.h1`
color: white;
font-size: 3rem;
font-family: 'Montserrat', sans-serif;
text-align: center;
`;

const IntroTitle = styled.h1`
color: white;
font-size: 3rem;
font-family: 'Montserrat', sans-serif;
`;

const IntroDesc = styled.h3`
color: white;
font-size: 1.5rem;
font-family: 'Montserrat', sans-serif;
`;