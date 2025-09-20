
import axios from "axios"

const BASE_URL = "https://api.github.com"


export const searchUsers = async ({ query, location, minRepos }) => {
  try {
    let searchQuery = query ? `${query} in:login` : "type:user"

    // Add location filter if provided
    if (location) {
      searchQuery += ` location:${location}`
    }


    if (minRepos) {
      searchQuery += ` repos:>=${minRepos}`
    }

    const response = await axios.get(`${BASE_URL}/search/users`, {
      params: { q: searchQuery },
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
    })

    return response.data.items
  } catch (error) {
    console.error("Error fetching users:", error)
    throw error
  }
}
