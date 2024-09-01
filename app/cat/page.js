import Home from "../components/Home/Home";
import { fetchData } from "../utils/useFetch";

const fetchBreeds = async () => {
  const url = "https://api.thecatapi.com/v1/breeds";
  return await fetchData(url);
};

const CatPage = async () => {
  const allBreeds = await fetchBreeds();
  return <Home petType="cat" allBreeds={allBreeds} />;
};

export default CatPage;
