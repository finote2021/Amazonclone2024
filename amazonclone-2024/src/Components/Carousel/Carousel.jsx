import React from "react";
import { Carousel } from "react-responsive-carousel";
import { img } from "./img/data.js";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader we  need to installl npm i react-responsive-carousel firts 
function CarouselEffect() {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteloop={true}
        showindicator={false}
        showThumbs={false}
      >
        {img.map((imageItemslink) => {
          return <img src={imageItemslink} />;
        })}
      </Carousel>
      <div className="hero_img"> </div>
    </div>
  );
}

export default CarouselEffect;
