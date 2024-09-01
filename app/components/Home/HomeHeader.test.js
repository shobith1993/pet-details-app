import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import HomeHeader from "./HomeHeader";

jest.mock("react-select", () => ({
  __esModule: true,
  default: ({ options, value, onChange, placeholder }) => (
    <div>
      <input
        data-testid="react-select"
        placeholder={placeholder}
        value={value ? value.label : ""}
        onChange={(e) => {
          const selectedOption = options.find(
            (option) => option.label === e.target.value
          );
          onChange(selectedOption);
        }}
      />
      <div data-testid="react-select-options">
        {options.map((option) => (
          <div key={option.value} onClick={() => onChange(option)}>
            {option.label}
          </div>
        ))}
      </div>
    </div>
  ),
}));

const mockBreedOptions = [
  { value: 1, label: "Labrador" },
  { value: 2, label: "Poodle" },
];

const mockSetSelectedBreed = jest.fn();
const mockSelectedBreed = { value: 1, label: "Labrador" };

describe("HomeHeader Component", () => {
  it("renders the logo and app name", () => {
    render(
      <HomeHeader
        breedOptions={mockBreedOptions}
        selectedBreed={null}
        setSelectedBreed={mockSetSelectedBreed}
      />
    );

    expect(screen.getByAltText("Logo")).toBeInTheDocument();
    expect(screen.getByText("Pet Details")).toBeInTheDocument();
  });

  it("renders the select input with breed options", () => {
    render(
      <HomeHeader
        breedOptions={mockBreedOptions}
        selectedBreed={null}
        setSelectedBreed={mockSetSelectedBreed}
      />
    );

    const selectInput = screen.getByPlaceholderText("Search and select breed");
    fireEvent.focus(selectInput);

    mockBreedOptions.forEach((option) => {
      expect(screen.getByText(option.label)).toBeInTheDocument();
    });
  });

  it("calls setSelectedBreed when a breed is selected", () => {
    render(
      <HomeHeader
        breedOptions={mockBreedOptions}
        selectedBreed={null}
        setSelectedBreed={mockSetSelectedBreed}
      />
    );

    const selectInput = screen.getByPlaceholderText("Search and select breed");
    fireEvent.focus(selectInput);

    const labradorOption = screen.getByText("Labrador");
    fireEvent.click(labradorOption);

    expect(mockSetSelectedBreed).toHaveBeenCalledWith({
      value: 1,
      label: "Labrador",
    });
  });

  it("renders the selected breed", () => {
    render(
      <HomeHeader
        breedOptions={mockBreedOptions}
        selectedBreed={mockSelectedBreed}
        setSelectedBreed={mockSetSelectedBreed}
      />
    );

    expect(screen.getByText("Labrador")).toBeInTheDocument();
  });

  it("renders the select input with breed options", () => {
    render(
      <HomeHeader
        breedOptions={mockBreedOptions}
        selectedBreed={null}
        setSelectedBreed={mockSetSelectedBreed}
      />
    );

    const selectInput = screen.getByPlaceholderText("Search and select breed");
    fireEvent.focus(selectInput);

    mockBreedOptions.forEach((option) => {
      expect(screen.getByText(option.label)).toBeInTheDocument();
    });
  });
});
