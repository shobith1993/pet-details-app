import Select from "react-select";
import styles from "./Home.module.css";

const HomeHeader = ({ breedOptions, selectedBreed, setSelectedBreed }) => (
  <div className={styles.stickyHeader}>
    <img src="/animals.png" alt="Logo" className={styles.logo} />
    <div className={styles.appName}>Pet Details</div>
    <div className={styles.searchSection}>
      <Select
        styles={{
          control: (provided) => ({
            ...provided,
            borderRadius: "30px",
            border: "1px solid #ddd",
            padding: "4px",
          }),
        }}
        options={breedOptions}
        value={selectedBreed}
        onChange={(selectedOption) => setSelectedBreed(selectedOption)}
        placeholder="Search and select breed"
        isClearable
        isSearchable
        noOptionsMessage={() => "No breeds found"}
      />
    </div>
  </div>
);

export default HomeHeader;
