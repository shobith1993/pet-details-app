// app/utils/useFetch.js
import winston from "winston";
import logger from "./logger"; // Import the Winston logger

export async function fetchData(url) {
  try {
    logger.info(`Fetching data from URL: ${url}`); // Log the URL being fetched

    const response = await fetch(url, {
      headers: {
        "x-api-key":
          "live_p6VBIZ4snMuIyiDLx5hGJQrT24kVASi64pDHG8EBd2hdNe2cnaHDsgzGSBvsE3W9",
      },
    });

    if (!response.ok) {
      logger.error(`Failed to fetch data. Status: ${response.status}`); // Log fetch failure
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    if (!data) {
      logger.warn("No data returned from the API"); // Log when no data is returned
      throw new Error("No data returned");
    }

    logger.info("Data fetched successfully"); // Log successful data fetch
    return data;
  } catch (error) {
    logger.error(`Error fetching data: ${error.message}`); // Log errors
    return null;
  }
}
