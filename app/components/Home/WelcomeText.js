import styles from "./Home.module.css";
import petData from "../../data/pets.json";

const WelcomeText = ({ petType }) => (
  <div className={styles.welcomeText}>
    <h1>{petData.welcomeText}</h1>
    <p>{petData[petType]?.welcomeMessage}</p>
  </div>
);

export default WelcomeText;
