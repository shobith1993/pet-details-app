import Home from "../components/Home/Home";
import { fetchData } from "../utils/useFetch";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";

const fetchBreeds = async () => {
  const url = "https://api.thedogapi.com/v1/breeds";
  return await fetchData(url);
};

const DogPage = async () => {
  const allBreeds = await fetchBreeds();

  if (!allBreeds) {
    return (
      <ErrorMessage message="Failed to fetch dog breeds. Please try again later." />
    );
  }

  if (allBreeds.length === 0) {
    return (
      <ErrorMessage message="No dog breeds found. Please check back later." />
    );
  }

  return <Home petType="dog" allBreeds={allBreeds} />;
};

export default DogPage;
