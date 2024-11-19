import {TableBusquedaTesoro, TableCompeticionArcade, TableConcursoStands, TableEscapeRoom, TableHackaton, TableSesionRol, TableSorteoLogros, TableSorteoRedesSociales, TableSorteoStands, TableTrivial, TableVideojuegos,} from '@components/ActivitiesTables';
import Layout from '@components/layouts/MainLayout';
import styled from '@emotion/styled';
import {Container} from '@mui/material';

const Sorteos = () => {
  return (
    <Layout>
      <Section>
        <Container>
          <br />
          <br />
          <AlignedDiv>
            <Title>Sorteos</Title>
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
            En esta actividad, tendrás la oportunidad de participar en un sorteo
            visitando nuestros stands en el evento. Al llegar a cada stand,
            recibirás una papeleta que deberás sellar y depositar en una urna.
            Al final del evento, se realizará un sorteo entre todas las
            papeletas depositadas y podrías ser el afortunado ganador. Recuerda,
            cada stand que visites es una oportunidad adicional para ganar, así
            que asegúrate de visitarlos todos. ¡La suerte puede estar de tu
            lado!
          </DescriptionText>
          <DescriptionText>
            <Highlight>Lugar: </Highlight>Entrega del premio en el puesto
            central.
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
            <Highlight>Aviso: </Highlight>Solo se puede ganar un premio por
            persona y por día.
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
            Reconoce la creatividad y la innovación votando por tu stand
            favorito entre las empresas participantes. Participa en la votación
            a través de una encuesta de Google y conseguirás rifas para ganar
            premios increíbles.
          </DescriptionText>
          <DescriptionText>
            <Highlight>Lugar: </Highlight>Entrega de premio y rifas en el puesto
            central.
          </DescriptionText>
          <DescriptionText>
            <Highlight>Días: </Highlight>10 y 11 de Diciembre.
          </DescriptionText>
          <DescriptionText>
          <Highlight>Hora de la entrega de rifas: </Highlight>A partir de las
          16:30
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
            Esta actividad te brinda la oportunidad de ganar premios
            emocionantes simplemente interactuando con nuestras redes sociales.
            Puedes participar siguiéndonos en nuestras redes sociales,
            compartiendo nuestras publicaciones, etiquetando a tus amigos, o
            incluso publicando contenido relacionado con el evento. Cada
            interacción cuenta como una entrada para el sorteo, por lo que
            cuantas más interacciones realices, más posibilidades tendrás de
            ganar.
          </DescriptionText>
          <DescriptionText>
            <Highlight>Lugar: </Highlight>Entrega del premio en puesto central.
          </DescriptionText>
          <DescriptionText>
            <Highlight>Día: </Highlight>11 de Diciembre.
          </DescriptionText>
          <DescriptionText>
            <Highlight>Hora: </Highlight>18:00
          </DescriptionText>
          <br />
          <AlignedDiv>
            <TableSorteoRedesSociales />
          </AlignedDiv>
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
  font-family: "Montserrat", sans-serif;
`;

const SubCategory = styled.h4`
  color: #ffffff;
  font-weight: 600;
  text-align: center;
  font-family: "Montserrat", sans-serif;
`;

const DescriptionText = styled.p`
  color: #ffffff;
  font-weight: 500;
  font-family: "Montserrat";
`;

const DescriptionLink = styled.a`
  color: #ffffff;
  font-weight: 500;
  font-family: "Montserrat";
`;

const DescriptionListElement = styled.li`
  color: #ffffff;
  font-weight: 500;
  font-family: "Montserrat";
`;

const Highlight = styled.span`
  color: #ffffff;
  font-weight: 700;
  font-family: "Montserrat";
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
