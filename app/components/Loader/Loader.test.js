import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Loader from "./Loader";

describe("Loader Component", () => {
  it("renders the loading message", () => {
    render(<Loader />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });
});
