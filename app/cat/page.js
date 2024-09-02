import Home from "../components/Home/Home";
import { fetchData } from "../utils/useFetch";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";

const fetchBreeds = async () => {
  const url = "https://api.thecatapi.com/v1/breeds";
  return await fetchData(url);
};

const CatPage = async () => {
  const allBreeds = await fetchBreeds();

  if (!allBreeds) {
    return (
      <ErrorMessage message="Failed to fetch cat breeds. Please try again later." />
    );
  }

  if (allBreeds.length === 0) {
    return (
      <ErrorMessage message="No cat breeds found. Please check back later." />
    );
  }

  return <Home petType="cat" allBreeds={allBreeds} />;
};

export default CatPage;
