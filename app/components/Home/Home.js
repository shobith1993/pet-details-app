"use client";
import { useState, useEffect } from "react";
import HomeHeader from "./HomeHeader";
import WelcomeText from "./WelcomeText";
import PetGrid from "./PetGrid";
import Pagination from "./Pagination";
import Loader from "../Loader/Loader";
import styles from "./Home.module.css";

const Home = ({ petType, allBreeds }) => {
  const [selectedPetType] = useState(petType);
  const [filteredBreeds, setFilteredBreeds] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedBreed, setSelectedBreed] = useState(null);
  const itemsPerPage = 9;

  useEffect(() => {
    if (selectedBreed) {
      const filtered = allBreeds.filter(
        (breed) => breed.id === selectedBreed.value
      );
      setFilteredBreeds(filtered);
      setTotalPages(Math.ceil(filtered.length / itemsPerPage));
      setCurrentPage(1);
    } else {
      setFilteredBreeds(allBreeds);
      setTotalPages(Math.ceil(allBreeds.length / itemsPerPage));
    }
  }, [currentPage, allBreeds, selectedBreed]);

  const handleFirstPage = () => setCurrentPage(1);
  const handlePreviousPage = () =>
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const handleLastPage = () => setCurrentPage(totalPages);

  const breedOptions = allBreeds.map((breed) => ({
    value: breed.id,
    label: breed.name,
  }));

  const paginatedBreeds = filteredBreeds.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <HomeHeader
        breedOptions={breedOptions}
        selectedBreed={selectedBreed}
        setSelectedBreed={setSelectedBreed}
      />
      <WelcomeText petType={selectedPetType} />
      <div className={styles.container}>
        {filteredBreeds.length === 0 ? (
          <Loader />
        ) : (
          <>
            <PetGrid
              paginatedBreeds={paginatedBreeds}
              selectedPetType={selectedPetType}
            />
            {filteredBreeds.length > itemsPerPage && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                handleFirstPage={handleFirstPage}
                handlePreviousPage={handlePreviousPage}
                handleNextPage={handleNextPage}
                handleLastPage={handleLastPage}
              />
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Home;
