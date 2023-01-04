import Link from "@components/StyledLink";
import { Grid, Stack } from "@mui/material";
import { motion } from "framer-motion";
import styled from "@emotion/styled"
import getTagColor from "@scripts/getTagColor";

function Card({ data }) {
    return (
        <AlignedDiv>
            <motion.div initial="hidden" animate="visible" variants={{
                hidden: {
                    opacity: 0,
                    scale: 0.85,
                    y: 20,
                },
                visible: {
                    scale: 1,
                    opacity: 1,
                    y: 0,
                    transition: {
                        delay: 0.3,
                        duration: 1,
                    }
                }
            }}>
                <motion.div whileHover={{
                    position: "relative",
                    zIndex: 999,
                    scale: 1.05,
                    transition: {
                        duration: 0.2,
                    }
                }}>
                    <Ponente>
                        <Grid container spacing={2}>
                            <Grid item xs={7} sm={7} md={7} lg={7}>
                                <Title>{data.title}</Title>
                                <Name>{data.name}</Name>
                                <Tag>
                                    <span className={`custom-tag ${getTagColor(data.area)}`} key={`${getTagColor(data.area)}`}>{data.area}</span>
                                </Tag>
                            </Grid>
                            <Grid item xs={5} sm={5} md={5} lg={5}>
                                <ImageContainer>
                                    <ExtendedImage src={data.image} alt={data.name} />
                                </ImageContainer>
                            </Grid>
                        </Grid>
                        <Desc>{data.description}</Desc>
                    </Ponente>
                </motion.div>
            </motion.div>
        </AlignedDiv>
    );
}

export default Card;

const Name = styled.h4`
    font-size: 1.5rem;
    padding-top: 0.5rem;
    padding-left: 2rem;
    color: #83DEFF;
    align-self: center;
    font-weight: 900;
`

const AlignedDiv = styled.div`
display: flex;
justify-content: center;
vertical-align: middle;
align-items: center;
`;

const Ponente = styled.div`
background-color: #3c3c54;

margin: 10px !important;
  border-radius: 20px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  width: 480px;
  align-items: center;
`;

const ImageContainer = styled.div`
padding-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
    `;

const ExtendedImage = styled.img`
width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #FF645F;
    `;

const Title = styled.h3`
    font-size: 1.1rem;
    color: #fff;
    font-weight: 300;
    padding-top: 2rem;
    padding-left: 2rem;
`;

const Desc = styled.p`
    font-size: 1rem;
    color: #fff;
    font-weight: 300;
    padding-top: 1rem;
    padding-left: 2rem;
    padding-right: 2rem;
    padding-bottom: 1rem;
    justify-content: justify;
    text-align: justify;
`;

const Tag = styled.div`
padding-top: 1rem;
padding-left: 2rem;
padding-right: 2rem;
padding-bottom: 1rem;
`;