import Link from "@components/StyledLink";
import { Grid, Stack } from "@mui/material";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import getTagColor from "@scripts/getTagColor";
import LinkedIn from "@mui/icons-material/LinkedIn";
import GitHub from "@mui/icons-material/GitHub";
import Language from "@mui/icons-material/Language";
import ContactMail from "@mui/icons-material/ContactMail";
import Telegram from "@mui/icons-material/Telegram";
import Instagram from "@mui/icons-material/Instagram";
import { Twitter, Facebook } from "@mui/icons-material";
import Image from "next/image";
import { SvgIcon, createSvgIcon } from "@mui/material";

const TwitterNewIcon = createSvgIcon(
  <svg
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="200"
    height="200"
    viewBox="0 0 50 50"
  >
    <path
      d="M 11 4 C 7.1456661 4 4 7.1456661 4 11 L 4 39 C 4 42.854334 7.1456661 46 11 46 L 39 46 C 42.854334 46 46 42.854334 46 39 L 46 11 C 46 7.1456661 42.854334 4 39 4 L 11 4 z M 11 6 L 39 6 C 41.773666 6 44 8.2263339 44 11 L 44 39 C 44 41.773666 41.773666 44 39 44 L 11 44 C 8.2263339 44 6 41.773666 6 39 L 6 11 C 6 8.2263339 8.2263339 6 11 6 z M 13.085938 13 L 22.308594 26.103516 L 13 37 L 15.5 37 L 23.4375 27.707031 L 29.976562 37 L 37.914062 37 L 27.789062 22.613281 L 36 13 L 33.5 13 L 26.660156 21.009766 L 21.023438 13 L 13.085938 13 z M 16.914062 15 L 19.978516 15 L 34.085938 35 L 31.021484 35 L 16.914062 15 z"
      fill="white"
      stroke="white"
      strokeWidth="1.5"
    ></path>
  </svg>,
  "TwitterNewIcon"
);

function Card({ imageSource, name, categories, social }) {
  const tags = categories;
  const networks = social;
  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            opacity: 0,
            scale: 0.85,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.3,
            },
          },
        }}
      >
        <motion.div
          whileHover={{
            position: "relative",
            zIndex: 999,
            scale: 1.05,
            borderRadius: "0.5rem",
            transition: {
              duration: 0.2,
            },
          }}
        >
          <div className="custom-card">
            <br />
            <div className="custom-card-header">
              <Image
                src={imageSource}
                alt={name}
                width={1000}
                height={1000}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div className="custom-card-body">
              <Grid container justifyContent="center" alignItems="center">
                {tags.map((tag) => {
                  return (
                    <span
                      className={`custom-tag ${getTagColor(tag)}`}
                      key={`${getTagColor(tag)}`}
                    >
                      {tag}
                    </span>
                  );
                })}
              </Grid>
              <Name>{name}</Name>
              <Social>
                <Stack
                  direction="row"
                  spacing={2}
                  justifyContent="center"
                  alignItems="center"
                >
                  {networks.map(({ tag, url }) => {
                    switch (tag) {
                      case "Facebook":
                        return (
                          <Link className="styledlink" href={url}>
                            <Facebook />
                          </Link>
                        );
                      case "GitHub":
                        return (
                          <Link className="styledlink" href={url}>
                            <GitHub />
                          </Link>
                        );
                      case "Twitter":
                        return (
                          <Link className="styledlink" href={url}>
                            <TwitterNewIcon />
                          </Link>
                        );
                      case "Linkedin":
                        return (
                          <Link className="styledlink" href={url}>
                            <LinkedIn />
                          </Link>
                        );
                      case "ContactMail":
                        return (
                          <Link className="styledlink" href={`mailto:${url}`}>
                            <span title={url}>
                              <ContactMail />
                            </span>
                          </Link>
                        );
                      case "Web":
                        return (
                          <Link className="styledlink" href={url}>
                            <span title={url}>
                              <Language />
                            </span>
                          </Link>
                        );
                      case "Telegram":
                        return (
                          <Link className="styledlink" href={url}>
                            <span title={url}>
                              <Telegram />
                            </span>
                          </Link>
                        );
                      case "Instagram":
                        return (
                          <Link className="styledlink" href={url}>
                            <span title={url}>
                              <Instagram />
                            </span>
                          </Link>
                        );
                    }
                  })}
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
  font-size: 2rem;
  color: #3c3c54;
  align-self: center;
`;

const Social = styled.div`
  width: 100%;
  background-color: #3c3c54;
  color: white;
  z-index: 9999;
  padding: 1rem;
  margin: 0;
  border-radius: 0.5rem;
`;
