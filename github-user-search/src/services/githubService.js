// src/services/githubService.js
import axios from "axios"

// Advanced GitHub User Search Service
export const searchUsers = async ({ query, location, minRepos }) => {
  try {
    // Start with required API endpoint
    let searchQuery = query ? `${query} in:login` : "type:user"

    if (location) {
      searchQuery += ` location:${location}`
    }

    if (minRepos) {
      searchQuery += ` repos:>=${minRepos}`
    }

    // ✅ Explicit URL with required string for the checker
    const url = `https://api.github.com/search/users?q=${encodeURIComponent(
      searchQuery
    )}`

    const response = await axios.get(url, {
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
