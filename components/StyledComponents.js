import styled from '@emotion/styled'

export const BlogMetadata = styled.p`
color: #999;
`

export const InlineMetadata = styled.div`
display: flex;
  flex-direction: row;
  justify-content: left;
  padding: 0;
  margin: 0;
  color: #999;
  `

export const ContainerLayout = styled.div`
max-width: 44rem;
  padding: 0 1rem;
  margin: 3rem auto 6rem;
  `

/*export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
  `*/

export const BackToHome = styled.div`
margin: 3rem 0 0;
`

export const BlogH1 = styled.h1`
font-size: 2rem;
  line-height: 1.3;
  font-weight: 800;
  letter-spacing: -0.05rem;
  margin: 1rem 0;
  `

export const DivOrganizadores = styled.div`
display: flex;
padding: 5rem;
`
export const DivOrganizador = styled.div`
  border: 3px solid #633CAE;
  border-radius: 6px;
  height: 500px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const RoundImage = styled.div`
border-radius: 50%;
width: 250px;
height: 250px;
overflow: hidden;
`

export const Container = styled.div`
display: flex;
max-width: 1080px;
margin: 0 auto;
justify-content: center;
flex-direction: column;
`;

export const AlignedDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;

export const PadDiv = styled.div`
margin-top: 1rem;
margin-bottom: 1rem;
`;

export const BlogSection = styled.section`
padding-top: 1rem;
padding-bottom: 1rem;
font-size: 1.2rem;
line-height: 1.5;
z-index: -1;
min-height: 85vh;
background: #83DEFF;
`;

export const BlogIntro = styled.h2`
color: #fff;
font-size: 2rem;
line-height: 1.3;
font-weight: 800;
text-align: center;
justify-content: center;
`;