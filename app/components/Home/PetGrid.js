import PetCard from "../PetCard/PetCard";
import styles from "./Home.module.css";

const PetGrid = ({ paginatedBreeds, selectedPetType }) => (
  <div className={styles.grid}>
    {paginatedBreeds.map((breed) => (
      <PetCard key={breed.id} pet={{ ...breed, type: selectedPetType }} />
    ))}
  </div>
);

export default PetGrid;
