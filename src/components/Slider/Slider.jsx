import React, { useState } from "react";
import style from "./Slider.css";
import disk from "../../img/bgc.jpg";
import disk2 from "../../img/carouselphoto.jpg";
import disk3 from "../../img/carouselsecond.jpg";

import { Carousel } from "react-bootstrap";

function Slider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel className="carousel" activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <div className="carousel__img">
          <img className="d-block w-100" src={disk} alt="First slide" />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel__img">
          <img className="d-block w-100 " src={disk2} alt="Second slide" />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel__img">
          <img className="d-block w-100 " src={disk3} alt="Third slide" />
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
