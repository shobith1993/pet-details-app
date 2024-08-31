// app/details/page.js
import PetDetails from "../components/PetDetails/PetDetails";
import petData from "../data/pets.json";
import { fetchData } from "../utils/useFetch";

const fetchBreedDetails = async (breed, petType) => {
  try {
    const petDetails = petData[petType];
    const data = await fetchData(
      `${petDetails.breedsFetchUrl}&breed_ids=${breed}`
    );

    const breedInfo = data?.[0]?.breeds?.[0] || {};
    const images = data?.map((image) => image.url || "") || [];

    return { breedInfo, images };
  } catch (error) {
    return { breedInfo: {}, images: [] };
  }
};

const Details = async ({ searchParams }) => {
  const { breed, pet_type } = searchParams;
  const { breedInfo, images } = await fetchBreedDetails(breed, pet_type);

  return (
    <PetDetails
      breed={breed}
      petType={pet_type}
      breedInfo={breedInfo}
      images={images}
    />
  );
};

export default Details;
