import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";

jest.mock("./HomeHeader", () => ({
  __esModule: true,
  default: () => <header data-testid="home-header">HomeHeader</header>,
}));

jest.mock("./WelcomeText", () => ({
  __esModule: true,
  default: ({ petType }) => <div>Welcome to the {petType} Page</div>,
}));

jest.mock("./PetGrid", () => ({
  __esModule: true,
  default: () => <div data-testid="pet-grid">PetGrid</div>,
}));

jest.mock("./Pagination", () => ({
  __esModule: true,
  default: () => <div data-testid="pagination">Pagination</div>,
}));

jest.mock("../Loader/Loader", () => ({
  __esModule: true,
  default: () => <div data-testid="loader">Loading...</div>,
}));

import Home from "./Home";

const mockBreeds = [
  { id: 1, name: "Labrador" },
  { id: 2, name: "Poodle" },
  { id: 3, name: "Bulldog" },
  { id: 4, name: "Beagle" },
  { id: 5, name: "Rottweiler" },
  { id: 6, name: "German Shepherd" },
  { id: 7, name: "Siberian Husky" },
  { id: 8, name: "Shih Tzu" },
  { id: 9, name: "Dachshund" },
  { id: 10, name: "Boxer" },
];

describe("Home Component", () => {
  it("renders HomeHeader component", () => {
    render(<Home petType="Dog" allBreeds={mockBreeds} />);
    expect(screen.getByTestId("home-header")).toBeInTheDocument();
  });

  it("renders WelcomeText component with correct petType", () => {
    render(<Home petType="Cat" allBreeds={mockBreeds} />);
    expect(screen.getByText("Welcome to the Cat Page")).toBeInTheDocument();
  });

  it("shows Loader when there are no breeds", () => {
    render(<Home petType="Dog" allBreeds={[]} />);
    expect(screen.getByTestId("loader")).toBeInTheDocument();
  });

  it("renders PetGrid and Pagination when breeds are available", () => {
    render(<Home petType="Dog" allBreeds={mockBreeds} />);
    expect(screen.getByTestId("pet-grid")).toBeInTheDocument();
    expect(screen.getByTestId("pagination")).toBeInTheDocument();
  });
});
