import Link from "@components/StyledLink";
import { Grid, Stack } from "@mui/material";
import { motion } from "framer-motion";
import styled from "@emotion/styled"
import getTagColor from "@scripts/getTagColor";
//import { Linkedin, Facebook, GitHub, Twitter, ContactMail, Language } from "@mui/icons-material";
import LinkedIn from "@mui/icons-material/LinkedIn";
import GitHub from "@mui/icons-material/GitHub";
import Language from "@mui/icons-material/Language";
import ContactMail from "@mui/icons-material/ContactMail";
import { Twitter, Facebook } from "@mui/icons-material";

function Card({ imageSource, name, categories, social }) {
    const tags = categories;
    const networks = social;
    return (
        <>
            <motion.div initial="hidden" animate="visible" variants={{
                hidden: {
                    opacity: 0,
                    scale: 0.85
                },
                visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                        delay: 0.3,
                    }
                }
            }}>
                <motion.div whileHover={{
                    position: "relative",
                    zIndex: 999,
                    scale: 1.05,
                    background: "white",
                    transition: {
                        duration: 0.2,
                    }
                }}>
                    <div className="custom-card">

                        <div className="custom-card-header">
                            <img src={imageSource} alt={name} />
                        </div>
                        <div className="custom-card-body">
                            <Grid container justifyContent="center" alignItems="center">

                                {
                                    tags.map(tag => {
                                        return (
                                            <span className={`custom-tag ${getTagColor(tag)}`} key={`${getTagColor(tag)}`}>{tag}</span>
                                        )
                                    })
                                }
                            </Grid>

                            <Name>
                                {name}
                            </Name>
                            <Social>
                                <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
                                    {
                                        networks.map(({ tag, url }) => {
                                            switch (tag) {
                                                case "Facebook": return (<Link className="styledlink" href={url}><Facebook /></Link>)
                                                case "GitHub": return (<Link className="styledlink" href={url}><GitHub /></Link>)
                                                case "Twitter": return (<Link className="styledlink" href={url}><Twitter /></Link>)
                                                case "Linkedin": return (<Link className="styledlink" href={url}><LinkedIn /></Link>)
                                                case "ContactMail": return (<Link className="styledlink" href={`mailto: ${url}`}><span title={url}><ContactMail /></span></Link>)
                                                case "Web": return (<Link className="styledlink" href={url}><span title={url}><Language /></span></Link>)
                                            }
                                        })
                                    }
                                </Stack>
                            </Social>

                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </>
    );
}

export default Card;

const Name = styled.h4`
    font-size: 1.5rem;
    color: #333;
    align-self: center;
`

const Social = styled.div`
width: 100%;
background-color: #633CAE;
color: white;
border: 3px solid rgba(36,138,207,1);
z-index: 9999;
padding: 1rem;
margin: 0;
`