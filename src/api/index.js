import axios from "axios";

// Define the URL for the API endpoint
const URL = "https://travel-advisor.p.rapidapi.com";

// Adjusted getPlacesData function
export const getPlacesData = async (type, sw, ne) => {
  try {
    // Fetching data from the API
    const response = await axios.get(`${URL}/${type}/list-in-boundary`, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
        // "x-rapidapi-key": process.env.MAP_PAGE_API_KEY,
      },
    });

    // Extract data from the response
    const data = response.data?.data || [];

    // Filter out places without names or reviews
    return data.filter((place) => place.name && place.num_reviews > 0);
  } catch (error) {
    // Enhanced error logging
    console.error(
      "Error fetching places data:",
      error.response?.data || error.message || error
    );
    return []; // Return an empty array if there is an error
  }
};
