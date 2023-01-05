import Layout from "@layouts/MainLayout";
import { Container, Grid } from "@mui/material";
import styled from "@emotion/styled";
import Image from "next/legacy/image";

const Privacidad = () => {
    return (
        <Layout>
            <CustomContainer>
                <div>
                    <Ull>
                        <Image src="/ull.jpg" alt="Ull" width={240} height={140} />
                    </Ull>
                    <MainH1>Política de privacidad</MainH1>
                    <Section>
                        <SectionHeader>
                            I. ¿Quién es el Responsable del tratamiento de sus datos?
                        </SectionHeader>
                        <p>La Universidad de la Laguna (en adelante, ULL) es la responsable de la web
                            https://jtiesit.com/ y de los tratamientos de datos derivados de la misma, así como de
                            los tratamientos derivados de las distintas actividades realizadas en el evento:</p>
                        <ul>
                            <li>Universidad de La Laguna (la Universidad, o ULL)</li>
                            <li>CIF: núm. Q3818001D</li>
                            <li>Dirección: Calle Padre Herrera S/n (apartado postal 456), 38200 - La Laguna</li>
                        </ul>
                        <p>Asimismo, como desarrolladora de la <b>APP móvil del evento</b> destinada a poner en
                            contacto alumnos y empresas, <b>la ULL informa de que el uso de la APP no implicará
                                tratamiento de datos alguno por parte de la ULL</b>, y en particular informa de lo
                            siguiente:</p>
                        <ul>
                            <li><p>La APP permitirá a los usuarios estudiantes generar un código QR con la
                                información de contacto que estos consideren incluir, el cual se descargará en su
                                dispositivo en local, no pudiendo la ULL acceder a tal información.</p></li>
                            <li><p>Las empresas colaboradoras que utilicen la APP para leer los códigos QR serán
                                Responsables del Tratamiento de los datos que en el vento recaben, asumiendo
                                las responsabilidades derivadas de esta condición y quedando obligadas a
                                cumplir con todas las obligaciones dispuestas en la normativa vigente y aplicable
                                en materia de protección de datos.</p></li>
                        </ul>
                    </Section>
                    <Section>
                        <SectionHeader>
                            II. ¿Cómo puede contactar con nuestro delegado de protección de datos?
                        </SectionHeader>
                        <p>Si Vd. tiene alguna duda o consulta sobre cómo tratamos sus datos, puede contactar con
                            el delegado de protección de datos en: dpd@ull.edu.es. Desde allí le atenderán y le
                            facilitarán la información que solicite y le ayudarán a ejercer sus derechos si fuera
                            necesario.</p>
                    </Section>
                    <Section>
                        <SectionHeader>
                            III. ¿Qué datos tratamos a través de la página web?
                        </SectionHeader>
                        <p>La Universidad de la Laguna tratará los datos de contacto a los que tenga acceso a raíz
                            de las consultas planteadas por los propios usuarios mediante las vías de contacto
                            facilitadas, con la finalidad de atender las solicitudes recibidas.</p>
                        <p>Asimismo, la ULL tratará los datos identificativos y de contacto de los participantes en
                            los sorteos y/o actividades propuestas en el vento que resulten necesarios para dicha
                            participación, con la finalidad de posibilitar la misma.</p>
                    </Section>
                    <Section>
                        <SectionHeader>
                            IV. ¿Con qué base legal tratamos tus datos?
                        </SectionHeader>
                        <ul>
                            <li>Relación contractual para la prestación del servicio ofrecido (artículo 6.1.b) del
                                RGPD), entendiendo por acuerdo la participación en las actividades en las que el
                                usuario decida participar.</li>
                            <li>Interés legítimo de la ULL en atender las consultas planteadas por los
                                usuarios/colaboradores sobre el evento.</li>
                        </ul>
                    </Section>
                    <Section>
                        <SectionHeader>
                            V. ¿Con quién compartimos sus datos?
                        </SectionHeader>
                        <p>Todos los usuarios deben tener en cuenta que la participación en algunas de las
                            actividades podrá implicar la interacción con los demás participantes/asistentes al
                            evento, por lo que sus datos podrán ser comunicados a estos por la naturaleza del
                            propio evento/actividad.</p>
                        <p>No se realizarán otras cesiones de datos salvo que sean necesarias por requerimientos
                            de las autoridades o por obligaciones legales impuestas a la ULL.</p>
                    </Section>
                    <Section>
                        <SectionHeader>
                            VI. ¿Se llevan a cabo transferencias internacionales?
                        </SectionHeader>
                        <p>Los tratamientos de datos derivados de la web y/o del evento no implicarán
                            transferencias internacionales de datos.</p>
                    </Section>
                    <Section>
                        <SectionHeader>
                            VII. ¿Cuánto tiempo conservaremos los datos?
                        </SectionHeader>
                        <p>
                            Los datos serán conservados durante el tiempo necesario para alcanzar las finalidades
                            perseguidas.
                        </p>
                    </Section>
                    <Section>
                        <SectionHeader>
                            VIII. ¿Qué derechos tiene como usuario?
                        </SectionHeader>
                        <p>Nuestros usuarios pueden solicitar a la Universidad de La Laguna:</p>
                        <ul>
                            <li>El acceso a sus datos personales, por ejemplo, para confirmar si se están tratando
                                sus datos, conocer con qué información cuenta la ULL, consultarlos y/o
                                asegurarse de que son correctos y actualizados.</li>
                            <li>La rectificación de los datos para corregir errores o carencias. Si ejerce este
                                derecho deberá indicarnos qué debemos rectificar y justificarlo si fuera
                                necesario.</li>
                            <li>La supresión de los datos cuándo considere que no deberíamos seguir
                                tratándolos. Es aconsejable que nos notifique en este caso el porqué de su
                                solicitud.</li>
                            <li>La limitación de su tratamiento, para que los conservemos bloqueados en
                                garantía de sus derechos.</li>
                            <li>Cuando hayamos tratado sus datos en cumplimiento de una misión de interés
                                público conferida a la ULL, o en base a intereses legítimos de la Universidad,
                                puede también oponerse a que los tratemos por motivos relacionados con una
                                situación particular. En tal caso, es conveniente que nos aporte sus razones para
                                ello a fin de que podamos valorar su solicitud.</li>
                            <li>Cuando ello sea posible de acuerdo con las condiciones de la legislación puede
                                solicitar el derecho a la portabilidad de los datos, con la finalidad de que le
                                entreguemos los mismos en un formato compatible con otros sistemas, o que
                                estos se transmitan a otro Responsable del tratamiento que nos indica, cuando
                                esto sea viable técnicamente.</li>
                            <li>Si prestó consentimiento libremente para que tratemos sus datos, podrá retirarlo
                                del mismo modo.</li>
                        </ul>
                    </Section>
                    <Section>
                        <SectionHeader>
                            IX. ¿Cómo puede ejercer sus derechos?
                        </SectionHeader>
                        <p>Los interesados pueden ejercer sobre sus datos personales los derechos de acceso,
                            rectificación, supresión y limitación al tratamiento, y a la portabilidad de sus datos
                            personales, a la oposición a su tratamiento y, en su caso, a no ser objeto de decisiones
                            basadas únicamente en el tratamiento automatizado de sus datos, ante la Universidad
                            de La Laguna a través del procedimiento electrónico habilitado al efecto y disponible en
                            la Sede electrónica de la ULL en el siguiente enlace: https://sede.ull.es/ecivilis-
                            site/catalog/showProcedure/230, o dirigiendo un email al Delegado de Protección de
                            Datos.</p>
                    </Section>
                    <Section>
                        <SectionHeader>
                            IX. ¿Quién garantiza sus derechos? ¿Ante quién puede reclamar?
                        </SectionHeader>
                        <p>
                            En caso de que desee presentar una reclamación u obtener información adicional sobre
                            la regulación del tratamiento de datos personales en España, la autoridad competente
                            es la Agencia Española de Protección de Datos (Jorge Juan, 6 28001-Madrid).
                        </p>
                    </Section>
                    <Section>
                        <SectionHeader>
                            X. Cambios en la Política de Privacidad
                        </SectionHeader>
                        <p>
                            La ULL podrá modificar esta Política de Privacidad cuando resulte necesario. En caso de
                            introducirse modificaciones, se comunicará a través de la plataforma o bien por otros
                            medios, con la finalidad de trasladar las nuevas condiciones de Privacidad. El hecho de
                            continuar haciendo uso de las funcionalidades puestas a disposición por la ULL después
                            de haberle notificado las referidas modificaciones supondrá que está de acuerdo con las
                            mismas, salvo para los supuestos en los que sea necesario su consentimiento expreso.
                        </p>
                    </Section>
                </div>
            </CustomContainer>
        </Layout>
    )
}

export default Privacidad;

const MainH1 = styled.h1`
                font-size: 2rem;
                font-weight: 900;
                `;

const Ull = styled.div`
                padding: 0.5rem;
                text-align: right;
                align-items: right;
                justify-content: right;
                `;

const SectionHeader = styled.h2`
                font-size: 1.5rem;
                font-weight: 600;
                margin-top: 1rem;
                margin-bottom: 1.5rem;
                margin-left: 2.5rem;
                color: #633CAE;
                `;

const Section = styled.div`
                padding: 1rem;
                text-align: justify;
                `;

const CustomContainer = styled.div`
                padding: 1rem;
                max-width: 800px;
                align-items: center;
                justify-content: center;
                display: flex;
                height: 100%;
                margin: auto;
                width: 100%;
                `;