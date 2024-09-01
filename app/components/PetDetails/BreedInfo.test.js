import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import BreedInfo from "./BreedInfo";

describe("BreedInfo Component", () => {
  const mockBreedInfo = {
    name: "Labrador",
    description: "Friendly and outgoing, Labs play well with others.",
    origin: "Canada",
    life_span: "10-12",
    temperament: "Gentle, Intelligent, Outgoing",
    weight: { metric: "25-36" },
  };

  it("displays breed information correctly", () => {
    render(<BreedInfo breedInfo={mockBreedInfo} />);

    expect(screen.getByText("Labrador")).toBeInTheDocument();
    expect(
      screen.getByText("Friendly and outgoing, Labs play well with others.")
    ).toBeInTheDocument();

    expect(screen.getByText(/Origin:/)).toBeInTheDocument();
    expect(screen.getByText("Canada")).toBeInTheDocument();

    expect(screen.getByText(/Life Span:/)).toBeInTheDocument();
    expect(screen.getByText("10-12 years")).toBeInTheDocument();

    expect(screen.getByText(/Temperament:/)).toBeInTheDocument();
    expect(
      screen.getByText("Gentle, Intelligent, Outgoing")
    ).toBeInTheDocument();

    expect(screen.getByText(/Weight:/)).toBeInTheDocument();
    expect(screen.getByText("25-36 kg")).toBeInTheDocument();
  });
});
