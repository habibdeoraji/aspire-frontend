import React, { useState } from "react";
import Slider from "react-slick";
import { Box, useMediaQuery } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DebitCard from "./DebitCard";
import { useTheme } from "@emotion/react";

const CardCarousel = ({ cards=[],setActiveCard }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [currentSlide, setCurrentSlide] = useState(0);

  console.log('cards',cards);

  // Custom styling for the dots
  const dotStyle = {
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    backgroundColor: "#01D167", // Default dot color
    opacity: isMobile ? "10%" : "20%",
    margin: "0 4px",
  };

  const activeDotStyle = {
    ...dotStyle,
    width: "20px",
    opacity: "100%",
    borderRadius: "1rem",
    margin: "0 8px",
  };

  // Carousel settings with custom dots
  const settings = {
    dots: true,
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlide(newIndex)
      // const activeCardId = cards[newIndex].id;
      setActiveCard(cards[newIndex]);
    },
  //   afterChange: currentIndex => {
  //     const activeCardId = cards[currentIndex].id;
  //     setActiveCard(activeCardId);
  // },
    centerMode: isMobile? true:false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: (i) => (
      <Box
        sx={{
          ...dotStyle,
                ...(currentSlide === i && activeDotStyle),

        }}
      />
    ),
  };

  return (
    <Slider {...settings} >
      {cards.map((cardDetails, index) => (
        <div key={index}>
          <DebitCard cardDetails={cardDetails} />
        </div>
      ))}
    </Slider>
  );
};

export default CardCarousel;
