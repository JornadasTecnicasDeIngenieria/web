import Layout from "@components/layouts/MainLayout";
import styled from "@emotion/styled";
import { Container } from "@mui/material";
import { EVENT_YEAR } from "../data/config";
import {
  TableCompeticionArcade,
  TableTrivial,
  TableHorarioTrivial,
  TableVideojuegos,
  TableEscapeRoom,
  TableHorarioEscapeRoom,
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
          <SubCategory>Cuestionando la Ingeniería</SubCategory>
          <br />
          <DescriptionText>
            ¡Pon a prueba tu ingenio y participa en Cuestionando la Ingeniería,
            la actividad que desafía tus conocimientos técnicos y te permite
            competir por el podio! ¡Éste año con extra de ingeniería!
          </DescriptionText>
          <DescriptionText>
            <Highlight>Lugar: </Highlight>Puesto central.
          </DescriptionText>
          <DescriptionText>
            <Highlight>Días: </Highlight>10 y 11 de Diciembre.
          </DescriptionText>
          <br />
          <AlignedDiv>
            <TableHorarioTrivial />
          </AlignedDiv>
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
          <SubCategory>Jardines de Osiris</SubCategory>
          <br />
          <DescriptionText>
            En Jardines de Osiris despiertas en un taller que parece haber
            estado aguardando tu llegada. Desde el primer instante, la
            instrucción es clara: debéis obedecer al Doctor. Él insiste en que
            os ha creado, que sois clones, que conoce vuestra función… y que, si
            cumplís correctamente las pruebas, podréis ascender al Paraíso.
            Guiados por él, cada tarea pondrá a prueba vuestro ingenio, vuestra
            cooperación y vuestra capacidad para actuar según sus directrices
            mientras el taller responde, se transforma y revela nuevas etapas
            del recorrido… a veces, incluso algunas que nadie había mencionado.
            Por supuesto, lo más sensato siempre es seguir obedeciendo, es el
            único camino que conduce al Paraíso o, en su defecto, a una
            salida... ¿no?
          </DescriptionText>
          <DescriptionText>
            <Highlight>Equipos de cuatro</Highlight> deberán demostrar su
            destreza, superar cada prueba y avanzar juntos hacia ese destino
            prometido. ¿Estáis preparados para saber si sois dignos?
          </DescriptionText>
          <DescriptionText>
            <Highlight>Lugar: </Highlight>Puesto central
          </DescriptionText>
          <DescriptionText>
            <Highlight>Días: </Highlight>10 y 11 de Diciembre.
          </DescriptionText>
          <AlignedDiv>
            <TableHorarioEscapeRoom />
          </AlignedDiv>
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
          <SubCategory>Retro Rumble</SubCategory>
          <br />
          <DescriptionText>
            Revive la nostalgia de los videojuegos clásicos en nuestra
            Competición Arcade. Enfréntate a desafíos en juegos como Tetris,
            Pac-Man o Galaga y gana premios por ser el mejor en ellos. También
            podrás pasar el rato jugando juegos de fighting retro con tus
            amigos. ¿Tienes lo necesario para ser el campeón?
          </DescriptionText>
          <DescriptionText>
            <Highlight>Lugar: </Highlight>Delegación de Estudiantes de
            Ingeniería Informática.
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
          <SubCategory>Operación Pentakill</SubCategory>
          <br />
          <DescriptionText>
            ¡Demuestra tus habilidades en el campo de batalla virtual con el
            Torneo de Videojuegos: Operación Pentakill! Compite en el torneo 5
            contra 5 en el videojuego League of Legends (LoL) para alzarte con
            la victoria y repartiros una suculenta recompensa entre los miembros
            del equipo vencedor.
          </DescriptionText>
          <DescriptionText>
            <Highlight>Lugar: </Highlight>Online.
          </DescriptionText>
          <DescriptionText>
            <Highlight>Día: </Highlight>13 de Diciembre.
          </DescriptionText>
          <DescriptionText>
            <Highlight>Horario: </Highlight>Por determinar, dependiendo de la
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
          <SubCategory>Dumbs and Dice</SubCategory>
          <br />
          <DescriptionText>
            Sumérgete en mundos de fantasía, ciencia ficción y aventuras épicas
            con Dumbs and Dice, una tarde dedicada al rol. Prepárate para vivir
            historias únicas y dar vida a personajes en situaciones
            inolvidables.
          </DescriptionText>
          <DescriptionText>
            <Highlight>Lugar: </Highlight>Delegación de Estudiantes de
            Ingenierías Industriales.
          </DescriptionText>
          <DescriptionText>
            <Highlight>Día: </Highlight>11 de Diciembre.
          </DescriptionText>
          <DescriptionText>
            <Highlight>Horario: </Highlight>14:45 - 18:45.
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
