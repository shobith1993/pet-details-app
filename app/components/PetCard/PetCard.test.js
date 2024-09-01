import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import PetCard from "./PetCard";
import { useRouter } from "next/navigation";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("PetCard Component", () => {
  const mockRouterPush = jest.fn();
  useRouter.mockReturnValue({ push: mockRouterPush });

  const mockPet = {
    id: "1",
    name: "Labrador",
    type: "dog",
    reference_image_id: "abc123",
  };

  it("renders the pet card and handles click", () => {
    render(<PetCard pet={mockPet} />);

    expect(screen.getByText("Labrador")).toBeInTheDocument();
    expect(screen.getByAltText("Labrador")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Labrador"));
    expect(mockRouterPush).toHaveBeenCalledWith(
      `details/?breed=1&pet_type=dog`
    );
  });
});
