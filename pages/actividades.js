import Layout from "@components/layouts/MainLayout";
import styled from "@emotion/styled";
import { Container } from "@mui/material";
import {
  TableSorteoLogros,
  TableSorteoStands,
  TableSorteoRedesSociales,
  TableCompeticionArcade,
  TableTrivial,
  TableVideojuegos,
  TableEscapeRoom,
} from "@components/ActivitiesTables";

const Actividades = () => {
  return (
    <Layout>
      <Section>
        <Container>
          <br />
          <br />
          <AlignedDiv>
            <Title>Actividades</Title>
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
          <ul>
            <DescriptionListElement>
              ¿Cuánto sabes realmente? Participa en nuestros emocionantes
              trivials y pon a prueba tus conocimientos. Compite respondiendo
              desafiantes preguntas de diversas temáticas, demuestra tu
              sabiduría y podrás ganar grandes premios.
            </DescriptionListElement>
          </ul>
          <DescriptionText>
            <Highlight>Lugar: </Highlight>Puesto central.
          </DescriptionText>
          <DescriptionText>
            <Highlight>Días: </Highlight>10 y 11 de Diciembre.
          </DescriptionText>
          <DescriptionText>
            <Highlight>Horario: </Highlight> Próximamente
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
          <SubCategory>???</SubCategory>
          <br />
          <DescriptionText>
            Adéntrate en un emocionante Escape Room ambientado en una misión de
            colonización espacial. Imagina que eres un tripulante de una nave de
            colonización espacial y te han despertado antes de tiempo porque ha
            sucedido algo que podría poner en peligro a los miles de habitantes
            de la nave. ¿Podrás salvarlos a todos? Equipos de cuatro personas
            competirán por el mejor tiempo de escape.
          </DescriptionText>
          <DescriptionText>
            <Highlight>Lugar: </Highlight>Puesto central
          </DescriptionText>
          <DescriptionText>
            <Highlight>Días: </Highlight>10 y 11 de Diciembre.
          </DescriptionText>
          <DescriptionText>
            <Highlight>Horario: </Highlight> Próximamente
          </DescriptionText>
          <DescriptionText>
            <Highlight>Inscripción: </Highlight> Próximamente
            {/* <DescriptionLink href="https://forms.gle/SKrDKKMdXBV7EVdw6">
              ¡Click Aquí!
            </DescriptionLink> */}
          </DescriptionText>
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
            Competición Arcade. Enfréntate a desafíos en juegos como Tetris,
            Pacman y nuestro exclusivo “Why God?”. Cada zona cuenta con
            computadoras para una competición intensa. ¿Tienes lo necesario para
            ser el campeón?
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
          <br />
          <DescriptionText>
            Demuestra tus habilidades en los torneos de League of Legends (LoL)
            y Teamfight Tactics (TFT). Participa en enfrentamientos épicos en
            LoL o muestra tus estrategias brillantes en TFT. ¿Tienes lo
            necesario para ser el campeón?
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
          <DescriptionText>
            <Highlight>Inscripción: </Highlight> Próximamente
            {/* <DescriptionLink href="https://forms.gle/6z6LcAoRiJCsaxuSA">
              ¡Click Aquí!
            </DescriptionLink> */}
          </DescriptionText>
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
            Prepárate para una tarde llena de imaginación y estrategia. En
            colaboración con Sabadospararoleros, te invitamos a participar en
            emocionantes partidas de rol, desde Dungeons & Dragons 5e hasta Call
            of Cthulhu. Sumérgete en mundos fantásticos y vive aventuras
            inolvidables junto a tus compañeros de juego.
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

