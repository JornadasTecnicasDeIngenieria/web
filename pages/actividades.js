import Layout from "@components/layouts/MainLayout";
import styled from "@emotion/styled";
import { Container } from "@mui/material";
import {
  TableSorteoLogros,
  TableSorteoStands,
  TableSorteoRedesSociales,
  TableCompeticionArcade,
  TableTrivial,
  TableBusquedaTesoro,
  TableConcursoStands,
  TableVideojuegos,
  TableEscapeRoom,
  TableHackaton,
  TableSesionRol,
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
          <Category>Sorteo por Logros</Category>
          <br />
          <DescriptionText>
            Realiza diversas actividades para ganar puntos y participa en
            sorteos increíbles. Desde retos de programación hasta cuestionarios,
            ¡cada logro cuenta!
          </DescriptionText>
          <DescriptionText>
            <Highlight>Lugar: </Highlight>Por determinar.
          </DescriptionText>
          <DescriptionText>
            <Highlight>Horario: </Highlight>Por determinar.
          </DescriptionText>
          <br />
          <AlignedDiv>
            <TableSorteoLogros />
          </AlignedDiv>
          <AlignedDiv>
            <Hexagons>
              <HexagonB>⬢</HexagonB>
              <HexagonO>⬢</HexagonO>
              <HexagonY>⬢</HexagonY>
            </Hexagons>
          </AlignedDiv>

          <Category>Sorteo por Stands</Category>
          <br />
          <DescriptionText>
            Participa en el sorteo al sellar y depositar tu papeleta. ¡La suerte
            puede estar de tu lado!
          </DescriptionText>
          <DescriptionText>
            <Highlight>Lugar: </Highlight>Por determinar.
          </DescriptionText>
          <DescriptionText>
            <Highlight>Horario: </Highlight>Por determinar.
          </DescriptionText>
          <br />
          <AlignedDiv>
            <TableSorteoStands />
          </AlignedDiv>
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
            Interactúa con nuestras redes sociales para ganar emocionantes
            premios.
          </DescriptionText>
          <DescriptionText>
            <Highlight>Lugar: </Highlight>Por determinar.
          </DescriptionText>
          <DescriptionText>
            <Highlight>Horario: </Highlight>Por determinar.
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

          <Category>Competición Arcade</Category>
          <br />
          <DescriptionText>
            Vive la nostalgia y la emoción de los videojuegos clásicos en
            nuestra Competición Arcade. Enfréntate a desafíos en juegos como
            Tetris, Pacman, Space Invaders y nuestro exclusivo "Why God?". Cada
            zona cuenta con computadoras para una competición intensa. ¿Tienes
            lo necesario para ser el campeón?
          </DescriptionText>
          <DescriptionText>
            <Highlight>Lugar: </Highlight>Por determinar.
          </DescriptionText>
          <DescriptionText>
            <Highlight>Horario: </Highlight>Por determinar.
          </DescriptionText>
          <DescriptionText>
            <Highlight>Juegos: </Highlight>Por determinar.
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

          <Category>Trivials</Category>
          <br />
          <DescriptionText>
            <ul>
              <DescriptionListElement>
                Trivial de Empresa: Pon a prueba tus conocimientos sobre las
                empresas participantes.
              </DescriptionListElement>
              <DescriptionListElement>
                Trivial General: Un desafío para los amantes de todas las
                ingenierías.
              </DescriptionListElement>
            </ul>
          </DescriptionText>
          <DescriptionText>
            <Highlight>Lugar: </Highlight>Por determinar.
          </DescriptionText>
          <DescriptionText>
            <Highlight>Horario: </Highlight>
          </DescriptionText>
          <ul>
            <DescriptionListElement>
              6 de febrero: Por determinar.
            </DescriptionListElement>
            <DescriptionListElement>
              7 de febrero: Por determinar.
            </DescriptionListElement>
          </ul>
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

          <Category>Búsqueda del Tesoro</Category>
          <br />
          <DescriptionText>
            Sumérgete en una emocionante aventura explorando todos los rincones
            de la ESIT en busca de pistas. Forma un equipo de hasta 4 personas y
            descifra el código que te llevará al tesoro. ¡Pero cuidado! Las
            pistas se revelarán minutos antes de que comience la búsqueda para
            mantener el misterio.
          </DescriptionText>
          <DescriptionText>
            <Highlight>Lugar: </Highlight>Por determinar.
          </DescriptionText>
          <DescriptionText>
            <Highlight>Horario: </Highlight>Por determinar.
          </DescriptionText>
          <br />
          <AlignedDiv>
            <TableBusquedaTesoro />
          </AlignedDiv>
          <AlignedDiv>
            <Hexagons>
              <HexagonB>⬢</HexagonB>
              <HexagonO>⬢</HexagonO>
              <HexagonY>⬢</HexagonY>
            </Hexagons>
          </AlignedDiv>

          <Category>Escape Room: El Laboratorio Químico</Category>
          <br />
          <DescriptionText>
            ¡Adéntrate en un emocionante Escape Room ambientado en un
            laboratorio de química! Imagina que un vial tóxico se ha roto, y tu
            misión es encontrar la llave de emergencia y salir antes de que el
            tiempo se agote. Equipos de cuatro personas competirán por el mejor
            tiempo de escape.
          </DescriptionText>
          <DescriptionText>
            <Highlight>Lugar: </Highlight>Por determinar.
          </DescriptionText>
          <DescriptionText>
            <Highlight>Horario: </Highlight>Por determinar.
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

          <Category>Concurso del Mejor Stand</Category>
          <br />
          <DescriptionText>
            Reconoce la creatividad y la innovación. Vota por tu stand favorito
            entre las empresas participantes. ¡Y participa para ganar premios
            increíbles! La votación se realiza a través de una encuesta de
            Google, y al final del evento, anunciaremos los ganadores y
            realizaremos el sorteo de premios para los votantes.
          </DescriptionText>
          <DescriptionText>
            <Highlight>Lugar: </Highlight>Por determinar.
          </DescriptionText>
          <DescriptionText>
            <Highlight>Horario: </Highlight>Por determinar.
          </DescriptionText>
          <br />
          <AlignedDiv>
            <TableConcursoStands />
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
            y Teamfight Tactics (TFT). Desde enfrentamientos épicos en el LoL
            hasta estrategias brillantes en TFT, ¿tienes lo necesario para ser
            el campeón?
          </DescriptionText>
          <DescriptionText>
            <Highlight>Lugar: </Highlight>Por determinar.
          </DescriptionText>
          <DescriptionText>
            <Highlight>Horario: </Highlight>Por determinar.
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

          <Category>Hackatón</Category>
          <br />
          <DescriptionText>
            Demuestra tu habilidad en programación resolviendo problemas del
            mundo real. Forma equipos de 3 a 5 personas y compite para resolver
            la mayor cantidad de desafíos correctamente. ¡La eficiencia y la
            resolución son clave para la victoria!
          </DescriptionText>
          <DescriptionText>
            <Highlight>Lugar: </Highlight>Por determinar.
          </DescriptionText>
          <DescriptionText>
            <Highlight>Horario: </Highlight>Por determinar.
          </DescriptionText>
          <br />
          <AlignedDiv>
            <TableHackaton />
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
            Únete a una tarde llena de imaginación y estrategia. Participa en
            partidas de rol, desde D&D 5e hasta Call of Cthulhu. Colaboramos con
            Sabadospararoleros.spr para ofrecer una experiencia única.
            ¡Prepárate para sumergirte en mundos fantásticos!
          </DescriptionText>
          <DescriptionText>
            <Highlight>Lugar: </Highlight>Por determinar.
          </DescriptionText>
          <DescriptionText>
            <Highlight>Horario: </Highlight>Por determinar.
          </DescriptionText>
          <br />
          <AlignedDiv>
            <TableSesionRol />
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
