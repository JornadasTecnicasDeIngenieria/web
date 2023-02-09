import Layout from "./components/layouts/MainLayout";
import IntroSection from "./components/IntroSection";
import styled from "@emotion/styled";
import { Grid, Container } from "@mui/material";
import Image from "next/legacy/image";

import { useState } from "react";

const Stands = () => {
  return (
    <Layout>
      <IntroSection
        title="Talleres"
        desc="Talleres formativos que tendrán lugar la semana del 21 de febrero."
      />
      <Container>
        <br />
        {/*<Table content={talleres} />*/}
        <br />
        <Category>Sobre los talleres</Category>
        <p>
          Los talleres se realizarán en el aula de la delegación de estudiantes
          (Planta 1 del edificio).
        </p>
        <p>
          Para acudir a los mismos, es necesario cumplimentar el formulario de
          inscripción de cada uno.
        </p>
        <p>
          Si no pudiera acudir, agradeceríamos enviara un correo a la dirección{" "}
          <a href="mailto:jtiesit@ull.edu.es">jtiesit@ull.edu.es</a> con el
          asunto «Baja Taller» y nos indique en el cuerpo del mensaje su nombre
          completo y el nombre del taller del que desea darse de baja.
        </p>

        <Category>Lista de Talleres</Category>

        <Day>Taller de emprendeduría de empresas tecnológicas</Day>
        <Author>Cámara de Comercio - Juan Carlos González</Author>
        <small>
          <b>Lunes 21 a las 16:00.</b>{" "}
        </small>
        <ShortSpace />
        <small>(Duración estimada 1 h)</small>
        <Desc>
          ¿Quieres emprender y crear tu propia empresa? Si es así, este taller
          patrocinado por la Cámara de Comercio es el adecuado para ti.
        </Desc>
        <a
          href="https://forms.gle/XFYizY2PyXFeBUne9"
          target="_blank noreferrer"
        >
          Formulario de inscripción
        </a>

        <br />
        <br />

        <Day>Taller de Linkedin</Day>
        <Author>ITOP - Belén Hernández</Author>
        <small>
          <b>Martes 22 a las 16:00.</b>
        </small>
        <ShortSpace />
        <small>(Duración estimada 1 h - 1,5 h)</small>
        <Desc>
          LinkedIn es una comunidad social para negocios, empresas, personas que
          buscan/ofrecen trabajo, en definitiva un lugar donde podemos construir
          nuestras propias audiencias. LinkedIn te dará la oportunidad de
          ampliar tu red de contactos y poner en práctica
          &ldquo;networking&rdquo; con las empresas que cumplan con tu perfil de
          empresa ideal.
        </Desc>
        <p>
          Con este taller, dentro de las Jornadas Técnicas de Ingeniería,
          pretendemos ayudar a todas aquellos alumnos que, actualmente se
          encuentren cursando o finalizando estudios en la Escuela Superior de
          Ingeniería y Tecnología, o bien iniciando una búsqueda de empleo, a
          cómo optimizar su perfil para sacarle el mayor rendimiento posible.
        </p>
        <a
          href="https://forms.gle/cuvKAFqQTCCZxhjs9"
          target="_blank noreferrer"
        >
          Formulario de inscripción
        </a>

        <br />
        <br />

        <Day>Cómo programar a prueba de balas</Day>
        <Author>
          Acid Tango - Fernando García, Héctor Martín, Daniel Ramos
        </Author>
        <small>
          <b>Miércoles 23 a las 16:00.</b>{" "}
        </small>
        <ShortSpace />
        <small>(Duración estimada 1,5 h - 2 h)</small>
        <Desc>
          En este taller veremos una introducción a TDD, y veremos cómo nos
          puede ayudar a crear un software más robusto y con mayor calidad.
        </Desc>
        <a
          href="https://forms.gle/U4mjxbFkJWmFksfz7"
          target="_blank noreferrer"
        >
          Formulario de inscripción
        </a>

        <br />
        <br />

        <Day>Taller de preparación de currículum</Day>
        <Author>Cámara de Comercio - Juan Carlos González</Author>
        <small>
          <b>Jueves 24 a las 16:00.</b>
        </small>
        <ShortSpace />
        <small>(Duración estimada 1 h)</small>
        <Desc>
          Nuevos formatos y competencias en los CV actuales. Curriculum 2.0,
          Curriculum Europeo, Curriculum on line (perfiles profesionales en
          redes tipo Linkedin). Herramientas útiles.
        </Desc>
        <a
          href="https://forms.gle/AVbdWgrQVbCDBwXj7"
          target="_blank noreferrer"
        >
          Formulario de inscripción
        </a>

        <br />
        <br />

        <Day>Taller de entrevistas de trabajo</Day>
        <Author>Cámara de Comercio - Juan Carlos González</Author>
        <small>
          <b>Jueves 24 a las 17:15.</b>
        </small>
        <ShortSpace />
        <small>(Duración estimada 1 h)</small>
        <Desc>
          saber &ldquo;vender&rdquo; tu candidatura a la empresa demostrando que
          tus aptitudes, conocimiento, habilidades y experiencia son las idóneas
          para ocupar la vacante. Errores más habituales que se pueden producir
          en las entrevistas de trabajo o en los procesos de selección. Consejos
          útiles.
        </Desc>
        <a
          href="https://forms.gle/g1jXhKAienr8d2mTA"
          target="_blank noreferrer"
        >
          Formulario de inscripción
        </a>
        <br />

        <br />
      </Container>
    </Layout>
  );
};

export default Stands;

const Category = styled.h2`
  color: #633cae;
  font-size: 3rem;
  font-weight: 700;
`;

const Day = styled.h3`
  color: #633cae;
  font-size: 2rem;
  font-weight: 400;
`;

const Author = styled.h4`
  color: #633cae;
  font-size: 1.3rem;
  font-weight: 400;
`;

const AlignedDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ShortSpace = styled.br`
  height: 0.5rem;
`;

const Desc = styled.p`
  padding-top: 1rem;
  padding-bottom: -1.5rem;
`;
