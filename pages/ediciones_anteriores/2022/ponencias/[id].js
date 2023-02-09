import { DatosPonencias, DatosPonenciasList } from "data/ponencias";
import styled from "@emotion/styled";
import Layout from "../../components/layouts/MainLayout";
import { IntroSectionShort } from "../components/IntroSection";
import { Grid, Container } from "@mui/material";
import { useRouter } from "next/router";
import Image from "next/legacy/image";
import { AlignedDiv } from "../components/StyledComponents";
import { getAllDataIds, getRawData } from "../lib/ponencias";
//<IntroSectionShort title={rawData.jsonData[id].titulo !== "" ? rawData.jsonData[id].titulo : rawData.jsonData[id].empresa} />
export default function Ponencia({ rawData }) {
  const { asPath } = useRouter();
  const path = asPath.split("/");
  const id = path[path.length - 1];
  if (asPath.isFallback) {
    <h1>Cargando</h1>;
  }
  return (
    <Layout>
      <IntroSectionShort
        title={
          DatosPonencias[id].titulo !== ""
            ? DatosPonencias[id].titulo
            : DatosPonencias[id].empresa
        }
      />
      <Container>
        <PonenciaDiv>
          {printImage(id)}
          {printPonentes(id)}
          {printTimeRoom(id)}
          <ContainerDesc>
            <Desc>{DatosPonencias[id].descripcion}</Desc>
          </ContainerDesc>
        </PonenciaDiv>
      </Container>
    </Layout>
  );
}

const printImage = (id) => {
  if (DatosPonencias[id].logo !== "") {
    return (
      <AlignedDiv>
        <Image
          src={DatosPonencias[id].logo[0]}
          alt={DatosPonencias[id].titulo}
          width={DatosPonencias[id].logo[1]}
          height={DatosPonencias[id].logo[2]}
        />
      </AlignedDiv>
    );
  } else return "";
};

const printPonentes = (id) => {
  if (DatosPonencias[id].ponentes.length > 0) {
    return DatosPonencias[id].ponentes.map((d) => {
      return (
        <AlignedDiv key={d}>
          <Author>Ponentes: {d}</Author>
        </AlignedDiv>
      );
    });
  }
  return (
    <AlignedDiv>
      <Author>Ponente no disponible</Author>
    </AlignedDiv>
  );
};

const printTimeRoom = (id) => {
  const idArray = id.split("");
  const day = idArray[0] === "M" ? "Martes 15" : "Miércoles 16";
  const ing = idArray[1];
  const hor = idArray[2];

  return (
    <AlignedDiv>
      <Time>
        El {day} de {getTimePonencia(hor)} en la Sala {getRoom(ing)}
      </Time>
    </AlignedDiv>
  );
};

const getTimePonencia = (hor) => {
  switch (hor) {
    case "1":
      return "11:00 a 11:35";
    case "2":
      return "11:35 a 12:10";
    case "3":
      return "12:10 a 12:45";
    case "4":
      return "12:45 a 13:00";
    case "5":
      return "13:00 a 14:30";
    case "6":
      return "14:30 a 15:05";
    case "7":
      return "15:05 a 15:40";
    case "8":
      return "15:40 a 16:15";
    case "9":
      return "16:15 en adelante";
  }
};

const getRoom = (ing) => {
  switch (ing) {
    case "1":
      return "Stephanie Shirley";
    case "2":
      return "Frances Elizabeth Allen";
    case "3":
      return "Pilar Careaga Basabe";
    case "4":
      return "Margaret Heafield Hamilton";
    case "5":
      return "Elisa Leonida Zamfirescu";
  }
};

export async function getStaticPaths() {
  const paths = getAllDataIds();
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const rawData = await getRawData(params);
  return {
    props: {
      rawData,
    },
  };
}

/*export async function getStaticPaths() {
    const paths = getAllDataIds();
    return {
      paths,
      fallback: false,
    };
  }

  export async function getStaticProps({ params }) {
    const rawData = await getRawData(params);
    return {
      props: {
        rawData,
      },
    };
  }*/

/* export async function getStaticPaths() {
    const paths = DatosPonenciasList.map(p => {
      const slug = p.id;
      return {params: {slug}};
    });
    return {paths, fallback: true};
  }
  
  export async function getStaticProps({params}) {
    const currentPath = `/${params.slug.join('/')}`;
    const idPath = params.slug;
    const page = DatosPonenciasList.find(page => page.id === idPath) || {notfound: true};
    return {props: {page}};
  }*/

const Author = styled.h3`
  text-align: center;
  padding: 1rem;
`;

const Time = styled.h4`
  text-align: center;
  padding: 0.5rem;
`;

const Desc = styled.p`
  text-align: justify;
  padding: 1rem;
`;
const ContainerDesc = styled.div`
  max-width: 640px;
  margin: 0 auto;
`;

const PonenciaDiv = styled.div`
  padding-top: 3rem;
  padding-bottom: 5rem;
  min-height: 59vh;
`;
