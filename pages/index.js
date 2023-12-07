import InfoJTI from "@components/home/InfoJTI";
import Sections from "@components/home/Sections";
import Axis from "@components/home/Axis";
import Locate from "@components/home/Locate";
import Landing from "@components/Landing";
import Layout from "@layouts/MainLayout";

const Homepage = () => {
  return (
    <Layout>
      <Landing
        imgSrc="/images/front_page.png"
        imgAlt="JTI"
        title="Jornadas Técnicas de Ingeniería"
        subtitle="Acercando el futuro"
      />
      <InfoJTI />
      <Sections />
      <Axis />
      <Locate />
    </Layout>
  );
};

export default Homepage;
