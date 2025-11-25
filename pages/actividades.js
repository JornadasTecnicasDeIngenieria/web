import Layout from '@components/layouts/MainLayout';
import styled from '@emotion/styled';
import { Container } from '@mui/material';
import { EVENT_YEAR } from '../data/config';
import {
  TableCompeticionArcade,
  TableTrivial,
  TableVideojuegos,
  TableEscapeRoom,
  TableHorarioEscapeRoom,
} from '@components/ActivitiesTables';

const Actividades = () => {
  return (
    <Layout>
      <Section>
        <Container>
          <br />
          <br />
          <AlignedDiv>
            <Title>Actividades 2024</Title>
          </AlignedDiv>
          <AlignedDiv>
            <Hexagons>
              <HexagonB>⬢</HexagonB>
              <HexagonO>⬢</HexagonO>
              <HexagonY>⬢</HexagonY>
            </Hexagons>
          </AlignedDiv>
          <Category>Trivial</Category>
          <br />
          <DescriptionText>
            ¿Cuánto sabes realmente? Participa en nuestros emocionantes trivials
            y pon a prueba tus conocimientos. Compite respondiendo desafiantes
            preguntas de diversas temáticas, demuestra tu sabiduría y podrás
            ganar grandes premios.
          </DescriptionText>
          <DescriptionText>
            <Highlight>Lugar: </Highlight>Puesto central.
          </DescriptionText>
          <DescriptionText>
            <Highlight>Días: </Highlight>10 y 11 de Diciembre.
          </DescriptionText>
          <DescriptionText>
            <Highlight>Horario: </Highlight> 10:30 y 17:30.
          </DescriptionText>
          <br />
          <AlignedDiv>
            <TableTrivial />
          </AlignedDiv>
          <AlignedDiv>
            <Hexagons>
              <HexagonB>⬢</HexagonB>
              <HexagonO>⬢</HexagonO>
              <HexagonY>⬢</HexagonY>
            </Hexagons>
          </AlignedDiv>
          <Category>Escape Room</Category>
          <SubCategory>Ecos temporales</SubCategory>
          <br />
          <DescriptionText>
            Adéntrate en un emocionante Escape Room donde la ingeniería y el
            tiempo se entrelazan. Ponte en la piel de un equipo técnico enviado
            a reparar una misteriosa máquina capaz de viajar a través del
            tiempo. Un desbordamiento temporal amenaza con colapsar la línea del
            tiempo tal como la conocemos. ¿Podrás estabilizarla antes de que sea
            demasiado tarde? <Highlight>Equipos de cuatro personas</Highlight>{' '}
            pondrán a prueba su ingenio para resolver el enigma y escapar en el
            menor tiempo posible.
          </DescriptionText>
          <DescriptionText>
            <Highlight>Lugar: </Highlight>Puesto central
          </DescriptionText>
          <DescriptionText>
            <Highlight>Días: </Highlight>10 y 11 de Diciembre.
          </DescriptionText>
          <DescriptionText>
            <AlignedDiv>
              <TableHorarioEscapeRoom />
            </AlignedDiv>
          </DescriptionText>
          {/* <DescriptionText>
            <Highlight>Inscripción: </Highlight>
            <DescriptionLink href="https://forms.gle/cpkk1JPMz79JmA3L6">¡Click Aquí!</DescriptionLink>
          </DescriptionText> */}
          <br />
          <AlignedDiv>
            <TableEscapeRoom />
          </AlignedDiv>
          <AlignedDiv>
            <Hexagons>
              <HexagonB>⬢</HexagonB>
              <HexagonO>⬢</HexagonO>
              <HexagonY>⬢</HexagonY>
            </Hexagons>
          </AlignedDiv>
          <Category>Competición Arcade</Category>
          <br />
          <DescriptionText>
            Revive la nostalgia de los videojuegos clásicos en nuestra
            Competición Arcade. Enfréntate a desafíos en juegos como Tetris y
            nuestro exclusivo “Why God?”, además de juegos de fighting y
            diversos juegos arcade para pasar el rato. Cada zona cuenta con
            computadoras para una competición intensa. ¿Tienes lo necesario para
            ser campeón?
          </DescriptionText>
          <DescriptionText>
            <Highlight>Lugar: </Highlight>Delegación de Ingeniería Informática.
          </DescriptionText>
          <DescriptionText>
            <Highlight>Días: </Highlight>10 y 11 de Diciembre.
          </DescriptionText>
          <DescriptionText>
            <Highlight>Horario: </Highlight>10:00 - 17:30.
          </DescriptionText>
          <br />
          <AlignedDiv>
            <TableCompeticionArcade />
          </AlignedDiv>
          <AlignedDiv>
            <Hexagons>
              <HexagonB>⬢</HexagonB>
              <HexagonO>⬢</HexagonO>
              <HexagonY>⬢</HexagonY>
            </Hexagons>
          </AlignedDiv>
          <Category>Torneo de Videojuegos</Category>
          <SubCategory>Duelo de invocadores</SubCategory>
          <br />
          <DescriptionText>
            ¡Demuestra tus habilidades en el campo de batalla virtual con el
            Torneo de Videojuegos: Duelo de Invocadores! Compite en dos de los
            juegos más icónicos del universo gaming: Teamfight Tactics (TFT) y
            League of Legends (LoL)
          </DescriptionText>
          <DescriptionText>
            <Highlight>Lugar: </Highlight>Online.
          </DescriptionText>
          <DescriptionText>
            <Highlight>Día: </Highlight>14 de Diciembre.
          </DescriptionText>
          <DescriptionText>
            <Highlight>Horario: </Highlight>Por determinar dependiendo de la
            cantidad de participantes.
          </DescriptionText>
          {/* <DescriptionText>
            <Highlight>Inscripción: </Highlight>
            <DescriptionLink href="https://forms.gle/w8Fvm1qb3smdzuZ26">¡Click Aquí!</DescriptionLink>
          </DescriptionText> */}
          <br />
          <AlignedDiv>
            <TableVideojuegos />
          </AlignedDiv>
          <AlignedDiv>
            <Hexagons>
              <HexagonB>⬢</HexagonB>
              <HexagonO>⬢</HexagonO>
              <HexagonY>⬢</HexagonY>
            </Hexagons>
          </AlignedDiv>
          <Category>Sesión de Rol</Category>
          <br />
          <DescriptionText>
            Sumérgete en mundos de fantasía, ciencia ficción y aventuras épicas
            en una tarde dedicada al rol. Prepárate para vivir historias únicas
            y dar vida a personajes en situaciones inolvidables.
          </DescriptionText>
          <DescriptionText>
            <Highlight>Lugar: </Highlight>Delegación de Ingeniería Informática.
          </DescriptionText>
          <DescriptionText>
            <Highlight>Día: </Highlight>10 de Diciembre.
          </DescriptionText>
          <DescriptionText>
            <Highlight>Horario: </Highlight>16:00 - 20:00.
          </DescriptionText>
          {/* <DescriptionText>
            <Highlight>Inscripción: </Highlight>
            <DescriptionLink href="https://forms.gle/nErKFCRFdSDKtQtR8">¡Click Aquí!</DescriptionLink>
          </DescriptionText> */}
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

export default Actividades;

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
  :3.5rem;
  padding-right: 2rem;
  font-weight: 700;
  font-size: 130%;
`;

const HexagonB = styled.span`
  color: #83ddff;
  :3.5rem;
  padding-right: 2rem;
  font-weight: 700;
  font-size: 130%;
`;
