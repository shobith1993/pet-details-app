import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import PetDetails from "./PetDetails";

jest.mock("./ImageCarousel", () => ({
  __esModule: true,
  default: () => <div>ImageCarousel</div>,
}));

jest.mock("./BreedInfo", () => ({
  __esModule: true,
  default: () => <div>BreedInfo</div>,
}));

jest.mock("../Loader/Loader", () => ({
  __esModule: true,
  default: () => <div>Loading...</div>,
}));

describe("PetDetails Component", () => {
  it("shows loader when breedInfo is not available", () => {
    render(
      <PetDetails
        breedType="dog"
        breed="Labrador"
        breedInfo={null}
        images={[]}
      />
    );
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("renders ImageCarousel and BreedInfo when breedInfo is available", () => {
    const mockBreedInfo = { name: "Labrador" };
    const mockImages = ["image1.jpg", "image2.jpg"];

    render(
      <PetDetails
        breedType="dog"
        breed="Labrador"
        breedInfo={mockBreedInfo}
        images={mockImages}
      />
    );

    expect(screen.getByText("ImageCarousel")).toBeInTheDocument();
    expect(screen.getByText("BreedInfo")).toBeInTheDocument();
  });
});
