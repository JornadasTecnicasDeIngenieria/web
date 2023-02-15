import Layout from "../components/layouts/MainLayout";
import IntroSection from "../components/IntroSection";
import styled from "@emotion/styled";
import { Grid, Container } from "@mui/material";
import { TableMartes, TableMiercoles } from "../components/Table";
import { ponenciasmartes, ponenciasmiercoles } from "../data/ponencias";

import { useState } from "react";

const Ponencias = () => {
  return (
    <Layout>
      <IntroSection
        title="Ponencias del evento"
        desc="Descubre las diferentes ponencias y su planificación horaria"
      />
      <Container>
        <Category>Formato de las ponencias</Category>
        <br />
        <p>
          Habrán ponencias de cada una de las cuatro ingenierías de manera
          simultánea. En ellas se podrá tratar cualquier aspecto relacionado con
          el funcionamiento de la compañía, sus proyectos o las oportunidades
          laborales que ofrece.
        </p>
        <Category>Listado de ponencias</Category>
        <p>
          A continuación se muestran las tablas con la planificación horaria de
          cada una de las ponencias. ¡No dudes en visitar las que más te
          interesen!
        </p>
        <p>
          Además, si asistes a más del 80% de ponencias y mesas redondas y
          rellenas los formularios, podrás llevarte 1 crédito ECTS.
        </p>
        <Day>Martes 15 de Febrero</Day>
        <br />
        <TableMartes />
        <br />
        <Day>Miércoles 16 de Febrero</Day>
        <br />
        <TableMiercoles />
        <br />
      </Container>
    </Layout>
  );
};

export default Ponencias;

const Category = styled.h2`
  color: #633cae;
  font-size: 3rem;
  font-weight: 700;
  font-family: "Montserrat";
`;

const Day = styled.h3`
  color: #633cae;
  font-size: 2rem;
  font-weight: 400;
  font-family: "Montserrat";
`;
