import {
  TableSorteoPrevioRedesSociales,
  TableSorteoDuranteRedesSociales,
  TableSorteoStands,
} from '@components/ActivitiesTables';
import Layout from '@components/layouts/MainLayout';
import styled from '@emotion/styled';
import { Container } from '@mui/material';

const Sorteos = () => {
  return (
    <Layout>
      <Section>
        <Container>
          <br />
          <br />
          <AlignedDiv>
            <Title>Sorteos 2024</Title>
          </AlignedDiv>
          <AlignedDiv>
            <Hexagons>
              <HexagonB>⬢</HexagonB>
              <HexagonO>⬢</HexagonO>
              <HexagonY>⬢</HexagonY>
            </Hexagons>
          </AlignedDiv>
          <Category>Sorteo diario</Category>
          <br />
          <DescriptionText>
            ¡El gran sorteo! El momento más esperado del día, donde no solo se entregan los premios principales, sino
            también el resto de reconocimientos del evento. ¿Quieres participar y tener la oportunidad de ganar grandes
            recompensas? ¡Consigue rifas y únete al Festival de Fortuna!
            <br />
            <br />
            <ul>
              <Highlight>¿Cómo puedes conseguir rifas?</Highlight>
              <br />
              <ul>
                <li>
                  {' '}
                  Explorando los stands: Por cada 4 sellos que consigas visitando los stands, obtendrás 1 rifa (máximo 3
                  rifas).{' '}
                </li>
                <br />
                <li>
                  {' '}
                  Votando en el concurso Stand-Out: Participa votando por tu stand favorito y obtén una rifa adicional.
                  Más info debajo.{' '}
                </li>
                <br />
                <li>
                  {' '}
                  Completando las preguntas a empresas: Por completar el folleto de preguntas te llevarás también 1
                  rifa. Más info debajo.{' '}
                </li>
              </ul>
              <br />
            </ul>
          </DescriptionText>
          <DescriptionText>
            <Highlight>Lugar: </Highlight>Entrega del premio en el puesto central.
          </DescriptionText>
          <DescriptionText>
            <Highlight>Días: </Highlight>10 y 11 de Diciembre.
          </DescriptionText>
          <DescriptionText>
            <Highlight>Hora: </Highlight>18:00.
          </DescriptionText>
          <br />
          <AlignedDiv>
            <TableSorteoStands />
          </AlignedDiv>
          <br />
          <DescriptionText>
            <Highlight>Aviso: </Highlight>Solo se puede ganar un premio por persona y por día.
          </DescriptionText>
          <AlignedDiv>
            <Hexagons>
              <HexagonB>⬢</HexagonB>
              <HexagonO>⬢</HexagonO>
              <HexagonY>⬢</HexagonY>
            </Hexagons>
          </AlignedDiv>
          <Category>Concurso del Mejor Stand</Category>
          <SubCategory>Stand-out</SubCategory>
          <br />
          <DescriptionText>
            ¡Participa en Stand-Out, el concurso al mejor stand de las Jornadas Técnicas! Durante ambos días, los
            asistentes podrán explorar los stands, descubrir proyectos innovadores y votar por su stand favorito. ¡Haz
            que tu elección destaque y contribuye a premiar la creatividad y el ingenio! ¿Qué stand se llevará el título
            este año? ¡Tú decides!
            <br />
            <br />
            <Highlight>Conseguirás rifas para el sorteo diario</Highlight>
          </DescriptionText>
          <DescriptionText>
            <Highlight>Lugar: </Highlight>Entrega de premio y rifas en el puesto central.
          </DescriptionText>
          <DescriptionText>
            <Highlight>Días: </Highlight>10 y 11 de Diciembre.
          </DescriptionText>
          <DescriptionText>
            <Highlight>Hora de la entrega de rifas: </Highlight>A partir de las 16:30
            <br />
            <Highlight>Hora de entrega del premio: </Highlight>18:00
          </DescriptionText>
          {/* <DescriptionText>
            <Highlight>Martes 10: </Highlight>
            <DescriptionLink href="https://forms.gle/3jynwqqjL62G1hbr6">¡Click Aquí!</DescriptionLink>
          </DescriptionText> */}
          {/* <DescriptionText>
            <Highlight>Miércoles 11: </Highlight>
            <DescriptionLink href="https://forms.gle/KrLUn98yFMbz5Tno6">¡Click Aquí!</DescriptionLink>
          </DescriptionText> */}
          <AlignedDiv>
            <Hexagons>
              <HexagonB>⬢</HexagonB>
              <HexagonO>⬢</HexagonO>
              <HexagonY>⬢</HexagonY>
            </Hexagons>
          </AlignedDiv>
          <Category>Preguntas a las empresas</Category>
          <br />
          <DescriptionText>
            Explora, investiga y conecta con las empresas participantes. Rellena el folleto con tus preguntas a las
            compañías presentes y descubre más sobre sus proyectos, innovaciones y oportunidades. Cada folleto
            completado te dará una participación para el emocionante gran sorteo de premios de las Jornadas. ¡Haz tus
            preguntas, participa y prepárate para ganar!
            <br />
            <br />
            <Highlight>Conseguirás rifas para el sorteo diario</Highlight>
          </DescriptionText>
          <DescriptionText>
            <Highlight>Lugar: </Highlight>Entrega de premio y rifas en el puesto central.
          </DescriptionText>
          <DescriptionText>
            <Highlight>Días: </Highlight>10 y 11 de Diciembre.
          </DescriptionText>
          <DescriptionText>
            <Highlight>Hora de la entrega de rifas: </Highlight>A partir de las 16:30
            <br />
            <Highlight>Hora de entrega del premio: </Highlight>18:00
          </DescriptionText>
          <AlignedDiv>
            <Hexagons>
              <HexagonB>⬢</HexagonB>
              <HexagonO>⬢</HexagonO>
              <HexagonY>⬢</HexagonY>
            </Hexagons>
          </AlignedDiv>
          <Category>Sorteos por Redes Sociales</Category>
          <br />
          <DescriptionText>
            Durante los dos días de las Jornadas, interactúa en Instagram o Tiktok. Al final del segundo día,
            realizaremos un sorteo a través de una plataforma especializada entre todas las personas que hayan
            participado. <Highlight>¡Pero eso no es todo! </Highlight>
            Antes de que comiencen las Jornadas, se realizarán un sorteo previo para premiar la anticipación de nuestra
            comunidad. Mantente atento a nuestras redes para conocer los detalles y las fechas exactas. ¡No pierdas la
            oportunidad
          </DescriptionText>
          <DescriptionText>
            <Highlight>Enlace: </Highlight>{' '}
            <DescriptionLink href="https://linktr.ee/jtiesit">¡Click Aquí!</DescriptionLink>
          </DescriptionText>
          <DescriptionText>
            <Highlight>Lugar: </Highlight>Entrega del premio en puesto central.
          </DescriptionText>
          <DescriptionText>
            <Highlight>Entrega premios sorteo previo: </Highlight>10 de Diciembre.
          </DescriptionText>
          <DescriptionText>
            <Highlight>Entrega premios sorteo durante: </Highlight>11 de Diciembre.
          </DescriptionText>
          <DescriptionText>
            <Highlight>Hora: </Highlight>18:00
          </DescriptionText>
          <br />
          <AlignedDiv>
            <TableSorteoPrevioRedesSociales />
          </AlignedDiv>
          <br />
          <AlignedDiv>
            <TableSorteoDuranteRedesSociales />
          </AlignedDiv>
          <br />
          <DescriptionText>
            <Highlight>Aviso: </Highlight>Una misma persona no puede ganar en ambas redes sociales.
          </DescriptionText>
          <AlignedDiv>
            <Hexagons>
              <HexagonB>⬢</HexagonB>
              <HexagonO>⬢</HexagonO>
              <HexagonY>⬢</HexagonY>
            </Hexagons>
          </AlignedDiv>
        </Container>
      </Section>
    </Layout>
  );
};

export default Sorteos;

const AlignedDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Section = styled.div`
  background-color: #3c3c54;
`;

const Title = styled.h2`
  color: #ffffff;
  font-weight: 900;
`;

const Category = styled.h3`
  color: #ffffff;
  font-weight: 700;
  font-family: 'Montserrat', sans-serif;
`;

const SubCategory = styled.h4`
  color: #ffffff;
  font-weight: 600;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
`;

const DescriptionText = styled.p`
  color: #ffffff;
  font-weight: 500;
  font-family: 'Montserrat';
`;

const DescriptionLink = styled.a`
  color: #ffffff;
  font-weight: 500;
  font-family: 'Montserrat';
`;

const DescriptionListElement = styled.li`
  color: #ffffff;
  font-weight: 500;
  font-family: 'Montserrat';
`;

const Highlight = styled.span`
  color: #ffffff;
  font-weight: 700;
  font-family: 'Montserrat';
`;

const Hexagons = styled.h3`
  padding: 2rem;
  font-weight: 700;
`;

const HexagonY = styled.span`
  color: #ffeb83;
  font-weight: 700;
  font-size: 130%;
`;

const HexagonO = styled.span`
  color: #ff645f;
  :3.5rem ;
  padding-right: 2rem;
  font-weight: 700;
  font-size: 130%;
`;

const HexagonB = styled.span`
  color: #83ddff;
  :3.5rem ;
  padding-right: 2rem;
  font-weight: 700;
  font-size: 130%;
`;

//
