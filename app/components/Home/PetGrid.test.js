import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import PetGrid from "./PetGrid";

jest.mock("../PetCard/PetCard", () => ({
  __esModule: true,
  default: ({ pet }) => <div data-testid="pet-card">{pet.name}</div>,
}));

describe("PetGrid Component", () => {
  const mockBreeds = [
    { id: 1, name: "Labrador" },
    { id: 2, name: "Poodle" },
  ];

  it("renders pet cards for each breed", () => {
    render(<PetGrid paginatedBreeds={mockBreeds} selectedPetType="dog" />);

    mockBreeds.forEach((breed) => {
      expect(screen.getByText(breed.name)).toBeInTheDocument();
    });
  });
});
