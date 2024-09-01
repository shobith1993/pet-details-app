import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Pagination from "./Pagination";

describe("Pagination Component", () => {
  const mockHandleFirstPage = jest.fn();
  const mockHandlePreviousPage = jest.fn();
  const mockHandleNextPage = jest.fn();
  const mockHandleLastPage = jest.fn();

  it("renders correctly and handles page navigation", () => {
    render(
      <Pagination
        currentPage={2}
        totalPages={5}
        handleFirstPage={mockHandleFirstPage}
        handlePreviousPage={mockHandlePreviousPage}
        handleNextPage={mockHandleNextPage}
        handleLastPage={mockHandleLastPage}
      />
    );

    expect(screen.getByText("2 of 5")).toBeInTheDocument();
    expect(screen.getByText("First")).toBeInTheDocument();
    expect(screen.getByText("Previous")).toBeInTheDocument();
    expect(screen.getByText("Next")).toBeInTheDocument();
    expect(screen.getByText("Last")).toBeInTheDocument();

    fireEvent.click(screen.getByText("First"));
    expect(mockHandleFirstPage).toHaveBeenCalled();

    fireEvent.click(screen.getByText("Previous"));
    expect(mockHandlePreviousPage).toHaveBeenCalled();

    fireEvent.click(screen.getByText("Next"));
    expect(mockHandleNextPage).toHaveBeenCalled();

    fireEvent.click(screen.getByText("Last"));
    expect(mockHandleLastPage).toHaveBeenCalled();
  });
});
