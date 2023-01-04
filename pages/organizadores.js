import Cards from "@components/Cards";
import Layout from "@components/layouts/MainLayout";
import IntroSection from "@components/IntroSection";
import CardCarousel from "@components/carousel";

import { organizadores } from "data/organizadores";
import { voluntarios } from "data/voluntarios";

const Organizadores = () => {

    return (
        <Layout>
            <IntroSection title="Equipo de organización" desc="Equipo encargado de hacer este evento posible, preparando todo y contactando colaboradores." />
            <Cards organizadores={organizadores} />
            <br/><br/>
            <IntroSection title="Grupo de Voluntarios" desc="Equipo que ayudará a mantener el orden y colaborará el día del evento." />
            <Cards organizadores={voluntarios} />
            <br/><br/>
        </Layout>
    )
}

export default Organizadores;