"use client";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import petData from "../../data/pets.json";
import Loader from "../Loader/Loader";
import ImageCarousel from "./ImageCarousel";
import BreedInfo from "./BreedInfo";
import styles from "./PetDetails.module.css";

const PetDetails = ({ petType = "cat", breed }) => {
  const [breedInfo, setBreedInfo] = useState(null);
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const petDetails = petData[petType];
  const { get } = useFetch(petDetails.breedsFetchUrl);

  useEffect(() => {
    if (breed) {
      get(`&breed_ids=${breed}`)
        .then((data) => {
          setBreedInfo(data[0]?.breeds[0]);
          setImages(data.map((image) => image.url));
        })
        .catch((error) => {});
    }
  }, [breed]);

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
