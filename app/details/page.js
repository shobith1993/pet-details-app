"use client";
import { useSearchParams } from "next/navigation";
import PetDetails from "../components/PetDetails/PetDetails";

const Details = () => {
  const searchParams = useSearchParams();
  const breed = searchParams.get("breed");
  const pet_type = searchParams.get("pet_type");
  return <PetDetails breed={breed} petType={pet_type} />;
};

export default Details;
