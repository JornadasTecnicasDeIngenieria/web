import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { organizadores } from "../data/organizadores";
import Card from "./Card";
import { Container } from "@mui/material";

const CardCarousel = ({ data }) => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      const cat = ["a", "b"]
      return (
          <Container>
        <Carousel
  swipeable={true}
  draggable={false}
  showDots={true}
  responsive={responsive}
  infinite={true}
  keyBoardControl={true}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  dotListClass="custom-dot-list-style"
>
        {organizadores.map(({ name, image, id, categories, social }) => {
                        return categories.findIndex(category => category !== "c") === 0 ? (
                            <div>
                                <Card name={name} imageSource={image} url={`${id}`} categories={categories} social={social}/>
                                </div>
                        ) : ""
                    })}
      </Carousel>
      </Container>
      )
      
}

export default CardCarousel;