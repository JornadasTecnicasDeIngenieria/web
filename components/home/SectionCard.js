import Link from "next/link";
import { Grid, Stack } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import styled from "@emotion/styled"
import getTagColor from "@scripts/getTagColor";

function Card({ imageSource, name, categories, bg }) {
    const tags = categories;
    //const networks = social;
    return (
        <motion.div
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  ><Link
            href={`/${name.toLowerCase()}`}
            as={`/${name.toLowerCase()}`}
            legacyBehavior>
            <div className={`custom-section-card ${bg}`}>

                <div className="custom-section-card-header">
                    <Image src={imageSource} alt={name} width="250px" height="350px" />
                </div>
                <div className="custom-section-card-body">

                    <CenterText>
                        <h4>
                            {name}
                        </h4>
                    </CenterText>

                </div>
            </div>
            </Link>
        </motion.div>
    );
}

export default Card;

const CenterText = styled.div`
padding-top: 3rem;
text-align: center;
align-self: center;
justify-self: center;
justify-content: center;
align-items: center;
`;