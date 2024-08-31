"use client";
import { useRouter } from "next/navigation";
import styles from "./PetCard.module.css";

const PetCard = ({ pet }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`details/?breed=${pet.id}&pet_type=${pet.type}`);
  };

  return (
    <div className={styles.card} onClick={handleClick}>
      <img
        src={`https://cdn2.the${pet.type}api.com/images/${pet.reference_image_id}.jpg`}
        alt={pet.name}
        className={styles.image}
      />
      <h2 className={styles.title}>{pet.name}</h2>
    </div>
  );
};

export default PetCard;
