import { fetchData } from "./useFetch";
import logger from "./logger";

global.fetch = jest.fn();
jest.mock("./logger");

describe("fetchData", () => {
  const mockUrl = "https://api.example.com/data";
  const mockApiKey = "mock-api-key";
  const mockResponseData = { key: "value" };

  beforeEach(() => {
    jest.clearAllMocks();
    process.env.X_API_KEY = mockApiKey; // Mock environment variable
  });

  it("fetches data successfully", async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: jest.fn().mockResolvedValueOnce(mockResponseData),
    });

    const result = await fetchData(mockUrl);

    expect(fetch).toHaveBeenCalledWith(mockUrl, {
      headers: {
        "x-api-key": mockApiKey,
      },
    });
    expect(logger.info).toHaveBeenCalledWith(
      `Fetching data from URL: ${mockUrl}`
    );
    expect(logger.info).toHaveBeenCalledWith("Data fetched successfully");
    expect(result).toEqual(mockResponseData);
  });

  it("logs an error and returns null when the fetch fails", async () => {
    fetch.mockResolvedValueOnce({
      ok: false,
      status: 500,
    });

    const result = await fetchData(mockUrl);

    expect(fetch).toHaveBeenCalledWith(mockUrl, {
      headers: {
        "x-api-key": mockApiKey,
      },
    });
    expect(logger.error).toHaveBeenCalledWith(
      "Failed to fetch data. Status: 500"
    );
    expect(logger.error).toHaveBeenCalledWith(
      expect.stringContaining("Error fetching data:")
    );
    expect(result).toBeNull();
  });

  it("logs a warning and returns null when no data is returned", async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: jest.fn().mockResolvedValueOnce(null),
    });

    const result = await fetchData(mockUrl);

    expect(fetch).toHaveBeenCalledWith(mockUrl, {
      headers: {
        "x-api-key": mockApiKey,
      },
    });
    expect(logger.warn).toHaveBeenCalledWith("No data returned from the API");
    expect(logger.error).toHaveBeenCalledWith(
      expect.stringContaining("Error fetching data:")
    );
    expect(result).toBeNull();
  });

  it("logs an error and returns null when there is a network error", async () => {
    const mockErrorMessage = "Network Error";
    fetch.mockRejectedValueOnce(new Error(mockErrorMessage));

    const result = await fetchData(mockUrl);

    expect(fetch).toHaveBeenCalledWith(mockUrl, {
      headers: {
        "x-api-key": mockApiKey,
      },
    });
    expect(logger.error).toHaveBeenCalledWith(
      `Error fetching data: ${mockErrorMessage}`
    );
    expect(result).toBeNull();
  });
});
