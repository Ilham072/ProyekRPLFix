import React, { useState } from 'react';
import './Carousel.css';
const images = [
  <img src="assets/images/carousel/img_carousel.png" />,
];

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-image-container">
        {images.map((image, index) => (
          <img
            key={index}
            className={
              "carousel-image " +
              (index === currentImage ? "carousel-image-active" : "")
            }
            src= "assets/images/carousel/img_carousel.png"
            alt=""
          />
        ))}
      </div>
      <div className="carousel-nav">
        <button onClick={prevImage}>&lt;</button>
        {images.map((image, index) => (
          <button
            key={index}
            className={
              "carousel-nav-dot " +
              (index === currentImage ? "carousel-nav-dot-active" : "")
            }
            onClick={() => setCurrentImage(index)}
          ></button>
        ))}
        <button onClick={nextImage}>&gt;</button>
      </div>
    </div>
  );
};

export default Carousel;