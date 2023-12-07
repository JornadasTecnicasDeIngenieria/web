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
            Esta actividad te invita a participar en una variedad de desafíos
            para acumular puntos. Desde retos de programación hasta
            cuestionarios, cada logro que completes te otorgará puntos que
            podrás canjear por entradas para nuestro sorteo. ¡Cada logro cuenta,
            así que no dudes en participar en todos los desafíos que puedas!
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
            Revive la nostalgia de los videojuegos clásicos en nuestra
            Competición Arcade. Enfréntate a desafíos en juegos como Tetris,
            Pacman, Space Invaders y nuestro exclusivo “Why God?”. Cada zona
            cuenta con computadoras para una competición intensa. ¿Tienes lo
            necesario para ser el campeón?
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
                Trivial de Empresa: ¿Cuánto sabes sobre las empresas
                participantes? Participa en nuestro Trivial de Empresa y pon a
                prueba tus conocimientos. Podrás aprender más sobre las empresas
                mientras te diviertes y compites por premios.
              </DescriptionListElement>
              <DescriptionListElement>
                Trivial General: Este es un desafío para los amantes de todas
                las ingenierías. Participa en nuestro Trivial General y
                demuestra tus conocimientos en una amplia gama de temas de
                ingeniería.
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
            Embárcate en una emocionante aventura explorando todos los rincones
            de la ESIT en busca de pistas. Forma un equipo de hasta 4 personas y
            descifra el código que te llevará al tesoro. Pero ten cuidado, las
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
            Adéntrate en un emocionante Escape Room ambientado en un laboratorio
            de química. Imagina que un vial tóxico se ha roto y tu misión es
            encontrar la llave de emergencia y salir antes de que el tiempo se
            agote. Equipos de cuatro personas competirán por el mejor tiempo de
            escape.
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
            Reconoce la creatividad y la innovación votando por tu stand
            favorito entre las empresas participantes. Participa en la votación
            a través de una encuesta de Google y podrías ganar premios
            increíbles. Al final del evento, anunciaremos los ganadores y
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
            y Teamfight Tactics (TFT). Participa en enfrentamientos épicos en
            LoL o muestra tus estrategias brillantes en TFT. ¿Tienes lo
            necesario para ser el campeón?
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
            Demuestra tu habilidad en resolución de problemas del mundo real.
            Forma equipos de 3 a 5 personas y compite para resolver la mayor
            cantidad de desafíos correctamente. La eficiencia y la resolución
            son clave para la victoria. ¡Buena suerte!
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
            Prepárate para una tarde llena de imaginación y estrategia. En
            colaboración con Sabadospararoleros, te invitamos a participar en
            emocionantes partidas de rol, desde Dungeons & Dragons 5e hasta Call
            of Cthulhu. Sumérgete en mundos fantásticos y vive aventuras
            inolvidables junto a tus compañeros de juego.
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
