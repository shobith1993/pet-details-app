import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import WelcomeText from "./WelcomeText";

jest.mock("../../data/pets.json", () => ({
  welcomeText: "Welcome to the Pet App!",
  Dog: { welcomeMessage: "Discover amazing dog breeds!" },
  Cat: { welcomeMessage: "Discover amazing cat breeds!" },
}));

describe("WelcomeText Component", () => {
  it("displays the correct welcome message for the selected pet type", () => {
    render(<WelcomeText petType="Dog" />);
    expect(screen.getByText("Welcome to the Pet App!")).toBeInTheDocument();
    expect(
      screen.getByText("Discover amazing dog breeds!")
    ).toBeInTheDocument();
  });
});
