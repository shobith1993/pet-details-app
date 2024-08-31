"use client";
import { useEffect, useRef } from "react";
import styles from "./PetDetails.module.css";

const ImageCarousel = ({ images, currentIndex, handleDotClick }) => {
  const carouselRef = useRef(null);

  useEffect(() => {
    if (carouselRef.current && images.length > 0) {
      carouselRef.current.style.width = `${images.length * 100}%`;
      carouselRef.current.style.transform = `translateX(-${
        currentIndex * (100 / images.length)
      }%)`;
    }
  }, [currentIndex, images.length]);

  return (
    <div className={styles.carousel}>
      <div className={styles.images} ref={carouselRef}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className={styles.image}
          />
        ))}
      </div>
      <div className={styles.dots}>
        {images.map((_, index) => (
          <div
            key={index}
            className={`${styles.dot} ${
              currentIndex === index ? styles.active : ""
            }`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
