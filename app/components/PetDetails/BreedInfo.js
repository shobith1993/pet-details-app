"use client";
import styles from "./PetDetails.module.css";

const BreedInfo = ({ breedInfo }) => {
  return (
    <div className={styles.info}>
      <h1>{breedInfo.name}</h1>
      <p>{breedInfo.description}</p>
      <p>
        <strong>Origin:</strong> {breedInfo.origin}
      </p>
      <p>
        <strong>Life Span:</strong> {breedInfo.life_span} years
      </p>
      <p>
        <strong>Temperament:</strong> {breedInfo.temperament}
      </p>
      <p>
        <strong>Weight:</strong> {breedInfo.weight.metric} kg
      </p>
    </div>
  );
};

export default BreedInfo;
