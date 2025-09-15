import axios from "axios";

// Base URL for the properties API
const API_URL = "https://68b826bcb715405043274639.mockapi.io/api/properties/PropertyListing";

// Fetch all properties
export const getProperties = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching properties:", error);
    return [];
  }
};
