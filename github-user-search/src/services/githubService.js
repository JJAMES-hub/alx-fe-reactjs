import axios from "axios";

// Advanced search function
export const searchUsers = async (query) => {
  const response = await axios.get(
    `https://api.github.com/search/users?q=${query}`
  );
  return response.data.items; // API returns results inside "items"
};
