import Home from "../components/Home/Home";
import { fetchData } from "../utils/useFetch";

const fetchBreeds = async () => {
  const url = "https://api.thedogapi.com/v1/breeds";
  return await fetchData(url);
};

const DogPage = async () => {
  const allBreeds = await fetchBreeds();
  return <Home petType="dog" allBreeds={allBreeds} />;
};

export default DogPage;
