import PropTypes from "prop-types";
import Link from "./StyledLink";
import { motion } from "framer-motion";
import { Grid } from "@mui/material";
import getTagColor from "../lib/getTagColor";

function Card({
  imageSource,
  title,
  text,
  url,
  author,
  categories,
  authorImage,
  date,
}) {
  const tags = categories;
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
            transition: {
              duration: 0.2,
            },
          }}
        >
          <div className="custom-card">
            <div className="custom-card-header">
              <Link href={url}>
                <img src={imageSource} alt={title} />
              </Link>
            </div>
            <div className="custom-card-body">
              <Grid container justifyContent="center" alignItems="center">
                {tags.map((tag) => {
                  return (
                    <span
                      key={tag}
                      className={`custom-tag ${getTagColor(tag)}`}
                    >
                      {tag}
                    </span>
                  );
                })}
              </Grid>

              <div>
                <Link href={url}>
                  <a className="card-link">
                    <h4>{title}</h4>
                  </a>
                </Link>
                <Link href={url}>
                  <a className="card-link">
                    <p>{text}</p>
                  </a>
                </Link>
              </div>

              <div className="custom-user">
                <img src={authorImage} alt="user" />
                <div className="custom-user-info">
                  <h5>{author}</h5>
                  <small>{date}</small>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  url: PropTypes.string.isRequired,
  imageSource: PropTypes.string,
};

export default Card;
