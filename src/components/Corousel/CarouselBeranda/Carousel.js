import React, { useState, useEffect } from 'react';
import './Carousel.css';
import axios from 'axios';
const images = [
  <img src="assets/images/carousel/img_carousel.png" />,
];

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [banner, setBanner] = useState([]);

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % banner.length);
  };

  const prevImage = () => {
    setCurrentImage((currentImage - 1 + banner.length) % banner.length);
  };

  useEffect(() => {
    let data;
      async function fetchDataBanner() {
        await axios.get('http://localhost:8000/api/Konten Banner')
        .then((response) => {
          data = response.data;
        })
        .catch((error) => {
          console.log(error);
        })
        setBanner(data);
      }
      fetchDataBanner();
  }, []);

  return (
    <div className="carousel-container">
      <div className="carousel-image-container">
        {banner.map((banner, index) => (
          <img
            key={index}
            className={
              "carousel-image " +
              (index === currentImage ? "carousel-image-active" : "")
            }
            src= {banner.banner}
            alt=""
          />
        ))}
      </div>
      <div className="carousel-nav">
        <button onClick={prevImage}>&lt;</button>
        {banner.map((banner, index) => (
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