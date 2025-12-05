import React, { useState } from "react";
import { Box, Typography, IconButton, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Image from "next/image";

const CarouselContainer = styled(Paper)(({ theme }) => ({
  position: "relative",
  width: "100%",
  maxWidth: "800px",
  margin: "0 auto",
  padding: theme.spacing(4),
  borderRadius: "30px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#ffffff",
  boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
  overflow: "hidden",
}));

const ImageContainer = styled(Box)({
  position: "relative",
  width: "100%",
  height: "400px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const NavigationButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  color: theme.palette.primary.main,
  backgroundColor: "rgba(255, 255, 255, 0.8)",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 1)",
  },
  zIndex: 2,
  padding: theme.spacing(2),
}));

const MascotName = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(3),
  fontWeight: 700,
  fontSize: "2.5rem",
  textAlign: "center",
  color: "#000000",
  fontFamily: '"Montserrat", sans-serif',
}));

const MascotCarousel = ({ mascots }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? mascots.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === mascots.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (!mascots || mascots.length === 0) {
    return null;
  }

  const currentMascot = mascots[currentIndex];

  return (
    <CarouselContainer elevation={0}>
      {mascots.length > 1 && (
        <NavigationButton
          onClick={handlePrev}
          sx={{ left: 20 }}
          aria-label="Anterior"
        >
          <ArrowBackIosNewIcon fontSize="large" sx={{ fontSize: "3rem" }} />
        </NavigationButton>
      )}

      <ImageContainer>
        <Image
          src={currentMascot.src}
          alt={currentMascot.alt}
          width={500}
          height={500}
          style={{
            objectFit: "contain",
            width: "100%",
            height: "100%",
          }}
          priority
        />
      </ImageContainer>

      {mascots.length > 1 && (
        <NavigationButton
          onClick={handleNext}
          sx={{ right: 20 }}
          aria-label="Siguiente"
        >
          <ArrowForwardIosIcon fontSize="large" sx={{ fontSize: "3rem" }} />
        </NavigationButton>
      )}

      <MascotName variant="h3">{currentMascot.nombre}</MascotName>
    </CarouselContainer>
  );
};

export default MascotCarousel;
