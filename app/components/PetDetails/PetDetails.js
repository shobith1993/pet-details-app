"use client";
import { useState } from "react";
import Loader from "../Loader/Loader";
import ImageCarousel from "./ImageCarousel";
import BreedInfo from "./BreedInfo";
import styles from "./PetDetails.module.css";

const PetDetails = ({ breedType, breed, breedInfo, images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  if (!breedInfo) return <Loader />;

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <ImageCarousel
          images={images}
          currentIndex={currentIndex}
          handleDotClick={handleDotClick}
        />
        <BreedInfo breedInfo={breedInfo} />
      </div>
    </div>
  );
};

export default PetDetails;
