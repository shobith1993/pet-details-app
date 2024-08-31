import logger from "./logger";

export async function fetchData(url) {
  try {
    logger.info(`Fetching data from URL: ${url}`);

    const response = await fetch(url, {
      headers: {
        "x-api-key": process.env.X_API_KEY,
      },
    });

    if (!response.ok) {
      logger.error(`Failed to fetch data. Status: ${response.status}`);
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    if (!data) {
      logger.warn("No data returned from the API");
      throw new Error("No data returned");
    }

    logger.info("Data fetched successfully");
    return data;
  } catch (error) {
    logger.error(`Error fetching data: ${error.message}`);
    return null;
  }
}
