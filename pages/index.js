import InfoJTI from '@components/home/InfoJTI';
import Sections from '@components/home/Sections';
import Axis from '@components/home/Axis';
import Locate from '@components/home/Locate';
import Landing from "@components/Landing";
import Layout from "@layouts/MainLayout";

const Homepage = () => {
  return (
    <Layout>
      <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'></link>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap" rel="stylesheet"></link>
      <Landing imgSrc="/landing.jpg" imgAlt="JTI" title="Jornadas Técnicas de Ingeniería" subtitle="Descubre el mundo laboral de la ingeniería" />
      <InfoJTI />
      <Sections />
      <Axis />
      <Locate />
    </Layout>
  );
};

export default Homepage;